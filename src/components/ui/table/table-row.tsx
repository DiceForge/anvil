import * as React from "react";

import { cn } from "@/lib/utils.ts";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    className={cn(
      "border-b transition-colors hover:bg-neutral-3 data-[state=selected]:bg-neutral-4",
      className,
    )}
    ref={ref}
    {...props}
  />
));

TableRow.displayName = "TableRow";

export default TableRow;
