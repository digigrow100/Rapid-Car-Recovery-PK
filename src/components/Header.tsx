"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { services } from "@/lib/services";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/areas", label: "Coverage" },
  { href: "/contact", label: "Contact" },
];

export function Header({ activePath = "/" }: { activePath?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const isServicesActive = activePath === "/services" || activePath.startsWith("/services/");

  return (
    <>
      {/* Top Bar */}
      <div className="border-b border-amber/20 bg-ink py-2 text-white/70">
        <div className="wrap flex flex-col items-center justify-center gap-1 text-center text-xs sm:flex-row sm:gap-3 md:text-sm">
          <span>
            <i className="fas fa-triangle-exclamation mr-1"></i>24/7 Car Recovery &amp; Towing in Sharjah
          </span>
          <span className="ar hidden text-white/60 sm:inline">| استرجاع وسحب السيارات في الشارقة على مدار الساعة</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 shadow-md backdrop-blur">
        <div className="wrap flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Logo variant="light" size="md" />
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
            <Link
              href="/"
              className={
                "/" === activePath ? "nav-dot text-amber" : "nav-dot text-white/85 transition hover:text-amber"
              }
            >
              Home
            </Link>

            {/* Services dropdown */}
            <div className="group relative">
              <Link
                href="/services"
                className={
                  (isServicesActive ? "nav-dot text-amber" : "nav-dot text-white/85 transition hover:text-amber") +
                  " inline-flex items-center gap-1.5"
                }
              >
                Services <i className="fa-solid fa-chevron-down text-[10px]"></i>
              </Link>
              <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="rounded-2xl border border-amber/20 bg-ink p-3 shadow-2xl">
                  <ul className="grid gap-1">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <a
                          href={`/services/${service.slug}`}
                          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-white/85 transition hover:bg-amber/10 hover:text-amber"
                        >
                          <i className={`${service.icon} w-4 text-xs text-amber`}></i>
                          {service.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/services"
                    className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-amber/10 px-3 py-2 text-sm font-bold text-amber transition hover:bg-amber hover:text-ink"
                  >
                    View All Services <i className="fa-solid fa-arrow-right text-xs"></i>
                  </Link>
                </div>
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  link.href === activePath
                    ? "nav-dot text-amber"
                    : "nav-dot text-white/85 transition hover:text-amber"
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+971543434863"
              className="pulse-cta rounded-full bg-amber px-5 py-3 text-sm font-bold text-ink transition hover:bg-amber-dark"
            >
              <i className="fa-solid fa-phone mr-2"></i>Call Now
            </a>
            <a
              href="https://wa.me/971543434863"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-whatsapp px-5 py-3 text-sm font-bold text-white transition hover:bg-green-600"
            >
              <i className="fab fa-whatsapp mr-2"></i>WhatsApp
            </a>
          </div>

          <button
            className="h-11 w-11 rounded-xl bg-amber text-ink lg:hidden"
            aria-label="Open mobile menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-white/10 bg-ink lg:hidden">
            <div className="wrap grid gap-3 py-4 font-semibold">
              <Link
                href="/"
                className={"/" === activePath ? "py-2 text-amber" : "py-2 text-white/85 hover:text-amber"}
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fa-solid fa-chevron-right mr-2 text-xs text-amber"></i>Home
              </Link>

              {/* Mobile Services accordion */}
              <div>
                <div className="flex items-center justify-between">
                  <Link
                    href="/services"
                    className={isServicesActive ? "py-2 text-amber" : "py-2 text-white/85 hover:text-amber"}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <i className="fa-solid fa-chevron-right mr-2 text-xs text-amber"></i>Services
                  </Link>
                  <button
                    aria-label="Toggle services list"
                    className="px-2 py-2 text-white/70"
                    onClick={() => setIsMobileServicesOpen((open) => !open)}
                  >
                    <i className={`fa-solid ${isMobileServicesOpen ? "fa-chevron-up" : "fa-chevron-down"} text-xs`}></i>
                  </button>
                </div>
                {isMobileServicesOpen && (
                  <ul className="mb-2 ml-5 grid gap-1 border-l border-white/10 pl-4">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <a
                          href={`/services/${service.slug}`}
                          className="block py-1.5 text-sm font-medium text-white/70 hover:text-amber"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={
                    link.href === activePath
                      ? "py-2 text-amber"
                      : "py-2 text-white/85 hover:text-amber"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fa-solid fa-chevron-right mr-2 text-xs text-amber"></i>
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+971543434863"
                className="mt-2 rounded-xl bg-amber px-5 py-3 text-center font-bold text-ink"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fa-solid fa-phone mr-2"></i>Call Now
              </a>
              <a
                href="https://wa.me/971543434863"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-whatsapp px-5 py-3 text-center font-bold text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fab fa-whatsapp mr-2"></i>WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
