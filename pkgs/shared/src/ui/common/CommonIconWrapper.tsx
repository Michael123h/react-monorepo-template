import type { FC, ReactNode } from 'react'

export interface CommonIconWrapperProps {
  width?: string | number
  height?: string | number
  color?: string
  children: ReactNode
  className?: string
}

export const CommonIconWrapper: FC<CommonIconWrapperProps> = (
  { width, height, color, children, className } = {
    width: 24,
    height: 24,
    color: 'currentColor',
    children: null,
    className: undefined,
  },
) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      style={{ minWidth: `${width}px`, minHeight: `${height}px` }}
      viewBox={`0 0 ${width} ${height}`}
      role="presentation"
    >
      <g fill={color}>{children}</g>
    </svg>
  )
}
