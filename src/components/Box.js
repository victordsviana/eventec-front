import React from 'react'

export default function Box() {
    return (
    <mesh rotation={[90,0,90]}>
        <boxGeometry attach='geometry' args={[2,4,4]}/>
        <meshLambertMaterial attach='material' color='red'/>
    </mesh>
    );
}