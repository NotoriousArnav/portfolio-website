import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { Bounds, OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'


import './App.css'
import { Routes, Route, Link } from 'react-router';
import Index from './components/pages/Index.tsx';


function Encapsulate({
  children,
  className='',
  colspan = 5
}: { children: React.ReactNode }) {
  return (
    <section className={`border-2 rounded-lg border-green-500 p-4 brightness-95` + ' ' + className}>
      {children}
    </section>
  )
}

function Model() {
  // ensure Vite resolves the file URL correctly
  const url = new URL("./assets/model.glb", import.meta.url).href;
  const { scene } = useGLTF(url);
  scene.background = null;
  return <primitive object={scene} scale={2,2,2} position={[0, -0.5, 0]} />;
}

function LeftSection({ 
  className = ''
}) {
  return (
    <div className={"w-1/2 bg-gray-100 flex items-center justify-center" + ' ' + className}>
      <Canvas id="renderer-window" camera={{ position: [2, 2, 5], fov: 50 }} gl={{ alpha: true, background: "#000" }} alpha={1} className="w-full bg-transparent" style={{ background: 'transparent' }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
            <Model />
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}

function App() {
  return (
    <div className="bg-zinc-900 App flex gap-4 p-4 w-full h-screen bg-gray-50">
    <Encapsulate className="h-[96vh] w-1/4">
      <LeftSection className="h-3/4 w-full" />
      <h1 className="text-5xl">Hi, I am <br /> <span className="text-green-400">Arnav Ghosh</span></h1>
    </Encapsulate>
      <Routes>
        <Route path="/*" element={<Encapsulate className="h-[96vh]"><Index /></Encapsulate>} />
      </Routes>
    </div>
  )
}

export default App
