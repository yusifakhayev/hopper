import React from 'react'
import {Physics} from '@react-three/rapier'
import World from './World/World'
import Ball from './World/Ball'
import Environment from './World/Environment'

export default function Experience() {
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


