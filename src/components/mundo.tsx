"use client"

import React from 'react'
import Image from 'next/image';
import oficina from '/public/imagenes/oficina.webp';


export default function SplineComponent() {
  return (
    <Image 
      src={oficina} 
      alt="Oficina" 
      width={500} 
      height={500} 
      className="mx-auto"
    />
  )
}




