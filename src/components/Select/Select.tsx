// import { useLabelContext } from '@radix-ui/react-label'
// import { useControllableState } from '@radix-ui/react-use-controllable-state'
import { mauve, violet } from '@radix-ui/colors'
import {
  Root,
  Trigger,
  Value,
  Icon,
  Content,
  ScrollUpButton,
  Viewport,
  Item,
  ItemText,
  ItemIndicator,
  Group,
  Separator,
  ScrollDownButton,
  Label
} from '@radix-ui/react-select'
import React, { ComponentProps, ElementRef } from 'react'
import { CSSProps , styled } from '../../stitches.config'

import { ChevronDown, ChevronUp, Check } from '../Icons'
// import type { CSSProps, VariantProps } from '../../stitches.config'
// import { inputStyles } from '../Input/Input'
// import { Label } from '../Label'
// import { useId } from '@radix-ui/react-id'
// import { Svg } from '../Svg'

// const DEFAULT_TAG = 'input'
// const StyledSelect = styled(DEFAULT_TAG, inputStyles, {
//   cursor: 'pointer',
//   textAlign: 'left',
//   pointerEvents: 'none',
// })

// const itemStyles = { color: '$text' }
// export const SelectItem = styled(Item, itemStyles)

// export const SelectContent = Content

const StyledTrigger = styled(Trigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$0',
  padding: '$2 $3 $2 $6',
  cursor: 'default',
  borderRadius: '$default',
  backgroundColor: 'transparent',
  border: 'none',
  color: '$text',
  // boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: '$selection' }
  // '&:focus': { boxShadow: `0 0 0 2px black` },
})

const StyledContent = styled(Content, {
  overflow: 'hidden',
  backgroundColor: 'white',
  borderRadius: '$default',
  boxShadow: '$2'
})

const StyledViewport = styled(Viewport, {
  padding: 5
})

const StyledItem = styled(Item, {
  all: 'unset',
  // lineHeight: 1,
  // display: 'flex',
  // alignItems: 'center',
  // height: 25,
  fontSize: '$0',
  padding: '$2 $3 $2 $6',
  cursor: 'default',
  borderRadius: '$default',
  backgroundColor: 'transparent',
  border: 'none',
  color: '$text',
  outline: 'none',
  transition: 'all 50ms',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  userSelect: 'none',

  // '&[data-disabled]': {
  //   color: mauve.mauve8,
  //   pointerEvents: 'none',
  // },

  // '&:focus': {
  //   backgroundColor: violet.violet9,
  //   color: violet.violet1,
  // },
  '&:focus': {
    background: '$selection',
    cursor: 'pointer'
  },
  '&[data-disabled]': {
    color: '$grey9'
  }
})

const StyledLabel = styled(Label, {
  padding: '0 25px',
  fontSize: 12,
  lineHeight: '25px',
  color: mauve.mauve11
})

const StyledSeparator = styled(Separator, {
  height: 1,
  backgroundColor: violet.violet6,
  margin: 5
})

const StyledItemIndicator = styled(ItemIndicator, {
  position: 'absolute',
  left: '$2',
  width: '$4',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  color: violet.violet11,
  cursor: 'default'
}

const StyledScrollUpButton = styled(ScrollUpButton, scrollButtonStyles)

const StyledScrollDownButton = styled(ScrollDownButton, scrollButtonStyles)

type AbstractSelectProps = ComponentProps<typeof Root> & CSSProps

const AbstractedSelect = React.forwardRef<
  ElementRef<typeof Root>,
  AbstractSelectProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <Root {...props}>
      <StyledTrigger ref={forwardedRef}>
        <Value />
        <ChevronDown />
      </StyledTrigger>
      <StyledContent>
        <ScrollUpButton>
          <ChevronUp />
        </ScrollUpButton>
        <StyledViewport>{children}</StyledViewport>
        <ScrollDownButton>
          <ChevronDown />
        </ScrollDownButton>
      </StyledContent>
    </Root>
  )
})

type AbstractSelectItemProps = ComponentProps<typeof Item>

const AbstractedSelectItem = React.forwardRef<
  ElementRef<typeof StyledItem>,
  AbstractSelectItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledItem {...props} ref={forwardedRef}>
      <ItemText>{children}</ItemText>
      <StyledItemIndicator>
        <Check />
      </StyledItemIndicator>
    </StyledItem>
  )
})

