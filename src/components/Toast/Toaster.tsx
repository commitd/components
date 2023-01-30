import React, {
  createContext,
  FC,
  Fragment,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react'
import { Toast, ToastProps } from './Toast'

export type ToastData = Partial<Omit<ToastProps, 'duration' | 'title'>> & {
  id?: string
  duration?: ToastProps['duration'] | null
  title: ToastProps['title']
  onClose?: () => void
} & (
    | {
        actions: ReactNode
        altText: string
      }
    | {
        actions?: never
      }
  )

type InternalToastData = ToastData & {
  id: string
  timestamp: number
  duration?: ToastProps['duration']
}

type ToasterState = {
  toasts: Map<string, InternalToastData>
}

interface ToasterProps {
  toasts: Map<string, InternalToastData>
  onRemove: (id: string) => void
}

type WatcherToastProps = InternalToastData & {
  onRemove: (id: string) => void
}

const WatchedToast: FC<WatcherToastProps> = ({
  id,
  onRemove,
  onClose,
  actions,
  ...props
}) => {
  const onOpenChange = useCallback(
    (state) => {
      if (!state) {
        onRemove(id)
        onClose?.()
      }
    },
    [id, onRemove, onClose]
  )
  return (
    <Toast {...props} onOpenChange={onOpenChange}>
      {actions}
    </Toast>
  )
}

const Toaster: FC<ToasterProps> = ({ toasts, onRemove }) => {
  const toastElements = Array.from(toasts.values())
    .sort((toastA, toastB) => toastA.timestamp - toastB.timestamp)
    .map(({ id, ...props }) => {
      return <WatchedToast {...props} key={id} id={id} onRemove={onRemove} />
    })

  return <div id="toaster">{toastElements}</div>
}

const ADD_TOAST = 0
const REMOVE_TOAST = 1

type Action =
  | { type: typeof ADD_TOAST; payload: ToastData }
  | { type: typeof REMOVE_TOAST; payload: string }

const initialState: ToasterState = {
  toasts: new Map<string, InternalToastData>(),
}

let toastCounter = 0

type AddToast = (toast: ToastData) => void
type ToasterApi = { addToast: AddToast }

const ToasterContext = createContext<ToasterApi | null>(null)

const reducer = (prevState: ToasterState, action: Action): ToasterState => {
  const { type, payload } = action

  switch (type) {
    case ADD_TOAST: {
      const id = payload.id ?? `${toastCounter++}`
      const nextToasts = new Map(prevState.toasts)
      const prevToast = nextToasts.get(id)

      const isDuplicate = !!prevToast
      let timestamp = new Date().getMilliseconds()
      if (isDuplicate) {
        // keep the original timestamp.
        timestamp = prevToast.timestamp
      }
      // use null to indicate not close automatically
      let duration = payload.duration
      if (duration === null) {
        // keep the original timestamp.
        duration = Number.POSITIVE_INFINITY
      }

      nextToasts.set(id, {
        ...payload,
        id,
        duration,
        timestamp,
      })

      return {
        ...prevState,
        toasts: nextToasts,
      }
    }
    case REMOVE_TOAST: {
      const nextToasts = new Map(prevState.toasts)
      nextToasts.delete(payload)

      return {
        ...prevState,
        toasts: nextToasts,
      }
    }
    default:
      return prevState
  }
}

export type ToasterProviderProps = Pick<
  ToastData,
  'severity' | 'duration' | 'close'
>

const InternalToasterProvider: FC<PropsWithChildren<ToasterProviderProps>> = ({
  children,
  severity,
  duration,
  close,
}) => {
  const [{ toasts }, dispatch] = useReducer(reducer, initialState)

  const addToast = useCallback(
    (toast: ToastData) =>
      dispatch({
        type: ADD_TOAST,
        payload: {
          severity,
          duration,
          close,
          ...toast,
        },
      }),
    [severity, duration, close]
  )

  const removeToast = useCallback(
    (id: string) => dispatch({ type: REMOVE_TOAST, payload: id }),
    []
  )

  const api = useMemo(
    () => ({
      addToast,
    }),
    [addToast]
  )

  return (
    <ToasterContext.Provider value={api}>
      {children}
      <Toaster toasts={toasts} onRemove={removeToast} />
    </ToasterContext.Provider>
  )
}

const ToasterProvider = ({
  children,
  ...props
}: PropsWithChildren<ToasterProviderProps>) => {
  const currentContext = useContext(ToasterContext)

  if (currentContext !== null) {
    // Bail early as "ToasterProvider" is already setup
    return <Fragment>{children}</Fragment>
  }

  return (
    <InternalToasterProvider {...props}>{children}</InternalToasterProvider>
  )
}

const useToast = () => {
  const api = useContext(ToasterContext)
  if (!api) {
    throw new Error('useToast must be used within a ToasterProvider')
  }
  return api
}

export { ToasterProvider, useToast }
