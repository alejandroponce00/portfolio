import React from "react";
import Image from "next/image";

interface SimpleNextImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const SimpleNextImage: React.FC<SimpleNextImageProps> = ({ src, alt, width, height }) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};

export default SimpleNextImage;
