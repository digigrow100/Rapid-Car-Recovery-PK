export function FloatingButtons() {
  return (
    <>
      <div className="fixed right-4 bottom-[5.25rem] z-50 flex flex-col items-center gap-2.5 sm:bottom-5">
        <a
          href="tel:+971543434863"
          aria-label="Call Rapid Car Recovery"
          className="float-btn flex h-12 w-12 items-center justify-center rounded-full bg-amber shadow-xl transition hover:bg-amber-dark sm:h-14 sm:w-14"
        >
          <i className="fa-solid fa-phone text-lg text-ink sm:text-xl"></i>
        </a>
        <a
          href="https://wa.me/971543434863"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Rapid Car Recovery"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp shadow-xl transition hover:bg-green-600 sm:h-14 sm:w-14"
        >
          <i className="fa-brands fa-whatsapp text-xl text-white sm:text-2xl"></i>
        </a>
      </div>
      <a
        href="tel:+971543434863"
        aria-label="Emergency Call Rapid Car Recovery"
        className="pulse-cta fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-3 bg-gradient-to-r from-amber to-amber-dark py-3.5 text-base font-bold text-ink shadow-[0_-4px_20px_rgba(0,0,0,0.25)] transition hover:brightness-105 sm:hidden"
      >
        <i className="fa-solid fa-phone text-lg"></i>
        Emergency Call
      </a>
    </>
  );
}
