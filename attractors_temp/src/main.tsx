import React from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './Experience/Experience'
import { Canvas } from '@react-three/fiber'
import './index.css'
import {KeyboardControls} from '@react-three/drei'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <KeyboardControls
        map={[
            {name: 'forward', keys: ['ArrowUp']},
            {name: 'backward', keys: ['ArrowDown']},
            {name: 'left', keys: ['ArrowLeft']},
            {name: 'right', keys: ['ArrowRight']},
            {name: 'jump', keys: ['Space']},
            {name: 'zoomIn', keys: ['KeyW']},
            {name: 'zoomOut', keys: ['KeyS']},
            {name: 'zoomInY', keys: ['KeyQ']},
            {name: 'zoomOutY', keys: ['KeyE']},
            {name: 'rotateLeft', keys: ['KeyZ', 'KeyH']},
            {name: 'rotateRight', keys: ['KeyX', 'KeyN']},
        ]}
    >
        <Canvas
            shadows
            camera={{
                near: 0.001,
                far: 20000,
                position: [1,2,3]
            }}
        >
            <color args={['#101927']} attach='background' />
            <Experience />
        </Canvas>
    </KeyboardControls>
)
