import React from 'react'

export default function Environment() {
    return <>
        <ambientLight
            intensity={0.2}
        />
        <directionalLight
            intensity={0.6}
        />
    </>
}
