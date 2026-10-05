import type { ImgHTMLAttributes } from 'react'

import { images, type ImageName } from '@/data/images'

interface Props extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  name: ImageName
  /** How wide the photo is shown, for the browser to pick a file. */
  sizes: string
  /** Leave the alt text empty when the photo only decorates. */
  decorative?: boolean
}

export function Photo({ name, sizes, decorative, ...props }: Props) {
  const photo = images[name]
  return (
    <img
      src={photo.src}
      srcSet={photo.srcset}
      sizes={sizes}
      width={photo.w}
      height={photo.h}
      alt={decorative ? '' : photo.alt}
      {...props}
    />
  )
}
