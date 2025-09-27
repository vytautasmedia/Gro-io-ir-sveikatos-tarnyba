"use client";
import Link from "next/link"; import { useState } from "react"; import { Menu } from "lucide-react";
export function Header(){ const [open,setOpen]=useState(false);
return (<header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
  <div className="container-max flex items-center justify-between h-16">
    <Link href="/" className="font-semibold text-lg">GST Klinika</Link>
    <nav className="hidden md:flex gap-6">
      <Link href="/#paslaugos">Paslaugos</Link><Link href="/specialistai">Specialistai</Link><Link href="/kainos">Kainos</Link><Link href="/kontaktai">Kontaktai</Link>
    </nav>
    <Link href="/kontaktai" className="btn-primary hidden md:inline-flex">Registracija</Link>
    <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="Meniu"><Menu/></button>
  </div>
  {open && <div className="md:hidden border-t"><div className="container-max py-4 flex flex-col gap-3">
    <Link href="/#paslaugos" onClick={()=>setOpen(false)}>Paslaugos</Link>
    <Link href="/specialistai" onClick={()=>setOpen(false)}>Specialistai</Link>
    <Link href="/kainos" onClick={()=>setOpen(false)}>Kainos</Link>
    <Link href="/kontaktai" onClick={()=>setOpen(false)}>Kontaktai</Link>
  </div></div>}
</header>); }
