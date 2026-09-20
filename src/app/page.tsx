import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { ReviewsSlider } from "@/components/ReviewsSlider";
import { services as allServices } from "@/lib/services";

const tickerItems = [
  { icon: "fa-solid fa-truck-pickup", text: "Car Recovery Sharjah" },
  { icon: "fa-solid fa-truck-ramp-box", text: "Towing Service Sharjah" },
  { icon: "fa-solid fa-car-battery", text: "Jumpstart Service Sharjah" },
  { icon: "fa-solid fa-triangle-exclamation", text: "Emergency Towing Sharjah" },
  { icon: "fa-solid fa-road", text: "Roadside Assistance Sharjah" },
  { icon: "fa-solid fa-car-burst", text: "Breakdown Recovery Sharjah" },
  { icon: "fa-solid fa-trailer", text: "Flatbed Towing Sharjah" },
  { icon: "fa-solid fa-car-side", text: "Accident Recovery Sharjah" },
];

const strip = [
  { icon: "fa-solid fa-truck-pickup", label: "Car Recovery", labelAr: "استرجاع السيارات" },
  { icon: "fa-solid fa-truck-ramp-box", label: "Towing Service", labelAr: "خدمة السحب" },
  { icon: "fa-solid fa-car-battery", label: "Jumpstart Service", labelAr: "خدمة تشغيل البطارية" },
  { icon: "fa-solid fa-triangle-exclamation", label: "Emergency Towing", labelAr: "سحب طوارئ" },
  { icon: "fa-solid fa-car-burst", label: "Accident Recovery", labelAr: "استرجاع الحوادث" },
  { icon: "fa-solid fa-headset", label: "24/7 Support", labelAr: "دعم على مدار الساعة" },
];

const featuredSlugs = [
  "car-recovery-sharjah",
  "towing-service-sharjah",
  "jumpstart-service-sharjah",
  "emergency-towing-sharjah",
  "roadside-assistance-sharjah",
  "accident-recovery-sharjah",
];
const services = featuredSlugs
  .map((slug) => allServices.find((s) => s.slug === slug))
  .filter((s): s is (typeof allServices)[number] => Boolean(s));

const whyChoose = [
  {
    icon: "fa-solid fa-gauge-high",
    title: "Rapid Response",
    desc: "A local fleet across Sharjah means help usually reaches you within minutes, not hours.",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Careful, Trained Drivers",
    desc: "Every driver is trained to load and transport your vehicle without adding any further damage.",
  },
  {
    icon: "fa-solid fa-hand-holding-dollar",
    title: "Clear Pricing Upfront",
    desc: "You'll know the cost before the truck leaves the yard — no hidden call-out fees.",
  },
];

const areas = [
  "Al Nahda", "Al Majaz", "Al Qasimia", "Al Qasba", "Al Taawun", "Al Khan",
  "Al Mamzar", "Al Yarmook", "Al Ghuwair", "Al Nabba", "Al Qulayaah", "Al Jazzat",
  "Al Goaz", "Al Ramla", "Al Fayha", "Al Ghafia", "Al Rahmaniya", "Muwaileh",
  "Al Saja'a", "Al Juraina",
];

const SHARJAH_MAP_SRC = "https://www.google.com/maps?q=Sharjah,+United+Arab+Emirates&output=embed";

