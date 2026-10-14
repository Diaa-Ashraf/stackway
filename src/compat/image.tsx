import React, { forwardRef } from 'react';

export interface NextImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  quality?: number | string;
  unoptimized?: boolean;
}

export const Image = forwardRef<HTMLImageElement, NextImageProps>(function Image(
  { src, alt = '', fill, priority, sizes, quality, unoptimized, className, style, ...rest },
  ref
) {
  const combinedClass = [
    fill ? 'absolute inset-0 w-full h-full object-cover' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={combinedClass || undefined}
      style={style}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      {...rest}
    />
  );
});

export default Image;
