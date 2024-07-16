import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import LoadingIcon from "./icons/icon-loading";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inherit disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 text-3xl h-14",
        secondary: "bg-muted text-muted-foreground hover:bg-muted/80",
        ghost: "bg-transparent text-primary hover:bg-primary/10",
      },
      size: {
        default: "min-h-9 px-4 py-2",
        sm: "min-h-8 rounded-md px-3 text-xs",
        lg: "min-h-10 rounded-md px-8",
        icon: "min-h-9 min-w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonProps = {
  loading?: boolean;
  loadingText?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

function Button({
  className,
  variant,
  size,
  loading,
  loadingText,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <LoadingIcon className="animate-spin stroke-[3]" />
          {loadingText ?? children}
        </div>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
