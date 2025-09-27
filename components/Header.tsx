"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Viršutinė kontaktų juosta */}
      <div className="bg-brand-900 text-white text-sm">
        <div className="container-max py-2 flex flex-col md:flex-row gap-2 md:gap-6 items-center justify-center">
          <span>📞 +370 630 86000</span>
          <span>📍 Akmenės g. 1, Klaipėda</span>
          <Link href="/kontaktai" className="underline underline-offset-4">Registracija internetu</Link>
        </div>
      </div>

      {/* Pagrindinis headeris */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="container-max flex items-center justify-between h-16">
          <Link href="/" className="font-semibold text-lg text-brand-900">GST Klinika</Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#paslaugos" className="hover:text-brand-900">Paslaugos</Link>
            <Link href="/specialistai" className="hover:text-brand-900">Specialistai</Link>
            <Link href="/kainos" className="hover:text-brand-900">Kainos</Link>
            <Link href="/kontaktai" className="hover:text-brand-900">Kontaktai</Link>
          </nav>
          <Link href="/kontaktai" className="btn-primary hidden md:inline-flex">Registracija</Link>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Meniu"><Menu /></button>
        </div>

        {open && (
          <div className="md:hidden border-t">
            <div className="container-max py-4 flex flex-col gap-3">
              <Link href="/#paslaugos" onClick={() => setOpen(false)}>Paslaugos</Link>
              <Link href="/specialistai" onClick={() => setOpen(false)}>Specialistai</Link>
              <Link href="/kainos" onClick={() => setOpen(false)}>Kainos</Link>
              <Link href="/kontaktai" onClick={() => setOpen(false)}>Kontaktai</Link>
              <Link href="/kontaktai" className="btn-primary" onClick={() => setOpen(false)}>Registracija</Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
