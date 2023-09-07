import { forwardRef, HTMLAttributes, Ref } from "react";

import { cn } from "@/lib/utils";

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
}

type CardHeaderRef = Ref<HTMLDivElement>;

const CardHeader = forwardRef((props: CardHeaderProps, ref: CardHeaderRef) => {
  const { title, subtitle, className, ...rest } = props;

  return (
    <div className={cn("flex flex-col gap-1", className)} {...rest} ref={ref}>
      <span className="truncate font-display text-display-xs leading-none">
        {title}
      </span>
      {subtitle && (
        <span className="text-body-semibold-sm text-neutral-11">
          {subtitle}
        </span>
      )}
    </div>
  );
});

CardHeader.displayName = "CardHeader";

export default CardHeader;
