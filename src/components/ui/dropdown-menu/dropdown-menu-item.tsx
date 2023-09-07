import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils.ts";

const dropdownMenuItemVariants = cva(
  [
    "relative",
    "flex",
    "cursor-default",
    "select-none",
    "items-center",
    "text-body-medium-sm",
    "rounded",
    "px-2",
    "gap-2",
    "min-h-sm",
    "outline-none",
    "transition-colors",
    "focus:bg-neutral-3",
    "data-[disabled]:pointer-events-none",
    "data-[disabled]:opacity-50",
    "[&>svg]:text-neutral-11",
  ],
  {
    variants: {
      active: {
        true: ["text-primary-11", "text-body-semibold-sm"],
      },
      dangerous: {
        true: ["text-danger-11"],
      },
      inset: {
        true: ["pl-8"],
      },
      size: {
        small: ["text-body-semibold-xs", "text-neutral-11"],
        default: [],
      },
    },

    defaultVariants: {
      size: "default",
    },
  },
);

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> &
    VariantProps<typeof dropdownMenuItemVariants> & {
      inset?: boolean;
    }
>(({ className, inset, active, dangerous, size, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    className={cn(
      dropdownMenuItemVariants({ active, inset, dangerous, size, className }),
    )}
    ref={ref}
    {...props}
  />
));

DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

export default DropdownMenuItem;
