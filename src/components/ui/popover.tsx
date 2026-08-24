import type { ComponentPropsWithoutRef } from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'

export const Popover = PopoverPrimitive.Root
export const PopoverTrigger = PopoverPrimitive.Trigger
export const PopoverAnchor = PopoverPrimitive.Anchor

type PopoverContentProps = ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Content
>

export function PopoverContent({
  className,
  sideOffset = 10,
  align = 'start',
  ...props
}: PopoverContentProps) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        align={align}
        sideOffset={sideOffset}
        className={`z-50 w-auto rounded-[22px] border border-[color:var(--brand-line)] bg-white p-2 shadow-[0_20px_46px_rgba(16,38,58,0.16)] outline-none ${className ?? ''}`}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}
