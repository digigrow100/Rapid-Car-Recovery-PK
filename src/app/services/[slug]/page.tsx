import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { services, getServiceBySlug } from "@/lib/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: `${service.desc} Call +971 54 343 4863 for ${service.title} anywhere in Sharjah.`,
  };
}

const faqs = [
  {
    q: "How quickly can you reach me in Sharjah?",
    a: "Response times depend on your location and current job volume, but we prioritise urgent calls and aim to reach you as quickly as possible across the emirate.",
  },
  {
    q: "Can you give me a price over the phone?",
    a: "We can give you a clear idea of cost once we know your vehicle type, pickup location and destination. Call or WhatsApp us with the details for an accurate quote.",
  },
  {
    q: "Do you cover areas outside central Sharjah?",
    a: "Yes. We cover the whole emirate, from the city centre to the outskirts. Get in touch if you're unsure whether your location is covered.",
  },
];

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Header activePath="/services" />

      <main>
        {/* Page Banner */}
        <section className="hero-panel text-white">
          <div className="wrap reveal py-10 sm:py-14 lg:py-20">
            <nav className="mb-5 text-sm text-white/60">
              <Link href="/" className="hover:text-amber">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="hover:text-amber">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-white/85">{service.title}</span>
            </nav>
            <p className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-amber/40 bg-amber/15 px-3 py-1.5 text-xs font-semibold text-amber-100 sm:px-4 sm:py-2 sm:text-sm">
              <i className={`${service.icon} flex-shrink-0`}></i> Our Services
            </p>
            <h1 className="mb-2 max-w-3xl text-3xl leading-tight font-extrabold sm:mb-3 sm:text-4xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="ar mb-4 text-white/70">{service.titleAr}</p>
            <p className="mb-5 max-w-2xl text-base text-white/80 sm:mb-8 sm:text-lg">{service.desc}</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
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

        {/* Detail */}
        <section className="bg-white py-20">
          <div className="wrap grid items-start gap-12 lg:grid-cols-2">
            <div className="reveal">
              <Image
                src={service.img}
                alt={service.title}
                width={900}
                height={600}
                priority
                className="min-h-[320px] w-full rounded-3xl object-cover shadow-2xl"
              />
              {service.slug === "jumpstart-service-sharjah" && (
                <Image
                  src="/images/flat-battery-assistance-1448x1086.webp"
                  alt="Flat battery assistance in Sharjah"
                  width={900}
                  height={600}
                  className="mt-6 w-full rounded-3xl object-cover shadow-xl"
                />
              )}
            </div>
            <div className="reveal">
              <p className="mb-3 font-bold text-amber-dark">About This Service</p>
              <h2 className="mb-5 text-2xl font-extrabold text-ink lg:text-3xl">{service.title} — What to Expect</h2>
              {service.intro.map((paragraph) => (
                <p key={paragraph} className="mb-4 leading-8 text-ink/70">{paragraph}</p>
              ))}
              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-ink/80">
                    <i className="fa-solid fa-circle-check mt-1 flex-shrink-0 text-amber-dark"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="tel:+971543434863" className="rounded-full bg-ink px-7 py-4 text-center font-bold text-white transition hover:bg-ink-light">
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
          </div>
        </section>

        {/* Related Services */}
        <section className="bg-ink py-20 text-white">
          <div className="wrap">
            <div className="reveal mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold text-amber">Related Services</p>
              <h2 className="mb-4 text-3xl font-extrabold lg:text-4xl">Other Ways We Can Help</h2>
            </div>
            <div className="grid gap-7 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="feature-card-dark reveal flex flex-col p-7 transition hover:-translate-y-1"
                >
                  <i className={`${item.icon} mb-4 text-3xl text-amber`}></i>
                  <h3 className="mb-1 text-lg font-bold">{item.title}</h3>
                  <p className="ar mb-2 text-xs text-white/50">{item.titleAr}</p>
                  <p className="flex-1 text-sm text-white/70">{item.desc}</p>
                  <span className="mt-4 text-sm font-bold text-amber">
                    Learn More <i className="fa-solid fa-arrow-right ml-1"></i>
                  </span>
                </Link>
              ))}
            </div>
            <div className="reveal mt-10 text-center">
              <Link href="/services" className="inline-block rounded-full border-2 border-amber px-8 py-4 font-bold text-amber transition hover:bg-amber hover:text-ink">
                View All Services <i className="fa-solid fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white py-20">
          <div className="wrap mx-auto max-w-3xl">
            <div className="reveal mb-12 text-center">
              <p className="mb-3 font-bold text-amber-dark">Common Questions</p>
              <h2 className="text-3xl font-extrabold text-ink lg:text-4xl">Frequently Asked Questions</h2>
            </div>
            <div className="grid gap-5">
              {faqs.map((faq) => (
                <div key={faq.q} className="reveal rounded-2xl border border-ink/10 p-6">
                  <h3 className="mb-2 flex items-start gap-2 font-bold text-ink">
                    <i className="fa-solid fa-circle-question mt-1 text-amber-dark"></i>
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
            <h2 className="mb-5 text-3xl font-extrabold lg:text-5xl">Need {service.title}?</h2>
            <p className="mb-8 text-lg text-ink/80">Call or WhatsApp us now and our team will respond as quickly as possible.</p>
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
