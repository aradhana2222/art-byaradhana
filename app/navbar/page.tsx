"use client"

import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem
} from "@heroui/navbar";

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
  return (<Navbar className="bg-black text-white px-6 py-4 w-full">

  <NavbarContent justify="start">
    <NavbarBrand>
      <Link href="/" className="flex items-center gap-2">
        <AcmeLogo />
        <p className="font-bold">ARIA</p>
      </Link>
    </NavbarBrand>
  </NavbarContent>

  <NavbarContent className="hidden sm:flex gap-10 flex-grow justify-end">
    <NavbarItem>
      <Link href="/portfolio" className="text-white hover:text-teal-300 font-semibold transition-colors">
        Portfolio
      </Link>
    </NavbarItem>

    <NavbarItem>
      <Link href="/commissions" className="text-white hover:text-teal-300 font-semibold transition-colors">
        Commissions
      </Link>
    </NavbarItem>

    <NavbarItem>
      <Link href="/about" className="text-white hover:text-teal-300 font-semibold transition-colors">
        About me
      </Link>
    </NavbarItem>
  </NavbarContent>

</Navbar>
  );
}