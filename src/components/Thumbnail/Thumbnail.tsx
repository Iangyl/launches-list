import React from 'react';
import ThumbnailStyled from './ThumbnailStyled';

const Thumbnail = ({ src, alt }: { src: string; alt?: string }) => {
  return <ThumbnailStyled src={src} alt={alt ?? 'image fault'} />;
};

export default Thumbnail;
