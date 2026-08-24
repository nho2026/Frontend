import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker, type DayPickerProps } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { cn } from '../../lib/utils'

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: DayPickerProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-2', className)}
      classNames={{
        months: 'flex flex-col gap-4',
        month: 'space-y-4',
        month_caption:
          'relative flex items-center justify-center px-8 pt-1 text-[color:var(--brand-ink)]',
        caption_label: 'text-sm font-semibold',
        nav: 'flex items-center gap-1',
        button_previous:
          'absolute left-0 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--brand-line)] bg-white text-[color:var(--brand-ink)] transition duration-200 hover:bg-[color:var(--brand-blue)]/8',
        button_next:
          'absolute right-0 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--brand-line)] bg-white text-[color:var(--brand-ink)] transition duration-200 hover:bg-[color:var(--brand-blue)]/8',
        month_grid: 'w-full border-collapse',
        weekdays: 'flex',
        weekday:
          'w-10 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-slate-500',
        week: 'mt-2 flex w-full',
        day: 'h-10 w-10 p-0 text-sm',
        day_button:
          'h-10 w-10 rounded-full text-sm font-medium text-[color:var(--brand-ink)] transition duration-200 hover:bg-[color:var(--brand-blue)]/8',
        selected:
          '[&_button]:bg-[linear-gradient(135deg,var(--brand-blue),var(--brand-teal))] [&_button]:text-white [&_button]:shadow-[0_10px_20px_rgba(15,87,115,0.18)]',
        today:
          '[&_button]:border [&_button]:border-[color:var(--brand-line)] [&_button]:bg-[color:var(--brand-blue)]/8',
        outside: '[&_button]:text-slate-300',
        disabled: '[&_button]:cursor-not-allowed [&_button]:text-slate-300 [&_button]:opacity-45',
        hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, className: iconClassName, ...iconProps }) =>
          orientation === 'left' ? (
            <ChevronLeft className={cn('h-4 w-4', iconClassName)} {...iconProps} />
          ) : (
            <ChevronRight className={cn('h-4 w-4', iconClassName)} {...iconProps} />
          ),
      }}
      {...props}
    />
  )
}
