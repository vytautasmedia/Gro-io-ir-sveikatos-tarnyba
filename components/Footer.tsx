import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16">
      <div className="bg-brand-900 text-white">
        <div className="container-max py-12 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">Jūsų sveikata – mūsų pareiga!</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3 text-sm">
            <div>📞 +370 630 86000</div>
            <div>✉️ <a href="mailto:info@groziost.lt" className="underline">info@groziost.lt</a></div>
            <div>📍 Akmenės g. 1, Klaipėda</div>
          </div>
        </div>
      </div>

      <div className="bg-white border-t">
        <div className="container-max py-6 text-xs text-gray-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} GST Klinika. Visos teisės saugomos.</span>
          <Link href="/kontaktai" className="text-brand-900">Privatumo politika</Link>
        </div>
      </div>
    </footer>
  );
}
