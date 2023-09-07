import * as React from "react";

import { cn } from "@/lib/utils.ts";

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("text-xs ml-auto tracking-widest opacity-60", className)}
      {...props}
    />
  );
};

DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export default DropdownMenuShortcut;
