export type Service = {
  slug: string;
  icon: string;
  img: string;
  title: string;
  titleAr: string;
  desc: string;
  intro: string[];
  features: string[];
};

export const services: Service[] = [
  {
    slug: "car-recovery-sharjah",
    icon: "fa-solid fa-truck-pickup",
    img: "/images/car-recovery-to-dealership.webp",
    title: "Car Recovery Sharjah",
    titleAr: "استرجاع السيارات في الشارقة",
    desc: "Fast, careful recovery for any car that can't be driven, wherever you are in Sharjah.",
    intro: [
      "When your car won't start or won't move safely under its own power, our car recovery service gets it off the road and to wherever it needs to go. We dispatch the nearest available driver and keep you updated from the first call until drop-off.",
      "Every vehicle is loaded and secured properly, whether it's heading to your regular garage, back home, or into storage while you sort out repairs.",
    ],
    features: [
      "Rapid dispatch across the emirate",
      "Suitable for cars, SUVs and light vehicles",
      "Transport to a garage, home or storage yard",
    ],
  },
  {
    slug: "towing-service-sharjah",
    icon: "fa-solid fa-truck-ramp-box",
    img: "/images/breakdown-recovery-blue-sedan-on-highway-tow-ramp-1448x1086.webp",
    title: "Towing Service Sharjah",
    titleAr: "خدمة سحب السيارات في الشارقة",
    desc: "Reliable towing to your garage, home or preferred location, handled with care from hook-up to drop-off.",
    intro: [
      "Our towing service covers everyday jobs — a car that needs moving between locations, a vehicle sale transfer, or a straightforward tow after a minor issue. Drivers hook up quickly and drive steadily to avoid any unnecessary strain on the vehicle.",
      "We're flexible on drop-off points across Sharjah, so whether that's your garage of choice, your home, or a workshop you trust, we'll get the car there safely.",
    ],
    features: [
      "Modern towing fleet across Sharjah",
      "Secure hook-up and steady transport",
      "Flexible drop-off locations",
    ],
  },
  {
    slug: "jumpstart-service-sharjah",
    icon: "fa-solid fa-car-battery",
    img: "/images/jump-start-day.webp",
    title: "Jumpstart Service Sharjah",
    titleAr: "خدمة تشغيل البطارية في الشارقة",
    desc: "A flat battery won't slow you down for long — our team jumpstarts your car on the spot, anywhere in Sharjah.",
    intro: [
      "A dead battery is one of the most common reasons drivers get stuck, and usually one of the quickest to fix. Our jumpstart service sends a technician straight to your location with the right equipment to get your engine running again in minutes.",
      "If the battery turns out to need more than a jumpstart — say it's old, damaged, or won't hold charge — we'll let you know on the spot and can arrange a replacement or full recovery instead.",
    ],
    features: [
      "Fast callout for flat or dead batteries",
      "On-the-spot jumpstart, no towing needed in most cases",
      "Honest advice if the battery needs replacing",
    ],
  },
  {
    slug: "emergency-towing-sharjah",
    icon: "fa-solid fa-triangle-exclamation",
    img: "/images/car-towing-highway-recovery-with-blue-hatchback-1459x1078.webp",
    title: "Emergency Towing Sharjah",
    titleAr: "سحب طوارئ في الشارقة",
    desc: "Rapid response towing for urgent situations, so you're not left waiting on a busy or unsafe road.",
    intro: [
      "Some breakdowns happen in genuinely unsafe spots — a busy highway shoulder, a blind bend, a narrow lane with fast-moving traffic. Our emergency towing service is built for exactly that: the fastest available driver is sent your way, and we keep you informed while you wait.",
      "If you're not sure whether your situation counts as an emergency, call anyway — we'd rather confirm you're safe than have you wait longer than necessary.",
    ],
    features: [
      "Fastest available dispatch for urgent calls",
      "Safe recovery on highways and busy roads",
      "Clear updates while help is on the way",
    ],
  },
  {
    slug: "roadside-assistance-sharjah",
    icon: "fa-solid fa-road",
    img: "/images/service-car-recovery.jpg",
    title: "Roadside Assistance Sharjah",
    titleAr: "المساعدة على الطريق في الشارقة",
    desc: "On-the-spot help for minor issues so you can often get back on the road without a full tow.",
    intro: [
      "Not every roadside problem needs a full tow. A flat battery, an empty tank, or a minor fault can often be sorted on the spot, saving you time and the hassle of arranging separate repairs later.",
      "Our team will assess the situation when they arrive and, if it can be fixed there and then, get you back on your way. If not, we'll arrange the right recovery option straight away.",
    ],
    features: [
      "Quick on-site checks where possible",
      "Help with flat batteries, fuel and minor faults",
      "Full recovery arranged if it can't be fixed roadside",
    ],
  },
  {
    slug: "breakdown-recovery-sharjah",
    icon: "fa-solid fa-car-burst",
    img: "/images/breakdown-recovery-for-birmingham-website-1448x1086.webp",
    title: "Breakdown Recovery Sharjah",
    titleAr: "استرجاع سيارات الأعطال في الشارقة",
    desc: "Whatever's stopped your car — engine trouble, a flat tyre or an electrical fault — we'll get it moved safely.",
    intro: [
      "Mechanical and electrical breakdowns can happen anywhere, anytime, and often without warning. Our breakdown recovery service handles the full range — from a car that simply won't start to more serious engine or transmission issues that leave it undriveable.",
      "We'll recover the vehicle safely from wherever it's stopped and transport it to your preferred garage, so you can get it looked at properly.",
    ],
    features: [
      "Covers mechanical and electrical breakdowns",
      "Safe recovery from any Sharjah road",
      "Transport to your preferred garage",
    ],
  },
  {
    slug: "flatbed-towing-sharjah",
    icon: "fa-solid fa-trailer",
    img: "/images/vehicle-transport-1535x1024.webp",
    title: "Flatbed Towing Sharjah",
    titleAr: "سحب بشاحنة مسطحة في الشارقة",
    desc: "Flatbed transport that keeps all four wheels off the road, ideal for low cars, 4x4s and damaged vehicles.",
    intro: [
      "Some vehicles need extra care in transport — lowered cars, 4x4s, and anything with damage that rules out a standard tow. Our flatbed towing service lifts the whole vehicle clear of the road, avoiding any strain on wheels, suspension or drivetrain.",
      "It's our recommended option whenever a vehicle can't be safely towed on its wheels, and we strap everything down securely before setting off.",
    ],
    features: [
      "No wheels touch the ground during transport",
      "Best option for lowered cars and 4x4s",
      "Secure strapping for damaged or non-runners",
    ],
  },
  {
    slug: "accident-recovery-sharjah",
    icon: "fa-solid fa-car-side",
    img: "/images/wrecked-blue-sedan-by-the-roadside-1536x1024.webp",
    title: "Accident Recovery Sharjah",
    titleAr: "استرجاع سيارات الحوادث في الشارقة",
    desc: "Considerate, professional recovery from the scene of a collision, with support for the paperwork after.",
    intro: [
      "Being in an accident is stressful enough without worrying about how the vehicle gets moved. Our accident recovery service handles the clean-up with care — clearing the scene safely and transporting the vehicle to a body shop, storage compound, or wherever it needs to go.",
      "We can coordinate with police or your insurer on request, and many customers find it easier to call us directly first, then update their insurance company once the vehicle is safely recovered.",
    ],
    features: [
      "Sensitive handling at the accident scene",
      "Coordination with police or insurers on request",
      "Transport to a body shop or storage compound",
    ],
  },
  {
    slug: "vehicle-towing-sharjah",
    icon: "fa-solid fa-truck",
    img: "/images/van-recovery-service-1448x1086.webp",
    title: "Vehicle Towing Sharjah",
    titleAr: "سحب المركبات في الشارقة",
    desc: "General vehicle towing for cars, vans and light commercial vehicles anywhere across Sharjah.",
    intro: [
      "Beyond car recovery, we also handle general vehicle towing for vans and light commercial vehicles — useful for businesses as well as individual drivers who need a vehicle moved reliably across town.",
      "Pricing is distance-based and confirmed upfront, so there are no surprises once the job is done.",
    ],
    features: [
      "Cars, vans and light commercial vehicles",
      "Local and cross-town towing",
      "Fair, distance-based pricing",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
