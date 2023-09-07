import * as React from "react";

import { cn } from "@/lib/utils.ts";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    className={cn("mt-4 text-body-regular-sm text-neutral-11", className)}
    ref={ref}
    {...props}
  />
));

TableCaption.displayName = "TableCaption";

export default TableCaption;
