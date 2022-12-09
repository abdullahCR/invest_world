import React, { CSSProperties } from 'react'

import { Link } from 'react-router-dom'
import './Main.scss'

const baseUrl: Record<string, string | undefined> = {
  guest: process.env.REACT_APP_PORTAL_GUEST_URL,
  admin: process.env.REACT_APP_PORTAL_ADMIN_URL,
  customer: process.env.REACT_APP_PORTAL_CUSTOMER_URL,
  blog: process.env.REACT_APP_BLOG_URL,
}

interface LinkMainTypes {
  to?: string | { search: string }
  href?: string
  portal?: string
  external?: boolean
  className?: string
  target?: string
  rel?: string
  style?: CSSProperties
  onClick?: (e: React.MouseEvent<HTMLElement | MouseEvent>) => void
}

const LinkMain: React.FC<LinkMainTypes> = ({
  to,
  href,
  portal,
  external,
  className,
  target,
  rel,
  style,
  onClick,
  children,
}) => {
  if (external) {
    return (
      <a className={className} style={style} href={href} target="_blank" rel="noreferrer nofollow">
        {children}
      </a>
    )
  }
  if (portal) {
    return (
      <a
        className={className}
        style={style}
        href={`http://${baseUrl[portal]}${to}`}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }
  return (
    <Link className={className} style={style} onClick={onClick} to={to}>
      {children}
    </Link>
  )
}

export default LinkMain
