import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Box from './Box';
import "./style/global.css"

const TechGrid = () => {
    return (
        <>
        <h4>Tecnologias utilazadas</h4>
        <div className='techGrid'><Canvas className='techSize'>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Box />
        </Canvas>
        
        <Canvas className='techSize'>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Box />
        </Canvas>

        <Canvas className='techSize'>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Box />
        </Canvas>

        <Canvas className='techSize'>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Box />
        </Canvas>

        <Canvas className='techSize'>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Box />
        </Canvas>

        <Canvas className='techSize'>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Box />
        </Canvas>
        </div></>
    )
}

export default TechGrid