import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import myPhoto from "../public/Yash.jpg";
import Image from "next/image"; // Import the Image component

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
  { name: "Achievements", href: "/achievements" },
  { name: "Resume", href: "https://drive.google.com/file/d/18v-9uZ4HUgX6tgtclot4S1bTlI8mEGvi/view?usp=sharing", external: true }, // Add your resume link here
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="flex items-center justify-center">
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          Yash Hegde
        </h1>
        <Image
          src={myPhoto}
          alt="Yash Hegde's Photo"
          className="ml-4 w-44 h-34 object-cover border-2 border-zinc-500 animate-fade-in"
        />
      </div>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h1 className="text-sm text-zinc-300 ">
          Passionate Full Stack Developer with a knack for dismantling and reconstructing. <br/> Open source contributor, adept in DevOps and Kubernetes. Eager to leave a lasting mark on the universe.<br />
         {/* I'm building{" "}
          <Link
            target="_blank"
            href="https://unkey.dev"
            className="underline duration-500 hover:text-zinc-300"
          >
            unkey.dev
          </Link> to solve API authentication and authorization for developers.*/}
        </h1>
      </div>
    </div>
  );
}
