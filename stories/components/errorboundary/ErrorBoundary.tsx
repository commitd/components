import React from 'react'
import { ErrorMessage } from '../errormessage/ErrorMessage'

interface ErrorBoundaryProps {
  errorComponent?: React.ReactNode | null
  errorLogger?: (error: Error) => void
}

interface ErrorBoundaryState {
  error: Error | null
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = {
    error: null,
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { error }
  }

  public componentDidCatch(error: Error) {
    const logger = this.props.errorLogger ?? console.error
    logger(error)
  }

  public render() {
    const { error } = this.state
    if (error == null) {
      return this.props.children
    } else {
      return this.renderError(error)
    }
  }

  public renderError(error: Error) {
    if (this.props.errorComponent === undefined) {
      return <ErrorMessage message={error.message} />
    } else {
      return this.props.errorComponent
    }
  }
}
