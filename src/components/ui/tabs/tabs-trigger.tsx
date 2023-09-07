import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils.ts";

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    className={cn(
      [
        "text-body-medium-sm",
        "text-neutral-11",
        "border-b-2",
        "border-b-transparent",
        "px-5",
        "h-10",
        "flex",
        "box-border",
        "cursor-pointer",
        "items-center",
        "gap-2",
        "transition",
        "whitespace-nowrap",

        "hover:bg-neutral-3",
        "active:bg-neutral-4",
        "focus-visible:bg-neutral-3",
        "focus-visible:outline-none",

        "data-[state=active]:text-primary-11",
        "data-[state=active]:border-b-primary-9",
      ],
      className,
    )}
    ref={ref}
    {...props}
  />
));

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export default TabsTrigger;
