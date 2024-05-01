import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import LoaderCan from '../LoaderCan';
import CanvasLoader from "../CanvasLoader";
import { Link } from "react-router-dom";
import Nav from "../Nav";

const Sneaker6 = () => {
  const computer = useGLTF("./nike_air_zoom_pegasus_36/scene.gltf");
  return (
    <mesh position={[0 , 0 , 0]} >
      <hemisphereLight intensity={1} groundColor='black' />
      <spotLight position={[1, 6, 1.5]} angle={0.2} penumbra={1} intensity={2.5} castShadow shadow-mapSize={[2048, 2048]} />
      <spotLight position={[-5, 5, -1.5]} angle={0.03} penumbra={1} intensity={4} castShadow shadow-mapSize={[1024, 1024]} />
      <spotLight position={[5, 5, -5]} angle={0.3} penumbra={1} intensity={4} castShadow={true} shadow-mapSize={[256, 256]} color="#ffffc0" />
      <pointLight intensity={1} position={[0,2,3]} />
      <primitive
        object={computer.scene} 
      />
    </mesh>
    
  );
};


const ModelCan6 = () => {
  
  return (
    <>
      <Link to='/product6'>
        <Nav />
      </Link>
      <Canvas style={{height:"100vh"}}
        frameloop='demand'
        camera={{ position: [10, 0, 0], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={true}
            // maxPolarAngle={Math.PI / 2}
            // minPolarAngle={Math.PI / 2}
          />
          <Sneaker6 />
        </Suspense>

        <Preload all />
      </Canvas>
    </>
  );
};

export default ModelCan6;
