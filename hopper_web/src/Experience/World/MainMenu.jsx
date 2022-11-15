import React from 'react'
import {Attractor, RigidBody, CuboidCollider} from '@react-three/rapier'
import {useFrame} from '@react-three/fiber'
import {useControls} from 'leva'
import {useRef} from 'react'

export default function MainMenu({position=[0,-1,0], offset=0, textA=false, textB=false, textC=false, textD=false}) {

    const floor = useRef()

    const {floorRestitution, floorFriction} = useControls('Physics', {
        floorRestitution: 0.2,
        floorFriction: 0,
    })

    const {floorColor} = useControls('Floor', {
        floorColor: '#510404'
    })



    useFrame((state, delta) => {
        const elapsed = state.clock.getElapsedTime()
        const time = Math.sin(elapsed * offset)
        floor.current.setNextKinematicTranslation({x:position[0], y: position[1] + time, z: position[2]})
    })

    return <>
        <RigidBody
            ref={floor}
            type='kinematicPosition'
            friction={floorFriction}
            restitution={floorRestitution}
        >
            {/*fucking broken piece of shit*/} {/*textA ? <Text3D font="/helvetiker_regular.typeface.json" > hey hey hey <meshNormalMaterial /> </Text3D> : null */}

            <mesh
                receiveShadow
                scale={[6, 0.2, 6]}
                position={position}
            >
                <boxGeometry />
                <meshStandardMaterial color={floorColor}/>
            </mesh>
        </RigidBody>
        <RigidBody
            friction={0.7}
            restitution={0}
            colliders={ false }
            position={position}
        >
            {/*fucking broken piece of shit*/} {/*textA ? <Text3D font="/helvetiker_regular.typeface.json" > hey hey hey <meshNormalMaterial /> </Text3D> : null */}

            <mesh
                receiveShadow
                castShadow
            >
                <boxGeometry
                    args={[1,1,1]}
                />
                <meshNormalMaterial/>
            </mesh>
            <CuboidCollider mass={0.0004} args={[0.5,0.5,0.5]}/>
        </RigidBody>
    </>
}
