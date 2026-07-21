import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const styles = cva("inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/50 disabled:pointer-events-none disabled:opacity-50", { variants: { variant: { default: "bg-white text-zinc-950 hover:bg-zinc-200", subtle: "bg-white/[.06] text-zinc-200 hover:bg-white/[.1] border border-white/[.08]", ghost: "text-zinc-400 hover:bg-white/[.06] hover:text-white" }, size: { default: "h-10 px-4", sm: "h-8 px-3 text-xs", icon: "h-9 w-9" } }, defaultVariants: { variant: "default", size: "default" } });
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof styles> { asChild?: boolean }
export function Button({ className, variant, size, asChild, ...props }: ButtonProps) { const Comp = asChild ? Slot : "button"; return <Comp className={cn(styles({ variant, size }), className)} {...props} />; }
