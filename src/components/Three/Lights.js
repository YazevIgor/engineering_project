import React from "react";
export const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.4}/>
            <directionalLight
                castShadow
                position={[-100,100,-100]}
                intensity={0}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={150}
                shadow-camera-left={-50}
                shadow-camera-right={50}
                shadow-camera-top={50}
                shadow-camera-bottom={-50}
                />
                <pointLight position={[350,300,350]} intensity={2}/>
        </>
    )
}