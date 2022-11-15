import React from 'react'
import MainMenu from './MainMenu'
import Tightrope from './Tightrope'
import {useControls} from 'leva'
export default function World() {
    const {tightRopePosition, tightRope2Position} = useControls('tightrope', {
            tightRopePosition: {
                value: {x: 0, y: -3, z: -77},
                step: 1,
            },
            tightRope2Position: {
                value: {x: 0, y: -5, z: -126},
                step: 1,
            }
        })
    return <>
        {/*menu tiles*/}
        <MainMenu position={[0, -1, 0]} offset={0} />
        <MainMenu position={[0, -1, -4]} offset={0.5} />
        <MainMenu position={[0, -1, -8]} offset={1.0} />
        <MainMenu position={[0, -1, -12]} offset={1.5} />
        <MainMenu position={[0, -1, -16]} offset={2.0} />
        <MainMenu position={[0, -1, -20]} offset={2.5} />
        <MainMenu position={[0, -1, -24]} offset={0} />

        {/*balancing act ;)*/}
        <Tightrope position={[tightRopePosition.x, tightRopePosition.y, tightRopePosition.z]} scale={[0.5,0.5, 48]}/>
        <Tightrope position={[tightRope2Position.x, tightRope2Position.y, tightRope2Position.z]} scale={[0.5,0.5, 48]}/>
    </>
}
