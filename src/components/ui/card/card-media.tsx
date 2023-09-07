import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLProps, Ref } from "react";

const cardMedia = cva(["w-full", "object-cover"], {
  variants: {
    aspectRatio: {
      tall: ["aspect-[4/3]"],
      wide: ["aspect-[16/10]"],
    },
  },
  defaultVariants: {
    aspectRatio: "wide",
  },
});

type Props = VariantProps<typeof cardMedia> & HTMLProps<HTMLImageElement>;
type ElRef = Ref<HTMLImageElement>;

const CardMedia = forwardRef((props: Props, ref: ElRef) => {
  const { className, ...rest } = props;

  return <img className={cardMedia({ className })} {...rest} ref={ref} />;
});

CardMedia.displayName = "CardMedia";

export default CardMedia;
