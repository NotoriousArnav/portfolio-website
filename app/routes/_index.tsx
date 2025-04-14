import type { MetaFunction } from "@remix-run/node";
import { animate, createDraggable, utils, createSpring, createScope } from 'animejs';
import neopanda from '/public/neopanda.svg';
import abstractLines from '../../public/jarvis.svg';
import { useEffect, useRef, useState } from "react";


export const meta: MetaFunction = () => {
  return [
    { title: "Arnav Ghosh" },
    { name: "description", content: "Welcome to neopanda.tech!" },
  ];
};

export default function Index() {
  const root = useRef(null);
  const scope = useRef(null);
  const [i, setI] = useState(0);

  useEffect(() => {
    scope.current = createScope({root}).add(scope => {

      createDraggable('#neopanda', {
        container: [0, 0, 0, 0],
        release: createSpring({ stiffness: 200 })
      });

      scope.add('rotatePanda', (i) => {
        animate('#neopanda', {
          rotate: i * 360,
          ease: 'out(4)',
          duration: 1000,
        });
      })

    })
    return () => scope.current.revert();
  }, [])

  const handleRotation = () => {
    const r = i+1;
    setI(r);
    scope.current.methods.rotatePanda(r);
  }
  

  return (
    <div ref={root} id="home" className="flex text-center items-center justify-center h-svh">
      <div id="name" className="group grid p-4 border-2 border-dashed border-gray-500 hover:border-gray-600 active:border-gray-700 active:border-4 items-center text-center justify-center">
        <img id="neopanda" className="w-64 m-auto" src={neopanda} alt="neopanda logo"  onClick={handleRotation} />
        <span className="group-hover:visible group-hover:scale-110 invisible p-1 transition-all rounded-lg">
          <i className="bg-blue-500 p-2 rounded">Click to Rotate the Image. The Image is draggable as well</i>
        </span>
        <h1 className="text-4xl font-bold p-4">
          Hello, I'm&nbsp;
          <span>
            Arnav
          </span>
          !
        </h1>
        <p>
          This might be the Second Iteration, but this website is still under development.
        </p>
      </div>
    </div>
  );
}
