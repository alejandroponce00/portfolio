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
    
      <Suspense fallback={<div>Loading 3D model...</div>}>
        <SplineComponent />
      </Suspense>
    
  )
}

