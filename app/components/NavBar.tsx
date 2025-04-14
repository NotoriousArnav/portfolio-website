"use client";
import Neopanda from '/public/neopanda.svg'

export default function NavBar() {
  return (
    <header className="">
      <nav className="flex justify-between items-center p-4 backdrop-blur-lg shadow-lg backdrop-brightness-110">
        <strong>
          <a className="flex items-center gap-2" href="/">
            <img src={Neopanda} alt="Arnav Ghosh" className="h-12" />
            Neopanda
          </a>
        </strong>
        <ul className="flex gap-4">
          <li className="hover:scale-105 p-2">
            <a href="/about">About</a>
          </li>
          <li className="hover:scale-105 p-2">
            <a href="/projects">Projects</a>
          </li>
          <li className="hover:scale-105 p-2">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
