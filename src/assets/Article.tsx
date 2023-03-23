import React, { memo, SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18 6H7V5h11zm0 2H7v1h11zm0 3H7v1h11zm-4 4h4v-1h-4zm0 3h3v-1h-3zm-2 2H7v-6h5zm-1-5H8v4h3zm10 8H4V2h17zM20 3H5v19h15z" />
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
);

const ArticleIcon = memo(SVGComponent);
export default ArticleIcon;
