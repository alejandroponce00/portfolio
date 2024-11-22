"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'


const Mundo = dynamic(() => import('./mundo').then((mod) => mod.default), {
  ssr: false,
  loading: () => <div>Loading 3D model...</div>
})

export default function MundoWrapper() {
  return (
    <Suspense fallback={<div>Loading 3D model...</div>}>
      <Mundo />
    </Suspense>
  )
}

