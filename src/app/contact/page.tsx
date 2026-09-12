import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Rapid Car Recovery by phone or WhatsApp for car recovery, towing, breakdown recovery and more across Sharjah. Call +971 54 343 4863.",
};

const contactMethods = [
  {
    icon: "fa-solid fa-phone",
    title: "Call Us",
    detail: "+971 54 343 4863",
    desc: "Speak directly to our team. Best for urgent roadside situations.",
    href: "tel:+971543434863",
    cta: "Call Now",
    external: false,
  },
  {
    icon: "fa-brands fa-whatsapp",
    title: "WhatsApp",
    detail: "+971 54 343 4863",
    desc: "Send your location, vehicle details and a brief description and we'll respond as quickly as possible.",
    href: "https://wa.me/971543434863",
    cta: "Message Us",
    external: true,
  },
];

const faqs = [
  {
    q: "What is the fastest way to contact you?",
    a: "Calling us is the fastest option for urgent roadside situations. WhatsApp is great for sending your location and details so we can plan the right response.",
  },
  {
    q: "Do you respond to WhatsApp messages quickly?",
    a: "Yes. We monitor WhatsApp throughout the day and aim to respond to all messages as quickly as possible. If we're on a job we'll reply as soon as we're free.",
  },
  {
    q: "Can I get a quote before booking?",
    a: "Yes. Share your pickup location, destination and vehicle type and we'll give you a clear cost estimate before you commit to anything.",
  },
  {
    q: "Do you operate 24 hours a day?",
    a: "Yes. Rapid Car Recovery is on call day and night across Sharjah — breakdowns and accidents don't keep office hours, so neither do we.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header activePath="/contact" />

      <main>
        {/* Page Banner */}
        <section className="hero-panel text-white">
          <div className="wrap reveal py-10 text-center sm:py-14 lg:py-20">
            <p className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-amber/40 bg-amber/15 px-3 py-1.5 text-xs font-semibold text-amber-100 sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <i className="fa-solid fa-envelope flex-shrink-0"></i> Contact Us
            </p>
            <h1 className="mb-2 text-3xl leading-tight font-extrabold sm:mb-3 sm:text-4xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="ar mx-auto mb-4 max-w-2xl text-white/70">تواصل معنا الآن</p>
            <p className="mx-auto mb-5 max-w-2xl text-base text-white/80 sm:mb-8 sm:text-lg">
              Need car recovery in Sharjah or want to ask a question? Call or WhatsApp us and our team will be in touch.
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

        {/* Contact Methods */}
        <section className="bg-slate-50 py-20">
          <div className="wrap">
            <div className="reveal mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold text-amber-dark">How to Reach Us</p>
              <h2 className="mb-4 text-3xl font-extrabold text-ink lg:text-4xl">Contact Options</h2>
              <p className="text-ink/70">Choose the method that suits your situation best.</p>
            </div>
            <div className="mx-auto grid max-w-3xl gap-7 md:grid-cols-2">
              {contactMethods.map((method) => (
                <div key={method.title} className="reveal flex flex-col rounded-3xl border border-ink/10 bg-white p-8">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-amber/10">
                    <i className={`${method.icon} text-2xl text-amber-dark`}></i>
                  </div>
                  <h3 className="mb-1 text-xl font-bold text-ink">{method.title}</h3>
                  <p className="mb-3 font-semibold break-all text-amber-dark">{method.detail}</p>
                  <p className="flex-1 text-sm leading-7 text-ink/70">{method.desc}</p>
                  <a
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className="mt-6 rounded-full bg-ink px-6 py-3 text-center font-bold text-white transition hover:bg-ink-light"
                  >
                    {method.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Message Form */}
        <section className="bg-white py-20">
          <div className="wrap grid items-start gap-12 lg:grid-cols-2">
            <div className="reveal">
              <p className="mb-3 font-bold text-amber-dark">Request a Quote</p>
              <h2 className="mb-2 text-3xl font-extrabold text-ink lg:text-4xl">
                Get a Free Quote on WhatsApp
              </h2>
              <p className="ar mb-4 text-ink/60">احصل على عرض سعر مجاني عبر واتساب</p>
              <p className="mb-6 leading-8 text-ink/70">
                Fill in your details and we&rsquo;ll send you a clear price via WhatsApp as quickly as possible.
              </p>
              <QuoteForm variant="light" />
            </div>

            {/* Contact Info Panel */}
            <div className="reveal space-y-6">
              <div className="rounded-3xl bg-ink p-8 text-white">
                <h3 className="mb-6 text-xl font-bold">Contact Information</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <i className="fa-solid fa-phone text-amber"></i>
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-white/60">Phone</p>
                      <a href="tel:+971543434863" className="font-semibold transition hover:text-amber">+971 54 343 4863</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <i className="fa-brands fa-whatsapp text-amber"></i>
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-white/60">WhatsApp</p>
                      <a
                        href="https://wa.me/971543434863"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold transition hover:text-amber"
                      >
                        +971 54 343 4863
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <i className="fa-solid fa-location-dot text-amber"></i>
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-white/60">Coverage</p>
                      <p className="font-semibold">Serving all of Sharjah, 24/7</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <i className="fa-solid fa-clock text-amber"></i>
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-white/60">Availability</p>
                      <p className="font-semibold">Available for urgent calls, 24/7</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-ink/10 bg-slate-50 p-7">
                <h3 className="mb-3 flex items-center gap-2 font-bold text-ink">
                  <i className="fa-solid fa-map-location-dot text-amber-dark"></i> Areas We Cover
                </h3>
                <div className="flex flex-wrap gap-2 text-sm">
                  {[
                    "Al Nahda", "Al Majaz", "Al Qasimia", "Al Qasba", "Al Taawun", "Al Khan",
                    "Al Mamzar", "Al Yarmook", "Al Ghuwair", "Al Nabba", "Al Qulayaah", "Al Jazzat",
                    "Al Goaz", "Al Ramla", "Al Fayha", "Al Ghafia", "Al Rahmaniya", "Muwaileh",
                    "Al Saja'a", "Al Juraina",
                  ].map((area) => (
                    <span key={area} className="rounded-full border border-ink/10 bg-white px-3 py-1 font-medium text-ink/80">{area}</span>
                  ))}
                </div>
                <a href="/areas" className="mt-4 inline-block text-sm font-bold text-amber-dark">
                  See full coverage area →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-slate-50 py-20">
          <div className="wrap mx-auto max-w-3xl">
            <div className="reveal mb-12 text-center">
              <p className="mb-3 font-bold text-amber-dark">Common Questions</p>
              <h2 className="text-3xl font-extrabold text-ink lg:text-4xl">Contact &amp; Response</h2>
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
            <h2 className="mb-5 text-3xl font-extrabold lg:text-5xl">Ready to Get Help?</h2>
            <p className="mb-8 text-lg text-ink/80">
              Call or WhatsApp us now and our team will respond as quickly as possible.
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
