/* eslint-disable jsx-a11y/anchor-has-content */
import { UrlObject } from 'url';

import React from 'react';
import clsx from 'clsx';
import { withRouter, NextRouter } from 'next/router';
import NextLink, { LinkProps } from 'next/link';
import MuiLink from '@material-ui/core/Link';

const NextComposed = React.forwardRef(function NextComposed(
  props: {
    component?: unknown;
    className: string;
    as?: string | UrlObject | undefined;
    href?: string;
    prefetch?: any;
  },
  ref: any
) {
  const { as, href, prefetch, ...other } = props;

  return (
    <NextLink href={href} prefetch={prefetch} as={as}>
      <a ref={ref} {...other} />
    </NextLink>
  );
});

interface CustomLinkProps extends LinkProps {
  activeClassName: string;
  router: NextRouter;
  className: any;
  innerRef: any;
  naked: any;
  href: string;
  children: any;
}
// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function Link(props: CustomLinkProps) {
  const {
    href,
    activeClassName = 'active',
    router,
    className: classNameProps,
    innerRef,
    naked,
    children,
    ...other
  } = props;

  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === href && activeClassName
  });

  if (naked) {
    return <NextComposed className={className} ref={innerRef} {...other} />;
  }

  return (
    <MuiLink
      href={href}
      component={NextComposed}
      className={className}
      ref={innerRef}>
      {children}
    </MuiLink>
  );
}

const RouterLink = withRouter(Link);

export default React.forwardRef((props: any, ref: unknown) => (
  <RouterLink {...props} innerRef={ref} />
));
