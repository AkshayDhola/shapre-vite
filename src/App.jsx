import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import * as THREE from 'three'
import Shaper from './Shaper'
function App() {
  return (
    <div className="w-full h-screen relative">
      <div className='max-w-screen-xl px-4 py-2 mx-auto'>
      <h2 className='text-white'>Ship-insure</h2>
      </div>
      <div className="absolute flex w-5/6 justify-center items-center text-white top-44 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-6xl font-[800] uppercase">you ship it. we insure it</h1>
      </div>
      <Canvas camera={{fov:2,position:[0,-1,220]}}>

    {/* <OrbitControls /> */}
    <Environment
        files={[
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/brown_photostudio_02_4k.exr",
        ]}
      />
      <ScrollControls pages={7}>
    <Shaper/>
      </ScrollControls>
      </Canvas>
   </div>
  )
}

export default App
