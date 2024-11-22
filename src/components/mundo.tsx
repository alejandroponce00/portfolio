"use client"

import React, { Suspense } from 'react'
import Spline from '@splinetool/react-spline';

function SplineComponent() {
  return (
    <Spline
      scene="https://prod.spline.design/cNo8mBadIjzxJ1x6/scene.splinecode"
    />
  )
}

export default function Mundo() {
  return (
    <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
      <Suspense fallback={<div>Loading 3D model...</div>}>
        <SplineComponent />
      </Suspense>
    </div>
  )
}

