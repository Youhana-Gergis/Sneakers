import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../CanvasLoader";
// import LoaderCan from '../LoaderCan';
import { Link } from "react-router-dom";
import Nav from "../Nav";
const Sneaker4 = () => {

  const computer = useGLTF("./sneaker/scene.gltf");
  return (
    <mesh position={[0 , 0 , 0]} >
      <hemisphereLight intensity={2} groundColor='white' />
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


const ModelCan4 = () => {
  
  return (
    <>
      <Link to='/product4'>
        <Nav />
      </Link>
      <Canvas style={{height:"100vh"}}
        frameloop='demand'
        camera={{ position: [10, 0, 0], fov: 5 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={true}
            // maxPolarAngle={Math.PI / 2}
            // minPolarAngle={Math.PI / 2}
          />
          <Sneaker4 />
        </Suspense>

        <Preload all />
      </Canvas>
    </>
  );
};

export default ModelCan4;
