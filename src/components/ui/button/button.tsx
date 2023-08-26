import { VariantProps } from "class-variance-authority";
import {
  ButtonHTMLAttributes,
  forwardRef,
  MouseEvent,
  Ref,
  useState,
} from "react";

import { buttonVariants } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {}

type ButtonRef = Ref<HTMLButtonElement>;

const Button = forwardRef((props: ButtonProps, ref: ButtonRef) => {
  const {
    children,
    variant,
    color,
    size,
    fullWidth,
    iconButton,
    loading,
    className,
    onClick,
    ...rest
  } = props;
  const [internalLoading, setInternalLoading] = useState(false);

  const isLoading = internalLoading || loading;

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      setInternalLoading(true);

      Promise.resolve(onClick(e)).then(() => setInternalLoading(false));
    }
  };

  return (
    <button
      className={buttonVariants({
        size,
        variant,
        color,
        fullWidth,
        iconButton,
        loading: isLoading,
        className,
      })}
      onClick={clickHandler}
      {...rest}
      ref={ref}
    >
      {isLoading && <Icon className="animate-spin" name="Loader" />}
      <span className="flex gap-2">{children}</span>
    </button>
  );
});

Button.displayName = "Button";

export default Button;
