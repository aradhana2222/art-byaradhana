"use client"

import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem
} from "@heroui/navbar";
import { useState } from "react";
import {Link} from "@heroui/react";

export const AcmeLogo = () => {

  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function App() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Commissions", href: "/commissions" },
    { name: "About Me", href: "/about" },
  ];

  return (<Navbar className="bg-black text-white px-6 py-4 w-full relative" 
  isMenuOpen={isMenuOpen}
  onMenuOpenChange={setIsMenuOpen}>

  <NavbarContent className="sm:hidden flex-1 justify-end" justify="end">
   
    <NavbarBrand>
      <Link href="/" className="flex items-center gap-2">
        <AcmeLogo />
        <p className="font-bold">ARIA</p>
      </Link>
    </NavbarBrand>

     <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
  </NavbarContent>


  <NavbarContent className="hidden sm:flex gap-10 flex-grow justify-end ">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link className="text-white hover:text-teal-300 font-semibold transition-colors"href={item.href}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

  {/* Mobile dropdown — plain div, no HeroUI NavbarMenu */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-black flex flex-col px-6 py-4 gap-4 z-50">
          {menuItems.map((item, index) => (
            <Link 
              key={index}
              href={item.href}
              className="text-white hover:text-teal-300 font-semibold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

</Navbar>
  );
}