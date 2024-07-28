import React, { Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Nav from '../Nav';
import CanvasLoader from "../CanvasLoader";
// import LoaderCan from '../LoaderCan';






const Sneaker8 = () => {

  const computer = useGLTF("./shoes_mockup_asset_-_vans_skate_old_skool_shoes/scene.gltf");
  return (
    <mesh position={[0 , 0 , 0]} >
      <hemisphereLight intensity={3} groundColor='black' />
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

const ModelCan8 = () => {
  
  return (
    <>
      <Link to='/product8'>
        <Nav />
      </Link>
      <Canvas style={{height:"100vh"}}
        frameloop='demand'
        camera={{ position: [10, 0, 20], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={true}
            // maxPolarAngle={Math.PI / 2}
            // minPolarAngle={Math.PI / 2}
          />
          <Sneaker8 />
        </Suspense>

        <Preload all />
      </Canvas>
    </>
  );
};

export default ModelCan8;
