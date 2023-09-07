import * as React from "react";

import { cn } from "@/lib/utils.ts";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
);

DialogFooter.displayName = "DialogFooter";

export default DialogFooter;
