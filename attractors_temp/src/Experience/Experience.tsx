import React from 'react'
import {Physics} from '@react-three/rapier'
import {Perf} from 'r3f-perf'
import {OrbitControls, Sphere} from '@react-three/drei'
import Attractor from './Attractor'
import Environment from './Environment'
import Floors from './Floors'
import Ball from './Ball'

// <OrbitControls makeDefault />
export default function Experience() {
    return <>
        <Perf />
        <Physics
        >

            <OrbitControls makeDefault />
            <Attractor />
            <Floors position={[0,-20, 0]}/>
            <Floors position={[0,60, 0]} />
            <Floors position={[0, 20, -40]} rotation={[-Math.PI * 0.5, 0, 0]}/>
            <Floors position={[0, 20, 40]} rotation={[-Math.PI * 0.5, 0, 0]}/>
            <Floors position={[40, 20, 0]} rotation={[-Math.PI * 0.5, 0, Math.PI * 0.5]}/>
            <Floors position={[-40, 20, 0]} rotation={[-Math.PI * 0.5, 0, Math.PI * 0.5]} gogo/>
            <Environment />
        </Physics>
    </>
}
