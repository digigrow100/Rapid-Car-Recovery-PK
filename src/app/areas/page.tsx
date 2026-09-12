import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Coverage Area",
  description:
    "Rapid Car Recovery covers every part of Sharjah — city centre, residential areas, industrial zones and beyond. Call +971 54 343 4863 for local car recovery and towing.",
};

const areas = [
  {
    name: "Al Nahda",
    nameAr: "النهدة",
    desc: "Fast response to breakdowns and towing requests across Al Nahda's residential streets.",
    icon: "fa-solid fa-city",
  },
  {
    name: "Al Majaz",
    nameAr: "المجاز",
    desc: "Recovery and roadside support around Al Majaz and the waterfront.",
    icon: "fa-solid fa-water",
  },
  {
    name: "Al Qasimia",
    nameAr: "القاسمية",
    desc: "Fast callouts to residential streets and main roads across Al Qasimia.",
    icon: "fa-solid fa-house",
  },
  {
    name: "Al Qasba",
    nameAr: "القصبة",
    desc: "Coverage around Al Qasba and the surrounding canal district.",
    icon: "fa-solid fa-water",
  },
  {
    name: "Al Taawun",
    nameAr: "التعاون",
    desc: "Quick response around Al Taawun's main roads and surrounding neighbourhoods.",
    icon: "fa-solid fa-map-pin",
  },
  {
    name: "Al Khan",
    nameAr: "الخان",
    desc: "Roadside and towing support along the Al Khan coastal area.",
    icon: "fa-solid fa-water",
  },
  {
    name: "Al Mamzar",
    nameAr: "الممزر",
    desc: "Recovery coverage across Al Mamzar's residential streets.",
    icon: "fa-solid fa-house",
  },
  {
    name: "Al Yarmook",
    nameAr: "اليرموك",
    desc: "Fast callouts throughout the Al Yarmook neighbourhood.",
    icon: "fa-solid fa-road",
  },
  {
    name: "Al Ghuwair",
    nameAr: "الغوير",
    desc: "Support for breakdowns and towing around Al Ghuwair.",
    icon: "fa-solid fa-city",
  },
  {
    name: "Al Nabba",
    nameAr: "النباعة",
    desc: "Coverage across Al Nabba's residential and commercial streets.",
    icon: "fa-solid fa-house",
  },
  {
    name: "Al Qulayaah",
    nameAr: "القليعة",
    desc: "Recovery and roadside assistance around Al Qulayaah.",
    icon: "fa-solid fa-road",
  },
  {
    name: "Al Jazzat",
    nameAr: "الجزات",
    desc: "Towing and breakdown support across Al Jazzat.",
    icon: "fa-solid fa-location-dot",
  },
  {
    name: "Al Goaz",
    nameAr: "الجوز",
    desc: "Callouts covering the Al Goaz area.",
    icon: "fa-solid fa-location-dot",
  },
  {
    name: "Al Ramla",
    nameAr: "الرملة",
    desc: "Recovery support across Al Ramla's neighbourhoods.",
    icon: "fa-solid fa-house",
  },
  {
    name: "Al Fayha",
    nameAr: "الفيحاء",
    desc: "Fast response throughout Al Fayha.",
    icon: "fa-solid fa-city",
  },
  {
    name: "Al Ghafia",
    nameAr: "الغافية",
    desc: "Coverage across Al Ghafia's residential streets.",
    icon: "fa-solid fa-house",
  },
  {
    name: "Al Rahmaniya",
    nameAr: "الرحمانية",
    desc: "Recovery and towing support around Al Rahmaniya.",
    icon: "fa-solid fa-road",
  },
  {
    name: "Muwaileh",
    nameAr: "مويلح",
    desc: "Recovery coverage across Muwaileh's residential and commercial areas.",
    icon: "fa-solid fa-road",
  },
  {
    name: "Al Saja'a",
    nameAr: "الصجعة",
    desc: "Support for breakdowns around Al Saja'a and nearby industrial areas.",
    icon: "fa-solid fa-warehouse",
  },
  {
    name: "Al Juraina",
    nameAr: "الجرينة",
    desc: "Recovery and roadside assistance across Al Juraina.",
    icon: "fa-solid fa-location-dot",
  },
];

const faqs = [
  {
    q: "Do you cover the main highways through Sharjah?",
    a: "Yes. We assist drivers broken down on Sharjah's main routes, including Sheikh Mohammed Bin Zayed Road and Emirates Road. Safety is our priority when responding on busy roads.",
  },
  {
    q: "Can you tow to another emirate?",
    a: "For longer-distance transport, yes. Call us with the pickup and destination details and we'll confirm availability and cost.",
  },
  {
    q: "What if I'm not sure whether you cover my area?",
    a: "Just call or WhatsApp us with your location. We'll confirm straight away whether we can reach you and give you an idea of response time.",
  },
  {
    q: "Do you charge more for areas further out?",
    a: "Distance is factored into pricing. Once we know your pickup location and destination we'll give you a clear quote before proceeding.",
  },
];

const SHARJAH_MAP_SRC = "https://www.google.com/maps?q=Sharjah,+United+Arab+Emirates&output=embed";

