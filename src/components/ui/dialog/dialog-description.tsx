import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";

import { cn } from "@/lib/utils.ts";

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    className={cn("mb-4 text-body-semibold-sm text-neutral-11", className)}
    ref={ref}
    {...props}
  />
));

DialogDescription.displayName = DialogPrimitive.Description.displayName;

export default DialogDescription;