/**
 * Select component
 *
 * Displays a dropdown list of options to the user - usually triggered by clicking a button.
 *
 *
 * Based on [Radix Select](https://www.radix-ui.com/docs/primitives/components/select).
 */
export const Select = AbstractedSelect
export const SelectTrigger = StyledTrigger
export const SelectValue = Value
export const SelectIcon = Icon
export const SelectContent = StyledContent
export const SelectViewport = StyledViewport
export const SelectGroup = Group
export const SelectItem = AbstractedSelectItem
export const SelectItemText = ItemText
export const SelectItemIndicator = StyledItemIndicator
export const SelectLabel = StyledLabel
export const SelectSeparator = StyledSeparator
export const SelectScrollUpButton = StyledScrollUpButton
export const SelectScrollDownButton = StyledScrollDownButton

// Included as exports to allow non-abstracted access to a Styled Radix-based Select
export const SelectRoot = Root
export const SelectRootItem = StyledItem

// export const SelectDemo = () => (
//   <Box>
//     <Select defaultValue="blueberry">
//       <SelectTrigger aria-label="Food">
//         <SelectValue />
//         <SelectIcon>
//           <ChevronDown />
//         </SelectIcon>
//       </SelectTrigger>
//       <SelectContent>
//         <SelectScrollUpButton>
//           <ChevronUp />
//         </SelectScrollUpButton>
//         <SelectViewport>
//           <SelectGroup>
//             <SelectLabel>Fruits</SelectLabel>
//             <SelectItem value="apple">
//               <SelectItemText>Apple</SelectItemText>
//               <SelectItemIndicator>
//                 <Check />
//               </SelectItemIndicator>
//             </SelectItem>
//             <SelectItem value="banana">
//               <SelectItemText>Banana</SelectItemText>
//               <SelectItemIndicator>
//                 <Check />
//               </SelectItemIndicator>
//             </SelectItem>
//             <SelectItem value="blueberry">
//               <SelectItemText>Blueberry</SelectItemText>
//               <SelectItemIndicator>
//                 <Check />
//               </SelectItemIndicator>
//             </SelectItem>
//             <SelectItem value="grapes">
//               <SelectItemText>Grapes</SelectItemText>
//               <SelectItemIndicator>
//                 <Check />
//               </SelectItemIndicator>
//             </SelectItem>
//             <SelectItem value="pineapple">
//               <SelectItemText>Pineapple</SelectItemText>
//               <SelectItemIndicator>
//                 <Check />
//               </SelectItemIndicator>
//             </SelectItem>
//           </SelectGroup>

//           <SelectSeparator />

//           <SelectGroup>
//             <SelectLabel>Vegetables</SelectLabel>
//             <SelectItem value="aubergine">
//               <SelectItemText>Aubergine</SelectItemText>
//               <SelectItemIndicator>
//                 <Check />
//               </SelectItemIndicator>
//             </SelectItem>
//             <SelectItem value="broccoli">
//               <SelectItemText>Broccoli</SelectItemText>
//               <SelectItemIndicator>
//                 <Check />
//               </SelectItemIndicator>
//             </SelectItem>
//             <SelectItem value="carrot" disabled>
//               <SelectItemText>Carrot</SelectItemText>
//               <SelectItemIndicator>
//                 <Check />
//               </SelectItemIndicator>
//             </SelectItem>
//             <SelectItem value="courgette">
//               <SelectItemText>Courgette</SelectItemText>
//               <SelectItemIndicator>
//                 <Check />
//               </SelectItemIndicator>
//             </SelectItem>
//             <SelectItem value="leek">
//               <SelectItemText>leek</SelectItemText>
//               <SelectItemIndicator>
//                 <Check />
//               </SelectItemIndicator>
//             </SelectItem>
//           </SelectGroup>

//           <SelectSeparator />

