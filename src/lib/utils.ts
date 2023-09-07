import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customMerge = extendTailwindMerge({
  classGroups: {
    fontSize: [
      "text-body-regular-xs",
      "text-body-regular-sm",
      "text-body-regular-md",
      "text-body-regular-lg",
      "text-body-regular-xl",
      "text-body-medium-xs",
      "text-body-medium-sm",
      "text-body-medium-md",
      "text-body-medium-lg",
      "text-body-medium-xl",
      "text-body-semibold-xs",
      "text-body-semibold-sm",
      "text-body-semibold-md",
      "text-body-semibold-lg",
      "text-body-semibold-xl",
      "text-body-bold-xs",
      "text-body-bold-sm",
      "text-body-bold-md",
      "text-body-bold-lg",
      "text-body-bold-xl",
      "text-display-2xl",
      "text-display-xl",
      "text-display-lg",
      "text-display-md",
      "text-display-sm",
      "text-display-xs",
    ],
  },
});

export function cn(...inputs: ClassValue[]) {
  return customMerge(clsx(inputs));
}
