import { Link } from 'react-router-dom';
import React from 'react';

interface SmartLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const SmartLink: React.FC<SmartLinkProps> = ({ to, children, ...rest }) => {
  const isExternal = /^https?:\/\//i.test(to);

  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );
};

export default SmartLink;
