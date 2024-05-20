import type React from 'react'
export type IconProps = React.SVGAttributes<SVGElement>

export const IconPropsDefault: IconProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': true,
  focusable: 'false'
}

export { IconPost } from './IconPost'
export { IconPhoto } from './IconPhoto'
export { IconAlbum } from './IconAlbum'
export { IconProject } from './IconProject'
export { IconMore } from './IconMore'
