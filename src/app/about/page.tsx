import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Rapid Car Recovery — a Sharjah-based team providing dependable 24/7 car recovery, towing, roadside assistance and accident recovery.",
};

const values = [
  {
    icon: "fa-solid fa-shield-halved",
    title: "Careful Handling",
    desc: "Every vehicle we move is handled with the same care throughout the job — from hook-up to final drop-off.",
  },
  {
    icon: "fa-solid fa-clock",
    title: "Prompt Response",
    desc: "We treat every call as urgent. Our team moves quickly to reach you and get the situation under control.",
  },
  {
    icon: "fa-solid fa-handshake",
    title: "Honest Communication",
    desc: "No hidden costs, no confusing jargon. We tell you what we can do, what it costs, and what to expect.",
  },
  {
    icon: "fa-solid fa-map-location-dot",
    title: "Local Knowledge",
    desc: "Our drivers know Sharjah's roads well and can plan the quickest, safest route to reach you.",
  },
  {
    icon: "fa-solid fa-car-side",
    title: "Trained Drivers",
    desc: "We take the same care with your vehicle as we would with our own — proper strapping, secure loading and smooth transport.",
  },
  {
    icon: "fa-solid fa-headset",
    title: "Always Reachable",
    desc: "Call or WhatsApp us any time. If we are already on a job we will respond as soon as we are free.",
  },
];

const areas = [
  "Al Nahda",
  "Al Majaz",
  "Al Qasimia",
  "Al Qasba",
  "Al Taawun",
  "Al Khan",
  "Al Mamzar",
  "Al Yarmook",
  "Al Ghuwair",
  "Al Nabba",
  "Al Qulayaah",
  "Al Jazzat",
  "Al Goaz",
  "Al Ramla",
  "Al Fayha",
  "Al Ghafia",
  "Al Rahmaniya",
  "Muwaileh",
  "Al Saja'a",
  "Al Juraina",
];

