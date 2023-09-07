import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils.ts";

const contentStyles = cva(
  "animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 flex flex-col gap-2 overflow-hidden rounded-md border bg-surface p-4 text-neutral-12 shadow-md",
  {
    variants: {
      size: {
        xs: "w-24",
        sm: "w-32",
        md: "w-64",
        lg: "w-96",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> &
    VariantProps<typeof contentStyles>
>(({ className, sideOffset = 4, size, align = "start", ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      align={align}
      className={cn(contentStyles({ className, size }), className)}
      ref={ref}
      sideOffset={sideOffset}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));

DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

export default DropdownMenuContent;
