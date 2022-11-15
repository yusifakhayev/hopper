import React from 'react'
import {OrbitControls} from '@react-three/drei'
import {Physics, Debug} from '@react-three/rapier'
import {Canvas} from '@react-three/fiber'
import World from './World/World'
import Ball from './World/Ball'
import Environment from './World/Environment'

export default function App() {
    return <>
        <Physics
            timeStep='vary'
            gravity={[0, -9.82, 0]}
        >
            <Ball />
            <Environment />
            <World />
        </Physics>
    </>
}
