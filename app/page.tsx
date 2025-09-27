import Link from "next/link";

function Section({
  title,
  subtitle,
  children,
}: {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="container-max py-16">
      {title && (
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
          {subtitle && <p className="text-gray-600 mt-3">{subtitle}</p>}
        </div>
      )}
      <div className={title ? "mt-10" : ""}>{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO – centruiotas, „galingas“ */}
      <section className="relative hero-gradient">
        <div className="container-max py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-brand-900">
              Jūsų sveikata – mūsų pareiga!
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mt-5">
              Moderni klinika Klaipėdoje: profesionalios konsultacijos, estetinės ir terapinės procedūros.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/kontaktai" className="btn-primary">Užsiregistruoti</Link>
              <Link href="/specialistai" className="btn-outline">Mūsų specialistai</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Privalumai */}
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Kokybė ir patirtis", d: "Patyrę specialistai ir šiuolaikinė įranga." },
            { t: "Greita registracija", d: "Dažniausiai tą pačią ar kitą dieną." },
            { t: "Aiškumas", d: "Diagnozė ir gydymo planas išdėstomi suprantamai." },
          ].map((x, i) => (
            <div key={i} className="card p-6">
              <div className="text-xl font-semibold text-brand-900">{x.t}</div>
              <p className="text-gray-600 mt-2">{x.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Paslaugos – kortelės */}
      <Section title="Populiariausios paslaugos" subtitle="Greitai raskite tai, ko reikia.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Kosmetologija", desc: "Valymas, rūgštiniai pilingai, drėkinimas.", href: "/paslaugos/kosmetologija" },
            { title: "Auskarų vėrimas", desc: "Saugiai, steriliai ir su šypsena.", href: "/paslaugos/auskaru-verimas" },
            { title: "Masažai", desc: "Klasikinis, atpalaiduojantis, gydomasis.", href: "/paslaugos/masazai" },
            { title: "Konsultacijos", desc: "Odos analizė ir priežiūros planas.", href: "/paslaugos/konsultacijos" },
            { title: "Odos atjauninimas", desc: "Skaistumas, stangrumas, tekstūra.", href: "/paslaugos/jauninimas" },
            { title: "Dovanų kuponai", desc: "Pradžiuginkite artimuosius.", href: "/paslaugos/kuponai" },
          ].map((s, i) => (
            <Link key={i} href={s.href} className="card p-6 hover:shadow-xl transition">
              <div className="font-semibold text-lg">{s.title}</div>
              <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
              <div className="mt-4 text-brand-900">Sužinoti daugiau →</div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Didelis CTA blokas */}
      <section className="bg-brand-900 text-white">
        <div className="container-max py-16 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">Pasiruošę vizitui?</h3>
          <p className="mt-2 text-white/90">Palikite kontaktus – padėsime išsirinkti tinkamiausią paslaugą.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/kontaktai" className="btn-primary bg-white !text-brand-900">Registracija</Link>
            <Link href="/kainos" className="btn-outline border-white text-white hover:bg-white/10">Kainoraštis</Link>
          </div>
        </div>
      </section>
    </>
  );
}
