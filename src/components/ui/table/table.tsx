import * as React from "react";

import { cn } from "@/lib/utils.ts";

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="w-full overflow-auto">
    <table
      className={cn("w-full caption-bottom text-body-regular-sm", className)}
      ref={ref}
      {...props}
    />
  </div>
));

Table.displayName = "Table";

export default Table;
