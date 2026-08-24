import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/utils'

type ButtonVariant = 'default' | 'outline' | 'ghost'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: ButtonVariant
}

const variantClasses: Record<ButtonVariant, string> = {
  default:
    'bg-[linear-gradient(135deg,var(--brand-blue),var(--brand-teal))] text-white shadow-[0_16px_32px_rgba(15,87,115,0.22)] hover:-translate-y-0.5',
  outline:
    'border border-[color:var(--brand-line)] bg-white text-[color:var(--brand-ink)] shadow-[0_10px_24px_rgba(16,38,58,0.08)] hover:bg-[color:var(--brand-blue)]/6',
  ghost: 'bg-transparent text-[color:var(--brand-ink)] hover:bg-[color:var(--brand-blue)]/8',
}

export function Button({
  children,
  className,
  type = 'button',
  variant = 'default',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex min-h-11 items-center justify-center rounded-full px-4.5 text-sm font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-60',
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
