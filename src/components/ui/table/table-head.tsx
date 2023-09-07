import * as React from "react";

import { cn } from "@/lib/utils.ts";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    className={cn(
      "h-xl px-4 text-left align-middle font-body text-body-semibold-sm text-neutral-12 [&:has([role=checkbox])]:pr-0",
      className,
    )}
    ref={ref}
    {...props}
  />
));

TableHead.displayName = "TableHead";

export default TableHead;
