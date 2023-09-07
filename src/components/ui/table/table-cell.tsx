import * as React from "react";

import { cn } from "@/lib/utils.ts";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    className={cn(
      "h-xl px-4 align-middle [&:has([role=checkbox])]:pr-0",
      className,
    )}
    ref={ref}
    {...props}
  />
));

TableCell.displayName = "TableCell";

export default TableCell;
