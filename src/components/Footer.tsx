import Link from "next/link";
import { Logo } from "./Logo";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="bg-ink pt-16 pb-8 text-slate-300">
      <div className="wrap">
        <div className="mb-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo variant="light" size="md" />
            <p className="mt-4 mb-2 text-sm leading-7 text-slate-400">
              Round-the-clock car recovery, towing and roadside support for drivers across Sharjah.
            </p>
            <p className="ar mb-5 text-sm leading-7 text-slate-400">
              خدمات سحب واسترجاع السيارات على مدار الساعة لجميع السائقين في إمارة الشارقة.
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/971543434863" target="_blank" rel="noopener noreferrer" className="social-circle">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="tel:+971543434863" className="social-circle">
                <i className="fa-solid fa-phone"></i>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 border-b border-amber/40 pb-2 text-lg font-bold text-white">Contact Us</h4>
            <div className="space-y-1">
              <div className="info-row">
                <i className="fa-solid fa-phone mt-0.5 shrink-0 text-amber"></i>
                <a href="tel:+971543434863" className="transition hover:text-white">+971 54 343 4863</a>
              </div>
              <div className="info-row">
                <i className="fab fa-whatsapp mt-0.5 shrink-0 text-amber"></i>
                <a href="https://wa.me/971543434863" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                  +971 54 343 4863
                </a>
              </div>
              <div className="info-row">
                <i className="fa-solid fa-location-dot mt-0.5 shrink-0 text-amber"></i>
                <span>Serving all of Sharjah, 24/7</span>
              </div>
              <div className="info-row">
                <i className="fa-solid fa-clock mt-0.5 shrink-0 text-amber"></i>
                <span>Open every day, day &amp; night</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 border-b border-amber/40 pb-2 text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="footer-link"><i className="fa-solid fa-chevron-right text-xs text-amber"></i>Home</Link></li>
              <li><Link href="/services" className="footer-link"><i className="fa-solid fa-chevron-right text-xs text-amber"></i>Services</Link></li>
              <li><Link href="/about" className="footer-link"><i className="fa-solid fa-chevron-right text-xs text-amber"></i>About Us</Link></li>
              <li><Link href="/areas" className="footer-link"><i className="fa-solid fa-chevron-right text-xs text-amber"></i>Coverage Area</Link></li>
              <li><Link href="/contact" className="footer-link"><i className="fa-solid fa-chevron-right text-xs text-amber"></i>Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 border-b border-amber/40 pb-2 text-lg font-bold text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="footer-link">
                    <i className="fa-solid fa-chevron-right text-xs text-amber"></i>{service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>{`© ${new Date().getFullYear()} Rapid Car Recovery — Car Recovery & Towing Services, Sharjah. All rights reserved.`}</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-amber">Privacy Policy</a>
            <a href="#" className="transition hover:text-amber">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
