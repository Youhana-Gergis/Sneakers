import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import { PointsInner, pointsOuter } from './utils';

const Particle = () => {
  return (
    <div className='fixed w-full h-screen -z-30'>
      <Canvas className='bg-[#101010]' style={{height:"100vh"}} camera={{position:[10,-7.5,-15]}}>
        <OrbitControls />
        <directionalLight />
        <pointLight position={[-30 , 0 , -30]} power={10.0} />
        <PointCircle />
      </Canvas>
    </div>
  )
}


const PointCircle = () => {

  const ref = useRef();
  useFrame(({clock}) => {
    ref.current.rotation.z = clock.getElapsedTime() * 0.1; 
  });

  return(
    <group ref={ref}>
      {PointsInner.map(point => <Point key={point.idx} position={point.position} color={point.color} />)}
      {pointsOuter.map(point => <Point key={point.idx} position={point.position} color={point.color} />)}
    </group>
  )
}

const Point = ({color , position}) => {
  return(
    <Sphere position={position} args={[0.1,10,10]}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
      />
    </Sphere>
  )
}

export default Particle
