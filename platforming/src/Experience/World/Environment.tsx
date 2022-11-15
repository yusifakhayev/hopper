import React from 'react'
import {useRef} from 'react'
import {useFrame} from '@react-three/fiber'
import {Environment} from '@react-three/drei'

export default function Environment() {
    const light = useRef()
    useFrame((state) => {
        light.current.position.z = state.camera.position.z + 1 - 4
        light.current.target.position.z = state.camera.position.z - 4
        light.current.position.x = state.camera.position.x + 1 - 4
        light.current.target.position.x = state.camera.position.x - 4
        light.current.target.updateMatrixWorld()
    })
    return <>
        <ambientLight
            intensity={0.2}
        />
        <directionalLight
            ref={light}
            castShadow
            position={[4, 4, 1]}
            intensity={0.6}
            shadow-mapSize={[1024 * 2, 1024 * 2]}
            shadow-camera-near={0.1}
            shadow-camera-far={20}
            shadow-camera-top={20}
            shadow-camera-right={20}
            shadow-camera-bottom={-20}
            shadow-camera-left={-20}
        />
    </>
}
