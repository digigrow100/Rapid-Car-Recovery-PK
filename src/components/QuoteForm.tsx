"use client";

import { useRef, useState } from "react";

const WHATSAPP_NUMBER = "971543434863";

const SERVICE_OPTIONS = [
  "Car Recovery Sharjah",
  "Towing Service Sharjah",
  "Jumpstart Service Sharjah",
  "Emergency Towing Sharjah",
  "Roadside Assistance Sharjah",
  "Breakdown Recovery Sharjah",
  "Flatbed Towing Sharjah",
  "Accident Recovery Sharjah",
  "Vehicle Towing Sharjah",
  "Other",
];

type QuoteFormProps = {
  variant?: "hero" | "light";
};

export function QuoteForm({ variant = "light" }: QuoteFormProps) {
  const nameRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const vehicleRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const destinationRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [error, setError] = useState(false);

  const handleSendWhatsApp = () => {
    const name = nameRef.current?.value.trim() ?? "";
    const service = serviceRef.current?.value ?? "";
    const vehicle = vehicleRef.current?.value.trim() ?? "";
    const location = locationRef.current?.value.trim() ?? "";
    const destination = destinationRef.current?.value.trim() ?? "";
    const message = messageRef.current?.value.trim() ?? "";

    if (!location) {
      setError(true);
      return;
    }
    setError(false);

    let text = "Hello Rapid Car Recovery,\n\nI would like a quote for the following:\n";
    if (service) text += `Service: ${service}\n`;
    if (name) text += `Name: ${name}\n`;
    if (vehicle) text += `Vehicle: ${vehicle}\n`;
    text += `Location: ${location}\n`;
    if (destination) text += `Destination: ${destination}\n`;
    if (message) text += `\nAdditional details: ${message}`;
    text += "\n\nPlease send me a quote as soon as possible.";

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const isHero = variant === "hero";
  const fieldClass = isHero
    ? "w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/60 focus:border-amber"
    : "w-full rounded-xl border border-ink/15 bg-ink/[0.03] px-4 py-3 text-ink outline-none placeholder:text-ink/40 focus:border-amber";

  return (
    <div className={isHero ? "quote-card reveal p-5 text-white shadow-2xl sm:p-6" : ""}>
      {isHero && (
        <>
          <h3 className="mb-1 text-2xl font-bold">Get a Free Quote</h3>
          <p className="mb-1 text-sm text-white/70">Tell us where you are and we&rsquo;ll get moving.</p>
          <p className="ar mb-5 text-sm text-white/60">أخبرنا بموقعك وسنصل إليك بأسرع وقت.</p>
        </>
      )}
      <div className="grid gap-4">
        <select
          ref={serviceRef}
          defaultValue=""
          className={fieldClass + " appearance-none"}
          style={isHero ? ({ colorScheme: "dark" } as React.CSSProperties) : undefined}
        >
          <option value="" disabled={isHero} style={isHero ? { color: "#101826", background: "#ffffff" } : undefined}>
            Service required
          </option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} style={isHero ? { color: "#101826", background: "#ffffff" } : undefined}>
              {s}
            </option>
          ))}
        </select>
        <input ref={nameRef} type="text" placeholder="Your name (optional)" className={fieldClass} />
        <input ref={vehicleRef} type="text" placeholder="Vehicle make / model (optional)" className={fieldClass} />
        <input ref={locationRef} type="text" placeholder="Your current location in Sharjah" required className={fieldClass} />
        <input ref={destinationRef} type="text" placeholder="Destination (optional)" className={fieldClass} />
        <textarea
          ref={messageRef}
          rows={3}
          placeholder="Any additional details..."
          className={fieldClass + " resize-none"}
        />
        <button
          type="button"
          onClick={handleSendWhatsApp}
          className="btn-pulse rounded-xl bg-amber px-5 py-4 font-bold text-ink transition hover:bg-amber-dark"
        >
          <i className="fa-brands fa-whatsapp mr-2"></i>Get Quote on WhatsApp
        </button>
        {error && (
          <p className="text-center text-sm text-amber-dark">
            Please enter your location so we can provide an accurate quote.
          </p>
        )}
      </div>
      {isHero && (
        <p className="mt-4 text-center text-xs text-white/60">
          Or call us directly:{" "}
          <a href="tel:+971543434863" className="font-bold text-amber transition hover:text-white">
            +971 54 343 4863
          </a>
        </p>
      )}
    </div>
  );
}
