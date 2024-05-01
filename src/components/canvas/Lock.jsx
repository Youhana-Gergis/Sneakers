import React , {Suspense}from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../CanvasLoader";


const CanvasLock = () => {
    const CanLock = useGLTF("./simple_old_lock/scene.gltf");
    return (
        <mesh position={[0 , 0 , 0]} >
          <hemisphereLight intensity={1} groundColor='white' />
          <spotLight position={[1, 6, 1.5]} angle={0.2} penumbra={1} intensity={2.5} castShadow shadow-mapSize={[2048, 2048]} />
          <spotLight position={[-5, 5, -1.5]} angle={0.03} penumbra={1} intensity={4} castShadow shadow-mapSize={[1024, 1024]} />
          <spotLight position={[5, 5, -5]} angle={0.3} penumbra={1} intensity={4} castShadow={true} shadow-mapSize={[256, 256]} color="#ffffc0" />
          <pointLight intensity={30} position={[2,2,3]} />
          <primitive
            object={CanLock.scene} 
          />
        </mesh>
        
      );
}

const Lock = () => {
    return (
        <>
          <Canvas style={{width:"100%", height:"100px", position:"absolute"}}
            frameloop='demand'
            camera={{ position: [10, 0, 0], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
          >
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls
                autoRotate
                enableZoom={false}
                // maxPolarAngle={Math.PI / 2}
                // minPolarAngle={Math.PI / 2}
              />
              <CanvasLock />
            </Suspense>
    
            <Preload all />
          </Canvas>
        </>
      );
}

export default Lock
