import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-emerald text-white hover:bg-emerald-dark',
        outline: 'border border-border bg-card text-navy hover:bg-background',
        ghost: 'text-navy-soft hover:bg-background hover:text-navy',
        navy: 'bg-navy text-white hover:bg-navy-soft',
      },
      size: {
        default: 'h-10 px-4',
        sm: 'h-9 px-3.5',
        lg: 'h-11 px-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  )
}

export { Button, buttonVariants }
