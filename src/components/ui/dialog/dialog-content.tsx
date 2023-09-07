import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

import DialogPortal from "./dialog-portal";
import DialogOverlay from "./dialog-overlay";

const dialogContentVariants = cva([
  "fixed",
  "z-50",
  "bottom-0",
  "md:bottom-auto",
  "grid",
  "w-full",
  "gap-2",
  "border",
  "rounded-lg",
  "bg-surface",
  "p-6",
  "shadow-lg",
  "animate-in",
  "data-[state=open]:fade-in-90",
  "data-[state=open]:slide-in-from-bottom-10",
  "sm:zoom-in-90",
  "sm:max-w-3xl",
  "data-[state=open]:sm:slide-in-from-bottom-0",
]);

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> &
    VariantProps<typeof dialogContentVariants>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      className={cn(dialogContentVariants({ className }))}
      ref={ref}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));

DialogContent.displayName = DialogPrimitive.Content.displayName;

export default DialogContent;
