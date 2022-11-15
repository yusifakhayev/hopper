import React from 'react'
import {RigidBody} from '@react-three/rapier'
import {useFrame} from '@react-three/fiber'
import {useRef} from 'react'

const vertexShader =
`
    varying vec2 vUv;
    void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;

        gl_Position = projectedPosition;

        vUv = uv;
    }
`
const fragmentShader =
`
    varying vec2 vUv;
    void main() {
        gl_FragColor = vec4(vUv, 0.5, 0.4);
    }
`

export default function Floors({position=[0,-40,0], rotation=[0, 0, 0], offset=0, gogo=false}) {
    const floor = useRef()
    useFrame((state, delta) => {
        const elapsed = state.clock.getElapsedTime()
        const time = Math.sin(elapsed * 4)
        const gigatime = Math.sin(elapsed * 10) * 10
        gogo ? floor.current.setNextKinematicTranslation({x: position[0] + gigatime, y: position[1], z: position[2]}) : floor.current.setNextKinematicTranslation({x: position[0], y: position[1], z: position[2]})
    })

    return <>
        <RigidBody
            ref={floor}
            type='kinematicPosition'
            colliders='cuboid'
            position={position}
            friction={0.2}
            restitution={0}
        >
            <mesh
                scale={[80, 0.5, 80]}
                rotation={[rotation[0], rotation[1], rotation[2]]}
                receiveShadow
            >
                <boxGeometry />
                <shaderMaterial
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                    transparent={true}
                />
            </mesh>
        </RigidBody>
    </>
}