export default function AreasPage() {
  return (
    <>
      <Header activePath="/areas" />

      <main>
        {/* Page Banner */}
        <section className="hero-panel text-white">
          <div className="wrap reveal py-10 text-center sm:py-14 lg:py-20">
            <p className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-amber/40 bg-amber/15 px-3 py-1.5 text-xs font-semibold text-amber-100 sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <i className="fa-solid fa-map-location-dot flex-shrink-0"></i> Coverage Area
            </p>
            <h1 className="mb-2 text-3xl leading-tight font-extrabold sm:mb-3 sm:text-4xl lg:text-6xl">
              Car Recovery Across Sharjah
            </h1>
            <p className="ar mx-auto mb-4 max-w-2xl text-white/70">نغطي جميع مناطق الشارقة</p>
            <p className="mx-auto mb-5 max-w-2xl text-base text-white/80 sm:mb-8 sm:text-lg">
              We provide car recovery, towing and roadside support across every part of Sharjah — city streets, residential areas and main routes alike.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <a href="tel:+971543434863" className="btn-pulse rounded-full bg-amber px-5 py-3.5 text-center text-sm font-bold text-ink transition sm:px-7 sm:py-4 sm:text-base">
                <i className="fa-solid fa-phone mr-2"></i>Call +971 54 343 4863
              </a>
              <a
                href="https://wa.me/971543434863"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-whatsapp px-5 py-3.5 text-center text-sm font-bold text-white transition hover:bg-green-600 sm:px-7 sm:py-4 sm:text-base"
              >
                <i className="fa-brands fa-whatsapp mr-2"></i>Message on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Areas Grid */}
        <section className="bg-slate-50 py-20">
          <div className="wrap">
            <div className="reveal mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold text-amber-dark">Where We Operate</p>
              <h2 className="mb-4 text-3xl font-extrabold text-ink lg:text-4xl">Areas We Cover</h2>
              <p className="text-ink/70">
                We regularly respond to calls across these areas and beyond. Not sure if we can reach you? Just call us.
              </p>
            </div>
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <div key={area.name} className="reveal rounded-3xl border border-ink/10 bg-white p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber/10">
                    <i className={`${area.icon} text-xl text-amber-dark`}></i>
                  </div>
                  <h3 className="mb-1 text-xl font-bold text-ink">{area.name}</h3>
                  <p className="ar mb-2 text-sm text-ink/50">{area.nameAr}</p>
                  <p className="text-sm leading-7 text-ink/70">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Knowledge CTA */}
        <section className="bg-ink py-20 text-white">
          <div className="wrap grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <p className="mb-3 font-bold text-amber">Local Knowledge</p>
              <h2 className="mb-5 text-3xl font-extrabold lg:text-4xl">
                We Know Sharjah&rsquo;s Roads
              </h2>
              <p className="mb-6 leading-8 text-white/70">
                Our drivers know the quickest routes, the busiest junctions and the best approach for
                every type of job — whether you&rsquo;re stuck in the city or out towards the industrial areas.
              </p>
              <ul className="space-y-4">
                {[
                  "Fast response across city centre and suburbs",
                  "Coverage along Sharjah's main highways",
                  "Industrial and commercial area support",
                  "Cross-emirate transport by arrangement",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-white/85">
                    <i className="fa-solid fa-circle-check mt-1 flex-shrink-0 text-amber"></i>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="tel:+971543434863" className="btn-pulse rounded-full bg-amber px-7 py-4 text-center font-bold text-ink transition">
                  <i className="fa-solid fa-phone mr-2"></i>Call Now
                </a>
                <a
                  href="https://wa.me/971543434863"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-whatsapp px-7 py-4 text-center font-bold text-white transition hover:bg-green-600"
                >
                  <i className="fa-brands fa-whatsapp mr-2"></i>WhatsApp Us
                </a>
              </div>
            </div>
            <div className="reveal">
              <Image
                src="/images/car-towing-highway-recovery-with-blue-hatchback-1459x1078.webp"
                alt="Rapid Car Recovery vehicle attending a call in Sharjah"
                width={2000}
                height={1333}
                className="min-h-[380px] w-full rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="bg-slate-50 py-16">
          <div className="wrap">
            <div className="reveal mx-auto mb-8 max-w-2xl text-center">
              <p className="mb-3 font-bold text-amber-dark">Find Us</p>
              <h2 className="text-3xl font-extrabold text-ink lg:text-4xl">Serving Sharjah, UAE</h2>
            </div>
            <div className="reveal w-full overflow-hidden rounded-3xl border border-ink/10 shadow-2xl" style={{ height: "420px" }}>
              <iframe
                src={SHARJAH_MAP_SRC}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Rapid Car Recovery — Sharjah Coverage"
              />
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white py-20">
          <div className="wrap mx-auto max-w-3xl">
            <div className="reveal mb-12 text-center">
              <p className="mb-3 font-bold text-amber-dark">Common Questions</p>
              <h2 className="text-3xl font-extrabold text-ink lg:text-4xl">Coverage Questions</h2>
            </div>
            <div className="grid gap-5">
              {faqs.map((faq) => (
                <div key={faq.q} className="reveal rounded-2xl border border-ink/10 p-6">
                  <h3 className="mb-2 flex items-start gap-2 font-bold text-ink">
                    <i className="fa-solid fa-circle-question mt-1 flex-shrink-0 text-amber-dark"></i>
                    {faq.q}
                  </h3>
                  <p className="pl-7 text-ink/70">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-amber py-20 text-center text-ink">
          <div className="wrap reveal">
            <h2 className="mb-5 text-3xl font-extrabold lg:text-5xl">Not Sure If We Cover You?</h2>
            <p className="mb-8 text-lg text-ink/80">
              Give us a call or send a WhatsApp with your location and we&rsquo;ll confirm straight away.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href="tel:+971543434863" className="rounded-full bg-ink px-8 py-4 font-bold text-white transition hover:bg-ink-light">
                <i className="fa-solid fa-phone mr-2"></i>Call Now
              </a>
              <a
                href="https://wa.me/971543434863"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-whatsapp px-8 py-4 font-bold text-white transition hover:bg-green-600"
              >
                <i className="fa-brands fa-whatsapp mr-2"></i>WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
