import { cn } from "@/lib/utils";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn("text-[#A5455C] text-2xl block mb-2", className)}
      {...props}
    />
  );
}

export default Label;
