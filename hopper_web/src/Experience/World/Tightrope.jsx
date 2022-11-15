import React from 'react'
import {RigidBody} from '@react-three/rapier'
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


