"use client"
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sparkles } from '@react-three/drei'

const RotatingCube = ()=> {
  const meshRef = useRef(null)
  useFrame(()=>{
    if(meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.x += 0.01
    }
  })

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1,1,1]} />
      <meshLambertMaterial color='#468585' emissive='#468585' />
    </mesh>
  )
}

export default function ThreeTest() {
  return (
    <Canvas className='w-full h-full'>
      <OrbitControls enableZoom enablePan enableRotate />
      <directionalLight position={[1,1,1]} intensity={10} color={0x9CDBA6} />
      <RotatingCube />
      <Sparkles count={100} scale={1} size={6} speed={0.002} noise={0.5} />
    </Canvas>
  )
}

/*

<Canvas>
  <OrbitControls enableZoom enablePan enableRotate />
  <directionalLight position={[1,1,1]} intensity={10} color={0x9CDBA6} />
  <RotatingCube />
  <Sparkles count={100} scale={1} size={6} speed={0.002} noise={0.5} />
</Canvas>

*/
