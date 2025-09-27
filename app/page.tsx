import Image from "next/image"; import Link from "next/link";
export default function Home(){ return (<>
<section className="bg-gradient-to-b from-brand/light to-white"><div className="container-max py-16 grid gap-10 md:grid-cols-2 items-center">
<div><h1 className="text-4xl md:text-5xl font-bold">Grožio ir sveikatos paslaugos Klaipėdoje</h1><p className="mt-4 text-gray-700">Profesionali komanda ir šiltas dėmesys.</p>
<div className="mt-6 flex gap-3"><Link href="/kontaktai" className="btn-primary">Registruotis</Link><Link href="/#paslaugos" className="btn-outline">Paslaugos</Link></div></div>
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"><Image src="/hero.jpg" alt="GST Klinika" fill className="object-cover"/></div></div></section>
<section id="paslaugos" className="container-max py-16"><h2 className="text-3xl font-semibold">Paslaugos</h2>
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{[{title:"Kosmetologija",href:"/paslaugos/kosmetologija"},{title:"Auskarų vėrimas",href:"/paslaugos/auskaru-verimas"},{title:"Masažai",href:"/paslaugos/masazai"},{title:"Konsultacijos",href:"/paslaugos/konsultacijos"}].map((s,i)=>(<a key={i} href={s.href} className="card p-6 hover:shadow-xl transition"><div className="font-semibold">{s.title}</div><div className="mt-4 text-brand">Sužinoti daugiau →</div></a>))}</div></section>
</>); }
