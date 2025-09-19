import * as THREE from 'three';
import React, { useRef, useState, Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

function Model({modelPath}: {modelPath: string}) {
  const { scene } = useLoader(THREE.GLTFLoader, modelPath);
  return <primitive object={scene} />;
}

function RotatingModel({modelPath}: {modelPath: string}) {
  const ref = useRef<THREE.Group>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });
  return (
    <group ref={ref}>
      <Model modelPath={modelPath} />
    </group>
  );
}

export default function ArnavModel() {
  return (
    <div className="w-full h-96">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <RotatingModel modelPath="./assets/model.glb" />
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