//           <SelectGroup>
//             <SelectLabel>Meat</SelectLabel>
//             <SelectItem value="beef">
//               <SelectItemText>Beef</SelectItemText>
//               <SelectItemIndicator>
//                 <Check />
//               </SelectItemIndicator>
//             </SelectItem>
//             <SelectItem value="chicken">
//               <SelectItemText>Chicken</SelectItemText>
//               <SelectItemIndicator>
//                 <Check />
//               </SelectItemIndicator>
//             </SelectItem>
//             <SelectItem value="lamb">
//               <SelectItemText>Lamb</SelectItemText>
//               <SelectItemIndicator>
//                 <Check />
//               </SelectItemIndicator>
//             </SelectItem>
//             <SelectItem value="pork">
//               <SelectItemText>Pork</SelectItemText>
//               <SelectItemIndicator>
//                 <Check />
//               </SelectItemIndicator>
//             </SelectItem>
//           </SelectGroup>
//         </SelectViewport>
//         <SelectScrollDownButton>
//           <ChevronDown />
//         </SelectScrollDownButton>
//       </SelectContent>
//     </Select>
//   </Box>
// )

// const Root = styled('div', {
//   boxSizing: 'border-box',
//   position: 'relative',
//   cursor: 'pointer',
//   display: 'inline-flex',
//   alignItems: 'center',
//   width: '100%',
//   [`& ${Svg}`]: {
//     position: 'absolute',
//     right: '$4',
//   },
//   variants: {
//     disabled: {
//       true: {
//         pointerEvents: 'none',
//       },
//     },
//   },
// })

// type SelectVariants = VariantProps<typeof StyledSelect>
// type SelectProps = CSSProps &
//   SelectVariants & {
//     /** Add a label to the Select */
//     label?: string
//     /** To supply a controlled value */
//     value?: string
//     /** Supply a starting value for uncontrolled instance */
//     defaultValue?: string
//     /** Supply a starting placeholder value for uncontrolled instance */
//     placeholder?: string
//     /** Supply a header for the select menu  */
//     header?: string
//     /** Called on Select change with new value */
//     onValueChange?: (value: string) => void
//   } & ComponentProps<typeof DEFAULT_TAG>

// const SELECT_CLASS_NAME = 'c-select'

// /**
//  * Select component
//  *
//  * ___!! This is a temporary implementation, to be replaced on release of radix-ui select. !!___
//  *
//  *
//  */
// export const Select = forwardRef<ElementRef<typeof StyledSelect>, SelectProps>(
//   (
//     {
//       label,
//       id: idProp,
//       value,
//       onValueChange,
//       defaultValue,
//       children,
//       placeholder,
//       header,
//       disabled,
//       ...props
//     },
//     ref
//   ) => {
//     const [internalValue, setValue] = useControllableState({
//       prop: value,
//       defaultProp: defaultValue || placeholder,
//       onChange: onValueChange,
//     })

//     const id = useId(idProp)
//     const labelId = useLabelContext()

//     const valueToText = useMemo<Record<string, string>>(() => {
//       const mapped: Record<string, string> = {}
//       Children.forEach(Children.toArray(children), (child) => {
//         if (
//           isValidElement(child) &&
//           // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
//           typeof child?.props?.children === 'string'
//         ) {
//           // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
//           mapped[child.props.value] = child.props.children
//         }
//       })
//       return mapped
//     }, [children])

//     return (
//       <>
//         {label && (
//           <Label variant="above" htmlFor={id || labelId}>
//             {label}
//           </Label>
//         )}
//         <Menu>
//           <MenuTrigger>
//             <Root disabled={disabled} className={SELECT_CLASS_NAME}>
//               <StyledSelect
//                 id={id}
//                 aria-labelledby={labelId}
//                 disabled={disabled}
//                 {...props}
//                 ref={ref}
//                 placeholder={placeholder}
//                 value={internalValue && valueToText[internalValue]}
//                 // Just there to suppress warning
//                 onChange={() => null}
//               />
//               <ChevronDown />
//             </Root>
//           </MenuTrigger>
//           <MenuContent align="start" sideOffset={4} alignOffset={4}>
//             {header && <MenuItem disabled>{header}</MenuItem>}
//             <MenuRadioGroup value={internalValue} onValueChange={setValue}>
//               {children}
//             </MenuRadioGroup>
//           </MenuContent>
//         </Menu>
//       </>
//     )
//   }
// )
// Select.toString = () => `.${SELECT_CLASS_NAME}`

// export const Select = Root
