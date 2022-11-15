import React from 'react'
import {Box, Html, Sphere, Text, Text3D, Center} from "@react-three/drei"
import {useFrame} from "@react-three/fiber"
import {Attractor, InstancedRigidBodies, InstancedRigidBodyApi, interactionGroups, RigidBody} from "@react-three/rapier"
import {createRef, useEffect, useRef} from "react"

const BALLS = 100

export default function TestObjects() {
  const api = useRef<InstancedRigidBodyApi>(null)
  const colors = ['mediumpurple', 'lightgreen', 'coral', 'salmon', 'midnightblue', 'ivory', 'greenyellow', 'deepskyblue']
  const randSelect = Math.floor(Math.random() * colors.length)

  return (
    <group>
      <InstancedRigidBodies
        ref={api}
        positions={Array.from({ length: BALLS }, (_, i) => [
          Math.floor(i / 30) * 1,
          (i % 30) * 0.5,
          0
        ])}
        colliders={"ball"}
        friction={0}
        restitution={0.6}
      >
        <instancedMesh args={[undefined, undefined, BALLS]} castShadow>
          <sphereGeometry args={[1]} />
          <meshPhysicalMaterial
            roughness={0.5}
            metalness={0.5}
            color={colors[randSelect]}
          />
        </instancedMesh>
      </InstancedRigidBodies>

      <RigidBody
        position={[-21, 50, 0]}
        colliders="ball"
        collisionGroups={interactionGroups(1)}
        friction={0}
        restitution={0.6}
      >
        <Sphere />
        <Center>
            <Text3D
                font='./helvetiker_regular.typeface.json'
            >
                nested attractor
                <meshStandardMaterial color='red' />
            </Text3D>
        </Center>
        <Attractor strength={5} collisionGroups={interactionGroups(1, 2)} />
      </RigidBody>

      <group position={[20, 0, 0]}>
        <Attractor range={20} strength={-2} />
        <Text
            scale={20}
        >
            Repellor
        </Text>
      </group>

      <group position={[-20, 0, 0]}>
        <Attractor range={20} strength={10} />
        <Html
            style={{
                color: 'ivory',
                background: '#23262188',
            }}
        >
            Attractor
        </Html>
      </group>
    </group>
  )
}

