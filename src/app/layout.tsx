import type { Metadata } from "next";
import Script from "next/script";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { FloatingButtons } from "@/components/FloatingButtons";
import { ScrollAnimations } from "@/components/ScrollAnimations";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Rapid Car Recovery",
    default: "Rapid Car Recovery | 24/7 Car Recovery & Towing in Sharjah",
  },
  description:
    "Rapid Car Recovery provides fast 24 hour car recovery, towing, emergency towing, breakdown recovery, flatbed towing and accident recovery across Sharjah. خدمات سحب واسترجاع السيارات في الشارقة.",
  openGraph: {
    title: "Rapid Car Recovery | 24/7 Car Recovery & Towing in Sharjah",
    description:
      "Fast car recovery, towing, roadside assistance and accident recovery across Sharjah, available 24/7.",
    images: [
      {
        url: "/images/rapid-car-recovery-open-graph.webp",
        width: 1056,
        height: 554,
        alt: "Rapid Car Recovery | Car Recovery & Towing Services in Sharjah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/rapid-car-recovery-open-graph.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M5CPBJB4');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className="pb-14 antialiased sm:pb-0">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M5CPBJB4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ScrollAnimations />
        <FloatingButtons />
        {children}
      </body>
    </html>
  );
}
