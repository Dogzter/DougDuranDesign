"use client"

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Asadawut.Kaewma (https://sketchfab.com/Asadawut.Kaewma)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ford-ranger-next-gen-2023-sport-e93ac097ee9a46a4a9decca9aceed03c
Title: Ford Ranger Next-Gen 2023 Sport
*/

import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'

useGLTF.preload('/assets/mesh/ford_ranger.glb')

export default function FordRanger3D(props) {
  const { nodes, materials } = useGLTF('/assets/mesh/ford_ranger.glb')
  const ref = useRef()

  return (

    <Canvas shadows dpr={[1, 2]} camera={{ fov: 30 }}>
      <OrbitControls ref={ref} autoRotate/>
      <PerspectiveCamera makeDefault position={[0,0.2,1]} />
      <Suspense fallback={null}>
        <Stage controls={ref} preset="rembrandt" intensity={2}  environment="sunset">

        <group {...props} dispose={null}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials.Material__29}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_3.geometry}
              material={materials.Material__31}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.Material__32}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.black_gloss}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.windows_glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials.Material__34}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials.Material__34}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials.Material__34}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials.Material__34}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={materials.Material__27}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials.Material__27}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_13.geometry}
              material={materials.Material__27}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={materials.black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_15.geometry}
              material={materials.black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_16.geometry}
              material={materials.black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_17.geometry}
              material={materials.black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_18.geometry}
              material={materials.black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_19.geometry}
              material={materials.black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={materials.black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_21.geometry}
              material={materials.black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_22.geometry}
              material={materials.black_rim}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_23.geometry}
              material={materials.black_rim}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_24.geometry}
              material={materials.black_rim}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_25.geometry}
              material={materials.black_rim}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_26.geometry}
              material={materials.black_rim}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_27.geometry}
              material={materials.black_rim}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_28.geometry}
              material={materials.black_rim}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_29.geometry}
              material={materials.carpaint}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_30.geometry}
              material={materials.carpaint}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_31.geometry}
              material={materials.carpaint}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_32.geometry}
              material={materials.carpaint}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_33.geometry}
              material={materials.carpaint}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_34.geometry}
              material={materials.chrome}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_35.geometry}
              material={materials.chrome}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_36.geometry}
              material={materials.chrome}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_37.geometry}
              material={materials.chrome}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_38.geometry}
              material={materials.chrome}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_39.geometry}
              material={materials.chrome}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_40.geometry}
              material={materials.chrome}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_41.geometry}
              material={materials.clearglass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_42.geometry}
              material={materials.clearglass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_43.geometry}
              material={materials.clearglass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_44.geometry}
              material={materials.clearglass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_45.geometry}
              material={materials.clearglass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_46.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_47.geometry}
              material={materials.disc}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_48.geometry}
              material={materials.interior}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_49.geometry}
              material={materials.interior}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_50.geometry}
              material={materials.mirror}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_51.geometry}
              material={materials.redglass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_52.geometry}
              material={materials.redglass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_53.geometry}
              material={materials.redglass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_54.geometry}
              material={materials.redglass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_55.geometry}
              material={materials.redglass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_56.geometry}
              material={materials.redglass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_57.geometry}
              material={materials.redglass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_58.geometry}
              material={materials.tyre}
            />
          </group>
        </group>
       
        </Stage>
      </Suspense>
    </Canvas>

  )
}