export default function Home() {
  return (
    <>
      <Header activePath="/" />

      <main>
        {/* ── Hero ── */}
        <section className="hero-panel text-white">
          <div className="wrap grid items-center gap-8 py-10 sm:py-16 lg:grid-cols-[1.15fr_.85fr] lg:gap-12 lg:py-28">
            <div className="reveal">
              <p className="mb-5 inline-flex flex-wrap items-center gap-2 rounded-full border border-amber/30 bg-amber/15 px-3 py-1.5 text-xs font-semibold text-amber-100 sm:px-4 sm:py-2 sm:text-sm">
                <i className="fa-solid fa-bolt flex-shrink-0"></i>
                <span>Standing by for urgent recovery calls in Sharjah</span>
              </p>
              <h1 className="mb-2 text-3xl leading-tight font-extrabold sm:mb-3 sm:text-4xl lg:text-6xl">
                Rapid Car Recovery <span className="block text-amber">24/7 Towing in Sharjah</span>
              </h1>
              <p className="ar mb-4 text-base text-white/70 sm:text-lg">
                خدمات سحب واسترجاع السيارات في الشارقة على مدار 24 ساعة
              </p>
              <p className="mb-6 text-base text-white/80 sm:mb-8 sm:text-lg">
                Broken down or been in an accident? We provide fast car recovery, towing, roadside
                assistance and flatbed transport anywhere in Sharjah.
              </p>
              <div className="mb-7 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:gap-4">
                <a
                  href="tel:+971543434863"
                  className="btn-pulse flex min-h-[52px] w-full items-center justify-center rounded-full bg-amber px-6 py-4 text-center text-sm font-bold text-ink transition sm:w-auto sm:px-7 sm:text-base"
                >
                  <i className="fa-solid fa-phone mr-2"></i>Call +971 54 343 4863
                </a>
                <a
                  href="https://wa.me/971543434863"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[52px] w-full items-center justify-center rounded-full bg-whatsapp px-6 py-4 text-center text-sm font-bold text-white transition hover:bg-green-600 sm:w-auto sm:px-7 sm:text-base"
                >
                  <i className="fa-brands fa-whatsapp mr-2"></i>WhatsApp Us
                </a>
              </div>
              <div className="mb-6 grid grid-cols-2 gap-2 sm:mb-8 sm:grid-cols-4 sm:gap-3">
                <div className="rounded-xl border border-white/20 bg-white/10 p-3 text-center sm:rounded-2xl sm:p-4">
                  <strong className="block text-xl text-amber sm:text-2xl">24/7</strong>
                  <span className="text-xs text-slate-300">Available</span>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-3 text-center sm:rounded-2xl sm:p-4">
                  <strong className="block text-xl text-amber sm:text-2xl">Fast</strong>
                  <span className="text-xs text-slate-300">Response</span>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-3 text-center sm:rounded-2xl sm:p-4">
                  <strong className="block text-xl text-amber sm:text-2xl">All</strong>
                  <span className="text-xs text-slate-300">Sharjah Covered</span>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-3 text-center sm:rounded-2xl sm:p-4">
                  <strong className="block text-xl text-amber sm:text-2xl">Local</strong>
                  <span className="text-xs text-slate-300">Drivers</span>
                </div>
              </div>
            </div>

            <QuoteForm variant="hero" />
          </div>
        </section>

        {/* ── Ticker ── */}
        <section className="ticker-wrap py-5">
          <div className="ticker-content">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-3 px-8 text-sm font-semibold text-slate-200">
                <i className={`${item.icon} text-amber`}></i>
                {item.text}
                <span className="mx-2 text-amber">•</span>
              </span>
            ))}
          </div>
        </section>

        {/* ── Strip Row ── */}
        <section className="bg-ink py-14">
          <div className="wrap">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
              {strip.map((item) => (
                <div key={item.label} className="strip-card reveal">
                  <i className={`${item.icon} mb-2 text-3xl text-amber`}></i>
                  <p className="text-sm font-semibold text-slate-200">{item.label}</p>
                  <p className="ar text-xs text-slate-400">{item.labelAr}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section className="bg-white py-20">
          <div className="wrap grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal order-2 lg:order-1">
              <Image
                src="/images/about.jpg"
                alt="Rapid Car Recovery tow truck loading a vehicle in Sharjah"
                width={1615}
                height={1080}
                className="min-h-[360px] w-full rounded-3xl object-cover shadow-2xl"
              />
            </div>
            <div className="reveal order-1 lg:order-2">
              <p className="mb-3 font-bold text-amber-dark">Trusted Across Sharjah</p>
              <h2 className="mb-2 text-3xl font-extrabold text-ink lg:text-4xl">
                Rapid Car Recovery — On Call for Sharjah Drivers
              </h2>
              <p className="ar mb-5 text-ink/60">رابيد لخدمات سحب واسترجاع السيارات في الشارقة</p>
              <p className="mb-6 leading-8 text-ink/70">
                Whether your car won&rsquo;t start, you&rsquo;ve been in an accident, or you simply need
                a vehicle moved across town, our Sharjah-based team is set up to respond quickly and
                get you sorted with the minimum of fuss.
              </p>
              <p className="mb-8 leading-8 text-ink/70">
                From single roadside callouts to flatbed transport jobs, we treat every vehicle as if it
                were our own — careful loading, secure strapping and clear communication throughout.
              </p>
              <div className="mb-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-ink/10 p-5">
                  <i className="fa-solid fa-shield-halved mb-3 text-2xl text-amber-dark"></i>
                  <h3 className="font-bold text-ink">Careful Handling</h3>
                  <p className="mt-1 text-sm text-ink/70">Trained drivers, secure loading, every time.</p>
                </div>
                <div className="rounded-2xl border border-ink/10 p-5">
                  <i className="fa-solid fa-location-dot mb-3 text-2xl text-amber-dark"></i>
                  <h3 className="font-bold text-ink">All of Sharjah</h3>
                  <p className="mt-1 text-sm text-ink/70">We know the emirate&rsquo;s roads well.</p>
                </div>
                <div className="rounded-2xl border border-ink/10 p-5">
                  <i className="fa-solid fa-clock mb-3 text-2xl text-amber-dark"></i>
                  <h3 className="font-bold text-ink">Available 24/7</h3>
                  <p className="mt-1 text-sm text-ink/70">Day or night, we take urgent calls first.</p>
                </div>
                <div className="rounded-2xl border border-ink/10 p-5">
                  <i className="fa-solid fa-comments mb-3 text-2xl text-amber-dark"></i>
                  <h3 className="font-bold text-ink">WhatsApp Friendly</h3>
                  <p className="mt-1 text-sm text-ink/70">Send your location and we&rsquo;ll get moving.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="tel:+971543434863" className="rounded-full bg-ink px-7 py-4 text-center font-bold text-white transition hover:bg-ink-light">
                  <i className="fa-solid fa-phone mr-2"></i>Call Us Now
                </a>
                <a href="/about" className="rounded-full border-2 border-ink px-7 py-4 text-center font-bold text-ink transition hover:bg-ink hover:text-white">
                  Learn More About Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services (Dark Cards) ── */}
        <section id="services" className="bg-ink py-20">
          <div className="wrap">
            <div className="reveal mx-auto mb-3 max-w-3xl text-center">
              <p className="mb-3 font-bold text-amber">Services We Offer</p>
              <h2 className="mb-2 text-3xl font-extrabold text-white lg:text-4xl">Car Recovery &amp; Towing in Sharjah</h2>
              <p className="ar mb-4 text-slate-400">خدمات استرجاع وسحب السيارات في الشارقة</p>
              <p className="text-slate-400">
                From a simple breakdown to a full accident recovery, our services cover every situation
                you might face on Sharjah&rsquo;s roads.
              </p>
            </div>
            <div className="mt-9 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.slug} className="svc-card-dark reveal flex flex-col">
                  <Link href={`/services/${service.slug}`}>
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={900}
                      height={600}
                      className="h-52 w-full rounded-t-[1.25rem] object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <Link href={`/services/${service.slug}`} className="mb-1 text-xl font-bold text-white transition hover:text-amber">
                      {service.title}
                    </Link>
                    <p className="ar mb-2 text-sm text-slate-400">{service.titleAr}</p>
                    <p className="mb-5 flex-1 text-slate-400">{service.desc}</p>
                    <div className="mt-auto flex gap-3">
                      <a
                        href="tel:+971543434863"
                        className="flex-1 rounded-full bg-amber px-4 py-2.5 text-center text-sm font-bold text-ink transition hover:bg-amber-dark"
                      >
                        <i className="fa-solid fa-phone mr-1.5"></i>Call Now
                      </a>
                      <a
                        href="https://wa.me/971543434863"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-full bg-whatsapp px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-green-600"
                      >
                        <i className="fa-brands fa-whatsapp mr-1.5"></i>WhatsApp
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="reveal mt-10 text-center">
              <Link href="/services" className="inline-block rounded-full border-2 border-amber px-8 py-4 font-bold text-amber transition hover:bg-amber hover:text-ink">
                View All Services <i className="fa-solid fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Why Choose ── */}
        <section className="bg-slate-50 py-20">
          <div className="wrap">
            <div className="reveal mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold text-amber-dark">Why Sharjah Drivers Call Us</p>
              <h2 className="mb-4 text-3xl font-extrabold text-ink lg:text-4xl">Fast, Fair and Dependable</h2>
              <p className="text-ink/70">Call or WhatsApp us and we&rsquo;ll walk you through exactly what happens next.</p>
            </div>
            <div className="grid gap-7 md:grid-cols-3">
              {whyChoose.map((item) => (
                <div key={item.title} className="reveal rounded-3xl border border-ink/10 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-ink/5">
                    <i className={`${item.icon} text-3xl text-amber-dark`}></i>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-ink">{item.title}</h3>
                  <p className="text-ink/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Reviews Slider ── */}
        <section className="overflow-hidden bg-white py-20">
          <div className="wrap reveal mb-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 font-bold text-amber-dark">Customer Feedback</p>
              <h2 className="mb-3 text-3xl font-extrabold text-ink lg:text-4xl">What Sharjah Drivers Say</h2>
              <p className="text-sm text-ink/50">Hover or tap to pause</p>
            </div>
          </div>
          <ReviewsSlider />
        </section>

        {/* ── Areas ── */}
        <section id="areas" className="bg-ink py-20 text-white">
          <div className="wrap grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <p className="mb-3 font-bold text-amber">Coverage</p>
              <h2 className="mb-2 text-3xl font-extrabold lg:text-4xl">Covering Every Corner of Sharjah</h2>
              <p className="ar mb-4 text-slate-400">نغطي جميع مناطق الشارقة</p>
              <p className="mb-8 leading-8 text-slate-400">
                Our drivers cover the whole emirate, from busy city roads to the outskirts. Share your
                location and we&rsquo;ll confirm the fastest way to reach you.
              </p>
              <div className="mb-8 flex flex-wrap gap-3 text-sm font-semibold">
                {areas.map((area) => (
                  <span key={area} className="rounded-full border border-amber/40 bg-white/5 px-4 py-2 text-slate-200">
                    <i className="fa-solid fa-location-dot mr-2 text-xs text-amber"></i>{area}
                  </span>
                ))}
              </div>
              <a href="/areas" className="inline-block rounded-full bg-amber px-7 py-4 font-bold text-ink transition hover:bg-amber-dark">
                See Full Coverage Area <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>
            <div className="reveal">
              <Image
                src="/images/coverage.jpg"
                alt="Rapid Car Recovery technician assisting a vehicle in Sharjah"
                width={2000}
                height={1333}
                className="min-h-[380px] w-full rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* ── Map ── */}
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

        {/* ── CTA Parallax ── */}
        <section className="cta-panel py-24 text-center text-white">
          <div className="wrap reveal">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/20 px-5 py-2 text-sm font-bold text-amber">
              <i className="fa-solid fa-triangle-exclamation"></i> Stuck on the Road Right Now?
            </p>
            <h2 className="mb-2 text-3xl font-extrabold lg:text-5xl">We&rsquo;re Ready to Help</h2>
            <p className="ar mb-4 text-white/70">اتصل بنا الآن وسنصل إليك بسرعة</p>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
              Call Rapid Car Recovery or message us on WhatsApp for immediate car recovery and towing across Sharjah.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href="tel:+971543434863" className="btn-pulse rounded-full bg-amber px-8 py-4 font-bold text-ink transition">
                <i className="fa-solid fa-phone mr-2"></i>Call +971 54 343 4863
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
