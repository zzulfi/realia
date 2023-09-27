"use client";
import React, { useState } from "react";
import { MenuIcon } from "./Icons";
import Image from "next/image";

import { useRouter } from "next/navigation"

function GalleryHeader() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  
  const router = useRouter()

  return (
    <header className="flex justify-between items-center bg-theme p-5 lg:p-0 lg:pl-5 rounded-md">

      <Image src="/realia-txt.png" alt="Realia Logo" className="h-10 md:h-16" />

      <div className="flex items-center text-lg font-light ">
        <div className="lg:hidden cursor-pointer" onClick={togglePopup}>
          <MenuIcon />
        </div>
        <nav className="hidden lg:block cursor-pointer">
          <ul className="flex flex-col lg:flex-row transition-all duration-700">
            <li className=" text-white font-semibold border-white border px-4 py-1 rounded-3xl hover:text-theme hover:bg-white" onClick={()=>router.push('/')}>
              Home
            </li>
            <li onClick={()=>router.push('/')} className="transition-all duration-400 text-white px-4 py-1 rounded-3xl hover:font-bold">
              Result
            </li>
            <li onClick={()=>router.push('/gallery')} className="transition-all duration-400 text-white px-4 py-1 rounded-3xl hover:font-bold">
              Gallery
            </li>
            <li onClick={()=>router.push('/')} className="transition-all duration-400 text-white px-4 py-1 rounded-3xl hover:font-bold">
              Profile
            </li>
          </ul>
        </nav>
        <div>
          <Image
            src="/logo.png"
            alt="Realia Logo"
            width={150}
            height={0}
            className="hidden xl:block"
          />
        </div>
      </div>
      {showPopup && (
        
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">


          <div className="bg-white p-8 rounded shadow-md relative">
                
          <svg xmlns="http://www.w3.org/2000/svg"  onClick={togglePopup} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-theme absolute right-2 top-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
            <div className="text-center">
              <h1 className="text-4xl font-black text-theme">
                <span className="font-nexa">Realia</span>&apos;
                <span className="font-nexa">23</span>
              </h1>
          
              <h2 className="text-lg leading-4 font-nexa">DHIU Arts Fest</h2>
            </div>
            <nav>
              <ul className="mt-8 transition-all duration-400">
                <li onClick={()=>router.push('/')} className=" text-theme font-semibold border-theme border px-4 py-1 rounded-3xl hover:text-white hover:bg-theme ">
                  Home
                </li>
                <li onClick={()=>router.push('/')} className="text-theme px-4 py-1 rounded-3xl ">Result</li>
                <li onClick={()=>router.push('/')} className="text-theme px-4 py-1 rounded-3xl">Gallery</li>
                <li onClick={()=>router.push('/')} className="text-theme px-4 py-1 rounded-3xl">Profile</li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default GalleryHeader;
