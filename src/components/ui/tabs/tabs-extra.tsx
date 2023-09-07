import * as React from "react";

import { cn } from "@/lib/utils.ts";

const TabsExtra = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn("flex flex-1 justify-end gap-2 px-5", className)}
    ref={ref}
    {...props}
  />
));

TabsExtra.displayName = "TabsExtra";

export default TabsExtra;
