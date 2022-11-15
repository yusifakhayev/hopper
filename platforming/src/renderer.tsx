import './index.css'
import React from 'react'
import {createRoot} from 'react-dom/client'
import {Canvas} from '@react-three/fiber'
import {KeyboardControls} from '@react-three/drei'
import Experience from './Experience/Experience'
import {Perf} from 'r3f-perf'

const root = createRoot(document.getElementById('root'))
root.render(
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
            {name: 'rotateLeft', keys: ['KeyZ']},
            {name: 'rotateRight', keys: ['KeyX']},
        ]}
    >
        <Canvas
            shadows
        >
            <color args={['#272630']} attach='background' />
            <Experience />
        </Canvas>
    </KeyboardControls>
)
