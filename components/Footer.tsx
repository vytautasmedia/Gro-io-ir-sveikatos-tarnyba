import Link from "next/link";
export function Footer(){ return (<footer className="mt-16 border-t">
  <div className="container-max py-10 grid gap-8 md:grid-cols-3">
    <div><div className="font-semibold text-lg">GST Klinika</div><p className="text-sm text-gray-600 mt-2">Grožio ir Sveikatos Tarnyba – profesionalios paslaugos Klaipėdoje.</p></div>
    <div><div className="font-semibold">Nuorodos</div><ul className="mt-2 space-y-2 text-sm"><li><Link href="/#paslaugos">Paslaugos</Link></li><li><Link href="/specialistai">Specialistai</Link></li><li><Link href="/kainos">Kainos</Link></li><li><Link href="/kontaktai">Kontaktai</Link></li></ul></div>
    <div><div className="font-semibold">Kontaktai</div><p className="text-sm mt-2">Akmenės g. 1, Klaipėda</p><p className="text-sm">+370 630 86000</p><p className="text-sm"><a href="mailto:info@groziost.lt">info@groziost.lt</a></p></div>
  </div>
  <div className="border-t"><div className="container-max py-6 text-xs text-gray-500">© {new Date().getFullYear()} GST Klinika.</div></div>
</footer>); }
