import type { MetaFunction } from "@remix-run/node";
import {
  animate,
  createTimeline,
  createTimer,
} from 'animejs';
import neopandaLogo from '../../public/neopanda.svg';
import { useEffect, useRef, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Arnav Ghosh" },
    { name: "description", content: "Welcome to neopanda.tech!" },
  ];
};

export default function Index() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    console.log(isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="flex h-screen items-center justify-center text-center gap-4 dark:text-white">
      <div className="justify-center flex-col items-center text-center">
        <img src={neopandaLogo} alt="Neopanda Logo" className="w-full dark:invert" />
        <h1 className="text-3xl font-bold">Hi, I am Arnav!</h1>
        <p className="text-lg">Sorry, but this site is still under construction.</p>
        <button
            className="bg-gray-200 hover:bg-gray-300 active:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={(e) => setIsDarkMode(!isDarkMode)}
        >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}
