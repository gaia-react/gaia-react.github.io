import type {ComponentProps, FC} from 'react';
import zodLogo from './zod-logo.webp';

type ZodLogoProperties = ComponentProps<'img'> &
  ({height?: never; width?: number} | {height?: number; width?: never});

const ZodLogo: FC<ZodLogoProperties> = ({height, width, ...properties}) => {
  const adjustedWidth = height ? height * (640 / 545) : (width ?? 640);
  const adjustedHeight = width ? width * (545 / 640) : (height ?? 545);

  return (
    <img
      alt="Zod"
      height={adjustedHeight}
      src={zodLogo}
      width={adjustedWidth}
      {...properties}
    />
  );
};

export default ZodLogo;
