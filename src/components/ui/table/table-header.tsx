import * as React from "react";

import { cn } from "@/lib/utils.ts";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead className={cn("[&_tr]:border-b", className)} ref={ref} {...props} />
));

TableHeader.displayName = "TableHeader";

export default TableHeader;
