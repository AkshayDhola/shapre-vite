import React, { useRef } from 'react'
import {  useGLTF, useScroll, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber';

function Shaper() {
    let model = useGLTF('./Ship.glb');
    let meshes={};
    model.scene.traverse(e =>{    
        meshes[e.name]=e;
    });
    console.log(meshes)
    meshes.RootNode.rotation.y=THREE.MathUtils.degToRad(360);
    let data= useScroll();
    useFrame((state,delta)=>{
      meshes.RootNode.rotation.y=THREE.MathUtils.degToRad(360 - (data.offset*90));
    })
    useFrame((state,delta)=>{
        meshes.RootNode.rotation.z=(THREE.MathUtils.degToRad(360 - (data.offset*20)));
      })
      useFrame((state,delta)=>{
        meshes.RootNode.rotation.x= -(THREE.MathUtils.degToRad(360 - (data.offset*10)));
      })
  return (

    <group  position={[0,-2,20]}>
        <primitive object={model.scene} />
    </group>
  )
}

export default Shaper
