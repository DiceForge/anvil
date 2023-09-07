import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { cn } from "@/lib/utils.ts";

const DropdownMenuGroup = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Group>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Group
    className={cn("flex flex-col gap-2", className)}
    {...props}
    ref={ref}
  />
));

DropdownMenuGroup.displayName = "DropdownMenuGroup";

export default DropdownMenuGroup;
