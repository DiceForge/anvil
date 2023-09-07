import * as React from "react";

import { cn } from "@/lib/utils.ts";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    className={cn("bg-primary-9 text-body-medium-sm text-white", className)}
    ref={ref}
    {...props}
  />
));

TableFooter.displayName = "TableFooter";

export default TableFooter;
