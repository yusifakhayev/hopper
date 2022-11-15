import React from 'react'
import * as THREE from 'three'
import {RigidBody, CuboidCollider} from '@react-three/rapier'
import {useFrame} from '@react-three/fiber'
import {useRef} from 'react'

export default function Tightrope({position=[0,0,0], scale=[1,1,1]}) {
    const rope = useRef()


    return <>
        <RigidBody
            ref={rope}
            type='fixed'
            position={position}
        >
            <mesh
                scale={scale}
            >
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
        </RigidBody>
    </>
}
