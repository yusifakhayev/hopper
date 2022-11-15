/*
▄▄▄█████▓ ██░ ██ ▓█████     ▄▄▄▄    ▄▄▄       ██▓     ██▓
▓  ██▒ ▓▒▓██░ ██▒▓█   ▀    ▓█████▄ ▒████▄    ▓██▒    ▓██▒
▒ ▓██░ ▒░▒██▀▀██░▒███      ▒██▒ ▄██▒██  ▀█▄  ▒██░    ▒██░
░ ▓██▓ ░ ░▓█ ░██ ▒▓█  ▄    ▒██░█▀  ░██▄▄▄▄██ ▒██░    ▒██░
  ▒██▒ ░ ░▓█▒░██▓░▒████▒   ░▓█  ▀█▓ ▓█   ▓██▒░██████▒░██████▒
  ▒ ░░    ▒ ░░▒░▒░░ ▒░ ░   ░▒▓███▀▒ ▒▒   ▓▒█░░ ▒░▓  ░░ ▒░▓  ░
    ░     ▒ ░▒░ ░ ░ ░  ░   ▒░▒   ░   ▒   ▒▒ ░░ ░ ▒  ░░ ░ ▒  ░
  ░       ░  ░░ ░   ░       ░    ░   ░   ▒     ░ ░     ░ ░   */

import * as THREE from 'three'
import React from 'react'
import {RigidBody, Attractor, useRapier, CuboidCollider} from '@react-three/rapier'
import {useKeyboardControls} from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import {useRef, useEffect, useState} from 'react'
import {useControls} from 'leva'

export default function Ball() {
    let bMass = 0
    const ball = useRef()
    const [ subscribeKeys, getKeys ] = useKeyboardControls()

    const {rapier, world} = useRapier()
    const rapierWorld = world.raw()

    // lerping camera, see camera section in useFrame
    const [smoothCam] = useState(() => new THREE.Vector3(100,100,100))
    const [smoothCamTarget] = useState(() => new THREE.Vector3())

    // CONTROLS
    const [{ ballColor, ballSize, godMode }, set] = useControls('Ball', () => ({
        ballColor: '#ff0000',
        ballSize: 1,
        godMode: true
    }))

    const { ballFriction, ballRestitution, ballLinearDamping, ballAngularDamping} = useControls('Physics', {
        ballFriction: 1,
        ballRestitution: 0.2,
        ballAngularDamping: 0.5,
        ballLinearDamping: 0.5,
    })

    // Ball Functions
    const jump = () => {
        const origin = ball.current.translation()
        origin.y -= .31
        const direction = {x: 0, y: - 1, z: 0}
        const ray = new rapier.Ray(origin, direction)
        const hit = rapierWorld.castRay(ray, 10, true)

        if (hit.toi < 0.5) {
            ball.current.applyImpulse({x: 0, y: bMass * 5, z: 0})
        }
    }
    const godJump = () => {
        ball.current.applyImpulse({x: 0, y: bMass * 5, z: 0})
    }


    const reset = () => {
        ball.current.setTranslation({x: 0, y: 1, z: 0})
        ball.current.setLinvel({x: 0, y: 0, z: 0})
        ball.current.setAngvel({x: 0, y: 0, z: 0})
    }

    useEffect(() => {
        const unsubcribeJump = subscribeKeys(
            (state) => state.jump,
            (value) => {
                if (value)
                    godMode ? godJump() : jump()
            }
        )
        return () => {
            unsubcribeJump()
        }
    })

    let zoomCamZ = 2.25
    let zoomCamY = 1.65
    let rotCamX = 0
    useFrame((state, delta) => {
        // BALL CONTROLS
        const ballMass = ball.current.mass()
        bMass = ballMass
        const {forward, backward, left, right, zoomIn, zoomOut, zoomInY, zoomOutY, rotateLeft, rotateRight} = getKeys()
        const impulse = {x: 0, y: 0, z: 0}
        const torque = {x: 0, y: 0, z: 0}
        const impulseStrength = 10 * delta * ballMass
        const torqueStrength = 6 * delta * ballMass
        // zoomInY, zoomOutY



        // Key Press Tests ;)
        if (forward) {
            impulse.z -= impulseStrength
            torque.x -= torqueStrength
        }

        if (backward) {
            impulse.z += impulseStrength
            torque.x += torqueStrength
        }

        if (right) {
            impulse.x += impulseStrength
            torque.z -= torqueStrength
        }

        if (left) {
            impulse.x -= impulseStrength
            torque.z += torqueStrength
        }
        if (zoomIn) {
            zoomCamZ -= 0.1
        }

        if (zoomOut) {
            zoomCamZ += 0.1
        }
        if (zoomInY) {
            zoomCamY -= 0.1
        }

        if (zoomOutY) {
            zoomCamY += 0.1
        }

        if (rotateLeft) {
            rotCamX = Math.sin(state.clock.elapsedTime * 2)
            zoomCamZ = Math.cos(state.clock.elapsedTime * 2)
        }
        if (rotateRight) {
            rotCamX = Math.cos(state.clock.elapsedTime * 2)
            zoomCamZ = Math.sin(state.clock.elapsedTime * 2)
        }

        ball.current.applyImpulse(impulse)
        ball.current.applyTorqueImpulse(torque)

        // CAMERA
        const ballPosition = ball.current.translation()
        const cameraPosition = new THREE.Vector3()
        cameraPosition.copy(ballPosition)
        cameraPosition.z += zoomCamZ
        cameraPosition.y += zoomCamY
        cameraPosition.x += rotCamX

        const cameraTarget= new THREE.Vector3()
        cameraTarget.copy(ballPosition)
        cameraTarget.y += 0.25

        smoothCam.lerp(cameraPosition, 5 * delta)
        smoothCamTarget.lerp(cameraTarget, 5 * delta)

        state.camera.position.copy(smoothCam)
        state.camera.lookAt(smoothCamTarget)


    })

    return <>
        <RigidBody
            ref={ball}
            restitution={ballRestitution}
            position={[0, 1, 0]}
            friction={ballFriction}
            colliders={false}
            linearDamping={ballLinearDamping}
            angularDamping={ballAngularDamping}
            onSleep={() => set({ballColor: '#ff0000'})}
            onWake={() => set({ballColor: '#00ff00'})}
            gravityScale={2}
        >
            <CuboidCollider mass={100} args={[0.5,0.5,0.5]}/>
            <mesh
                castShadow
            >
                <icosahedronGeometry args={[0.3, 1]} />
                <meshStandardMaterial flatShading color={ballColor} />
            </mesh>
        </RigidBody>
    </>
}

