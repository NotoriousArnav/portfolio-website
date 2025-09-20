import React, { Suspense, useState} from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three';
import './App.css';
import { Routes, Route } from 'react-router';
import Index from './components/pages/Index.tsx';
import { Win98Window, Win98StatusBar } from './components/ui/Windows98.tsx';

function Encapsulate({
  children,
  onMouseEnter,
  onMouseLeave,
  className='',
}: {
    children: React.ReactNode,
    onMouseEnter?: () => void,
    onMouseLeave?: () => void,
    className?: string,
  }) {
  return (
    <section
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`border-green-500 p-4 brightness-95` + ' ' + className}
    >
      {children}
    </section>
  )
}

function Model() {
  const url = new URL("./assets/model.glb", import.meta.url).href;
  const { scene } = useGLTF(url);

  const texture = React.useMemo(() => {
    const loader = new THREE.TextureLoader();
    const tex = loader.load("./assets/texture4.jpg");
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(10, 10);
    return tex;
  }, []);

  React.useEffect(() => {
    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          //map: texture,
          side: THREE.DoubleSide,
          roughness: 1,
          metalness: 0.5,
          color: new THREE.Color(0x00fa0f),
        });
      }
    });
  }, [scene, texture]);
  
  return (<primitive object={scene} ></primitive>);
}

function LeftSection({
  hovered,
  className = ''
}:{
  hovered: boolean,
  className?: string,
}) {
  return (
    <div className={"w-1/2 bg-gray-100 flex items-center justify-center" + ' ' + className}>
      <Canvas id="renderer-window" camera={{ position: [2, 2.3, 5], fov: 50 }} className="w-full">
        <color
          attach="background"
          args={["#000800"]}
        />
        <ambientLight intensity={0.7} />
        <directionalLight position={[1, 0, 1]} intensity={1} />
        <Suspense fallback={null}>
            <mesh
              position={[0, 0, 0]}
              scale={2.2}
            >
              <Model />
            </mesh>
        </Suspense>
        <OrbitControls enableZoom={true} autoRotate={!hovered} autoRotateSpeed={5} />
      </Canvas>
    </div>
  );
}

function App() {
  const [hovered, setHovered] = useState<boolean>(false);
  const [fullscreen, setfullscreen] = useState<boolean>(false);
  const [renderToHtml, setRenderToHtml] = useState<boolean>(true);

  return (
    <div
      className="bg-transparent App flex gap-4 p-4 w-full h-screen bg-gray-50"
    >
    <Encapsulate
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-[96vh] w-1/4"
    >
      <LeftSection hovered={hovered} className="h-3/4 w-full rounded"/>
      <Win98Window titlebar_disabled={true} title={"Hello, World!"} className="block">
        <br />
        <span className="text-4xl p-4">Welcome to my Portfolio!</span>
        <br />
        <span className="text-xl p-2">I am a developer and more.</span>
        <br />
        <button
          className="m-2 p-2 w-32"
          onClick={() => {
            if (!document.fullscreenElement) {
              document.documentElement.requestFullscreen();
              setfullscreen(!fullscreen)
            } else {
              if (document.exitFullscreen) {
                document.exitFullscreen();
                setfullscreen(!fullscreen)
              }
            }
          }}
        >
          {fullscreen?'Exit Full Screen':'Full Screen'}
        </button>
      <button
        onClick={() => {setRenderToHtml(!renderToHtml);}}
        className="m-2 p-2"
      >
        {renderToHtml ? "Show Raw Markdown" : "Render to HTML"}
      </button>
      <a className="m-2 p-2" href="/portfolio.md" download="portfolio.md">
        <button>
          Download Portfolio
        </button>
      </a>
        <Win98StatusBar
          fields={["Visit Repo on GitHub", "Copyleft 2025"]}
          className="mt-4 text-lg gap-4"
        />
      </Win98Window>
    </Encapsulate>
      <Routes>
        <Route path="/*" element={<Encapsulate className="h-[96vh] border-green-500 border-l-2"><Index render={renderToHtml}  /></Encapsulate>} />
      </Routes>
    </div>
  )
}

export default App
