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
      <div className={`${title ? "mt-10" : ""}`}>{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* TOP BAR (CTA) */}
      <div className="bg-brand text-white">
        <div className="container-max py-2 flex flex-col md:flex-row items-center justify-center gap-3 text-sm">
          <span>📞 +370 630 86000</span>
          <span className="hidden md:inline">•</span>
          <span>📍 Akmenės g. 1, Klaipėda</span>
          <span className="hidden md:inline">•</span>
          <Link href="/kontaktai" className="underline underline-offset-4">
            Registracija internetu
          </Link>
        </div>
      </div>

      {/* HERO – CENTRUOTAS, „galingas“ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand/light to-white" />
        <div className="container-max relative py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Jūsų sveikata – mūsų pareiga
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mt-5">
              Moderni klinika Klaipėdoje: kokybiškos konsultacijos, estetinės
              ir terapinės procedūros, rūpestis kiekvienam pacientui.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/kontaktai" className="btn-primary">
                Registruotis konsultacijai
              </Link>
              <Link href="/specialistai" className="btn-outline">
                Mūsų specialistai
              </Link>
            </div>
          </div>

          {/* „Bangos“ apačioje – subtilus dinamizmas */}
          <div className="pointer-events-none mt-16">
            <svg viewBox="0 0 1440 120" className="w-full text-brand/10">
              <path
                fill="currentColor"
                d="M0,64L60,53.3C120,43,240,21,360,16C480,11,600,21,720,32C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* „Pažadai“ / privalumai */}
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Aukščiausia kokybė",
              d: "Patyrę specialistai ir šiuolaikinė įranga.",
            },
            {
              t: "Greita registracija",
              d: "Dažniausiai tą pačią ar kitą dieną.",
            },
            {
              t: "Aiški komunikacija",
              d: "Diagnozė ir planas išdėstomi suprantamai.",
            },
          ].map((x, i) => (
            <div key={i} className="card p-6">
              <div className="text-xl font-semibold">{x.t}</div>
              <p className="text-gray-600 mt-2">{x.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Populiariausios paslaugos – kortelės */}
      <Section
        title="Populiariausios paslaugos"
        subtitle="Atraskite Jums aktualias procedūras ir konsultacijas."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Kosmetologija",
              desc: "Veido valymas, rūgštiniai pilingai, drėkinimas.",
              href: "/paslaugos/kosmetologija",
            },
            {
              title: "Auskarų vėrimas",
              desc: "Saugiai, steriliai ir su šypsena. Tinka ir vaikams.",
              href: "/paslaugos/auskaru-verimas",
            },
            {
              title: "Masažai",
              desc: "Klasikinis, atpalaiduojantis, gydomasis.",
              href: "/paslaugos/masazai",
            },
            {
              title: "Konsultacijos",
              desc: "Odos būklės įvertinimas ir plano sudarymas.",
              href: "/paslaugos/konsultacijos",
            },
            {
              title: "Odos atjauninimas",
              desc: "Skaistumas, stangrumas ir tekstūros gerinimas.",
              href: "/paslaugos/jauninimas",
            },
            {
              title: "Dovanų kuponai",
              desc: "Pasirenkamos vertės kuponai artimiesiems.",
              href: "/paslaugos/kuponai",
            },
          ].map((s, i) => (
            <Link key={i} href={s.href} className="card p-6 hover:shadow-xl transition">
              <div className="font-semibold text-lg">{s.title}</div>
              <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
              <div className="mt-4 text-brand">Sužinoti daugiau →</div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Greita registracija – didelis CTA blokas */}
      <section className="bg-brand text-white">
        <div className="container-max py-16 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">Pasiruošę vizitui?</h3>
          <p className="mt-2 text-white/90">
            Palikite kontaktus – padėsime išsirinkti tinkamiausią paslaugą.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/kontaktai" className="btn-primary bg-white !text-brand">
              Registracija
            </Link>
            <Link href="/kainos" className="btn-outline border-white text-white">
              Kainoraštis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
