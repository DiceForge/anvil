import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLProps, Ref } from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "inline-flex",
    "items-center",
    "rounded-full",
    "px-3",
    "h-6",
    "whitespace-nowrap",
    "text-body-semibold-xs",
    "border",
  ],
  {
    variants: {
      color: {
        primary: ["bg-primary-3", "text-primary-11", "border-primary-7"],
        neutral: ["bg-neutral-3", "text-neutral-11", "border-neutral-7"],
        info: ["bg-info-3", "text-info-11", "border-info-7"],
        danger: ["bg-danger-3", "text-danger-11", "border-danger-7"],
        success: ["bg-success-3", "text-success-11", "border-success-7"],
        orange: ["bg-orange-3", "text-orange-11", "border-orange-7"],
        yellow: ["bg-yellow-3", "text-yellow-11", "border-yellow-7"],
      },
    },

    defaultVariants: {
      color: "primary",
    },
  },
);

type BadgeProps = Omit<HTMLProps<HTMLDivElement>, "color"> &
  VariantProps<typeof badgeVariants>;
type BadgeRef = Ref<HTMLDivElement>;

const Badge = forwardRef((props: BadgeProps, ref: BadgeRef) => {
  const { color, className, ...rest } = props;

  return (
    <div
      className={cn(badgeVariants({ className, color }))}
      {...rest}
      ref={ref}
    />
  );
});

Badge.displayName = "Badge";

export default Badge;
