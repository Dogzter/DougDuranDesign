"use client"

import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import Image from "next/image"
import Link from "next/link"
import { useSelectedLayoutSegment } from 'next/navigation'
import { navLinks } from '@/constants/links'
import { IoHomeSharp } from "react-icons/io5";
import { PiCodeFill } from "react-icons/pi";
import { AiFillCloseSquare } from "react-icons/ai";
import { PiCubeTransparent } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import { FaAddressCard, FaHandshake, FaAndroid, FaFeatherAlt } from "react-icons/fa";
import 'animate.css';
import Spotlight from './ui/Spotlight'; 

export default function Header() {

  /* hide/show nav menu on scroll */
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(()=> {
    if (typeof window !== 'undefined') {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
    setLastScrollY(currentScrollY);
    }
  }, [lastScrollY])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    setTimeout(() => {
      navInfoRef.current.innerHTML = ''
    }, 2000);
    return () => window.removeEventListener('scroll', handleScroll);
  },[handleScroll]);

  /* nav information bar */
  const activeSegment = useSelectedLayoutSegment() // Set active links
  const navInfoRef: React.ReactElement | any = useRef(null); // get navInfo DOM element
  const pageTitle:string = useMemo(()=> {
    let page = 'Página não encontrada!'
    if(activeSegment === null) return page = 'Página Inicial'
    navLinks.forEach((link)=> {
      if(activeSegment === link.active) return page = link.desc
    })
    return page
  }, [activeSegment])

  const generateLinks = useMemo(():React.ReactNode => {
    return navLinks.map((link, i) => (
      <li key={i}>
        <Link
          onMouseEnter={() => navInfoRef.current.innerHTML = ` » ${link.desc}`} href={link.href} className={`navLink flex flex-row justify-between gap-2 items-end mx-1 p-1 ${activeSegment === link.active && '!text-cyan-400'}`}>
          {link.icon === 'IoHomeSharp' && <IoHomeSharp />}
          {link.icon === 'FaFeatherAlt' && <FaFeatherAlt />}
          {link.icon === 'PiCodeFill' && <PiCodeFill />}
          {link.icon === 'PiCubeTransparent' && <PiCubeTransparent />}
          {link.icon === 'FaAndroid' && <FaAndroid />}
          {link.icon === 'FaAddressCard' && <FaAddressCard />}
          {link.icon === 'FaHandshake' && <FaHandshake />}
          <b className='hidden'>» {link.title}</b>
          <span></span>
        </Link>
      </li>
    ));
  }, [activeSegment])

  const [openMenu, setOpenMenu] = useState(false)
  const mobileBtn = ()=> setOpenMenu(!openMenu)

  return (
    <header className="min-h-[60px] mb-[80px]">

      {/* spotlight effect */}
      <Spotlight className="-top-0 left-0 h-screen w-[180vw] md:left-15 md:-top-20" fill='gray' />
      <Spotlight className="top-0 left-[15vh] h-[100vh] w-[80vw] md:left-[50vh]" fill='blue' />
      <Spotlight className="top-0 left-[15vh] h-[60vh] w-[70vw] sm:left-[30vh] md:left-[40vh]" fill='cyan' />
      <Spotlight className="top-0 left-[20vh] h-[60vh] w-[70vw] sm:left-[40vh] md:left-[50vh]" fill='teal' />
      
      <nav className="max-w-[1600px] m-auto flex flex-row justify-between" style={{position: 'fixed', zIndex: 20, top: 0, left: 0, right: 0, transform: isVisible ? 'translateY(0)' : 'translateY(-100%)'}}>
        <div className="navMain flex flex-row justify-between items-center w-full p-2">
          <div className="logo googleFontUbuntu font-black min-w-[160px] p-1 mx-2 flex flex-nowrap justify-between items-center gap-3 text-[32px]">
            {/* nav logo */}
            <Image className='w-[30px] h-[30px] md:w-[40px] md:h-[40px]' src="/img/logo-dougduran.png" alt="logo" width={30} height={30} priority />
            <p className='text-[22px] md:text-[28px] font-bold select-none text-white'>
              {`Doug.Duran`}
              <span className='text-cyan-300'>{`([`}</span>
              <span className='text-yellow-400'>{`...dev`}</span>
              <span className='text-cyan-300'>{`])`}</span>
            </p>
          </div>
          <div className="navLinks hidden w-full text-center">
            {/* desktop menu */}
            <ul className="flex flex-row justify-end items-center gap-0 md:gap-5 w-full">
              {generateLinks}
            </ul>
          </div>
        </div>
        {/* mobile button */}
        <div onClick={mobileBtn} className="mobileBtn flex items-center mx-3 text-zinc-300 text-[34px]">
          <p className={`animate__animated absolute hidden ${openMenu ? '!block animate__fadeIn' : 'animate__fadeOut'}`} > <AiFillCloseSquare color='rgba(255,255,255,0.7)'/> </p>
          <p> <MdMenu className={`animate__animated hover:text-blue-400 ${openMenu ? 'animate__fadeOut' : 'animate__fadeIn'}`} /> </p>
        </div>
        {/* header info bar*/}
        <div className='headerInfoBar text-[12px]'>
          <p className='px-6'>
            <i>{pageTitle + ' '}</i>
            <i ref={navInfoRef} className='text-cyan-400'></i>
          </p>
        </div>
        {/* mobile menu */}
        <div className={`animate__animated mobileMenu hidden invisible ${openMenu ? 'animate__backInLeft !flex !visible' : '!flex animate__backOutRight'} flex-row justify-around items-center gap-1`}>
          <ul className="flex flex-row justify-around items-center gap-1 w-full">
            {generateLinks}
          </ul>
        </div>
      </nav>
    </header>
  )
}
