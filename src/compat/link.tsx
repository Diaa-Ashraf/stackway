import React, { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';

export interface NextLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href?: string | { pathname?: string; query?: Record<string, string> };
  to?: string;
  replace?: boolean;
  scroll?: boolean;
  prefetch?: boolean;
  children?: React.ReactNode;
}

export const Link = forwardRef<HTMLAnchorElement, NextLinkProps>(function Link(
  { href, to, children, ...rest },
  ref
) {
  const rawTarget = to ?? href ?? '/';
  const target = typeof rawTarget === 'object' ? rawTarget.pathname || '/' : rawTarget;

  // External, anchor or protocol links
  if (
    typeof target === 'string' &&
    (target.startsWith('http://') ||
      target.startsWith('https://') ||
      target.startsWith('mailto:') ||
      target.startsWith('tel:') ||
      target.startsWith('#'))
  ) {
    return (
      <a ref={ref} href={target} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <RouterLink ref={ref} to={target || '/'} {...(rest as any)}>
      {children}
    </RouterLink>
  );
});

export default Link;