const faqs = [
  {
    q: "What areas of Sharjah do you cover?",
    a: "We cover the whole emirate — city centre, residential neighbourhoods, industrial areas and the outskirts. If you're unsure whether we reach you, just call.",
  },
  {
    q: "What vehicles can you recover?",
    a: "We recover cars, SUVs, 4x4s and light vans. If you're unsure whether we can handle your specific vehicle, give us a call and we'll let you know.",
  },
  {
    q: "Do you work with insurance companies?",
    a: "Yes. We can liaise with your insurer or their recovery coordinator on request. Many customers contact us directly for a faster response, then inform their insurer afterwards.",
  },
  {
    q: "Can you give me a price over the phone?",
    a: "We can give you a clear idea of cost once we know your vehicle type, location and destination. Call or WhatsApp us with the details for an accurate quote.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header activePath="/about" />

      <main>
        {/* Page Banner */}
        <section className="hero-panel text-white">
          <div className="wrap reveal py-10 text-center sm:py-14 lg:py-20">
            <p className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-amber/40 bg-amber/15 px-3 py-1.5 text-xs font-semibold text-amber-100 sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <i className="fa-solid fa-users flex-shrink-0"></i> About Us
            </p>
            <h1 className="mb-2 text-3xl leading-tight font-extrabold sm:mb-3 sm:text-4xl lg:text-6xl">
              A Sharjah Recovery Team You Can Rely On
            </h1>
            <p className="ar mx-auto mb-4 max-w-2xl text-white/70">فريق استرجاع سيارات موثوق في الشارقة</p>
            <p className="mx-auto mb-5 max-w-2xl text-base text-white/80 sm:mb-8 sm:text-lg">
              A straightforward, professional recovery service run by people who care about getting you back on the road safely.
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

        {/* Who We Are */}
        <section className="bg-white py-20">
          <div className="wrap grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <p className="mb-3 font-bold text-amber-dark">Our Story</p>
              <h2 className="mb-2 text-3xl font-extrabold text-ink lg:text-4xl">
                Built Around Fast, Careful Recovery
              </h2>
              <p className="ar mb-4 text-ink/60">قصتنا في خدمة سائقي الشارقة</p>
              <p className="mb-4 leading-8 text-ink/70">
                Rapid Car Recovery was set up with one simple goal: reach stranded drivers in Sharjah
                quickly and get their vehicle moved safely, without unnecessary delay or confusion over
                pricing.
              </p>
              <p className="mb-4 leading-8 text-ink/70">
                Our team now handles everything from routine roadside callouts to accident recoveries and
                flatbed transport jobs, working with private drivers and local businesses across the
                emirate.
              </p>
              <p className="leading-8 text-ink/70">
                We&rsquo;re reachable by phone and WhatsApp around the clock — no call centres, no automated
                responses, just a local team that answers and gets moving.
              </p>
            </div>
            <div className="reveal">
              <Image
                src="/images/service-towing.jpg"
                alt="Rapid Car Recovery tow truck on the road in Sharjah"
                width={1735}
                height={1080}
                priority
                className="min-h-[380px] w-full rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-slate-50 py-20">
          <div className="wrap">
            <div className="reveal mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold text-amber-dark">What Drives Us</p>
              <h2 className="mb-4 text-3xl font-extrabold text-ink lg:text-4xl">Our Values</h2>
              <p className="text-ink/70">The principles we apply to every job, regardless of size or complexity.</p>
            </div>
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {values.map((v) => (
                <div key={v.title} className="reveal rounded-3xl border border-ink/10 bg-white p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber/10">
                    <i className={`${v.icon} text-xl text-amber-dark`}></i>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-ink">{v.title}</h3>
                  <p className="text-sm leading-7 text-ink/70">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="bg-ink py-20 text-white">
          <div className="wrap grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <p className="mb-3 font-bold text-amber">Why Drivers Choose Us</p>
              <h2 className="mb-5 text-3xl font-extrabold lg:text-4xl">
                Local, Straightforward and Fast
              </h2>
              <p className="mb-6 leading-8 text-white/70">
                We know a breakdown or accident is already stressful. Our job is to take as much pressure
                off you as possible — by responding quickly, communicating clearly and handling your
                vehicle with care.
              </p>
              <ul className="space-y-4">
                {[
                  "Direct contact with our local Sharjah team",
                  "Clear pricing with no hidden extras",
                  "Careful loading, transport and drop-off",
                  "Coverage across the whole emirate",
                  "Flatbed transport available for 4x4s and low cars",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-white/85">
                    <i className="fa-solid fa-circle-check mt-1 flex-shrink-0 text-amber"></i>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <Image
                src="/images/coverage.jpg"
                alt="Rapid Car Recovery technician assisting a vehicle"
                width={2000}
                height={1333}
                className="min-h-[380px] w-full rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Areas Covered */}
        <section className="bg-white py-20">
          <div className="wrap">
            <div className="reveal mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold text-amber-dark">Where We Operate</p>
              <h2 className="mb-4 text-3xl font-extrabold text-ink lg:text-4xl">Areas We Cover</h2>
              <p className="text-ink/70">
                We regularly assist drivers across the following areas of Sharjah. Not sure if we cover your location? Just call us.
              </p>
            </div>
            <div className="reveal flex flex-wrap justify-center gap-4">
              {areas.map((area) => (
                <div key={area} className="rounded-2xl border border-ink/10 bg-slate-50 px-6 py-4 text-center">
                  <i className="fa-solid fa-location-dot mb-2 block text-amber-dark"></i>
                  <span className="font-semibold text-ink">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-slate-50 py-20">
          <div className="wrap mx-auto max-w-3xl">
            <div className="reveal mb-12 text-center">
              <p className="mb-3 font-bold text-amber-dark">Common Questions</p>
              <h2 className="text-3xl font-extrabold text-ink lg:text-4xl">About Rapid Car Recovery</h2>
            </div>
            <div className="grid gap-5">
              {faqs.map((faq) => (
                <div key={faq.q} className="reveal rounded-2xl border border-ink/10 bg-white p-6">
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
            <h2 className="mb-5 text-3xl font-extrabold lg:text-5xl">Need Recovery Assistance?</h2>
            <p className="mb-8 text-lg text-ink/80">
              Call or WhatsApp us and our team will be with you as quickly as possible.
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
