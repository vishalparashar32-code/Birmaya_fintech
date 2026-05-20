import "./globals.css";
import Script from "next/script";
import { Poppins } from "next/font/google";
import SiteChrome from "@/components/SiteChrome";
import "nprogress/nprogress.css";
import TopLoader from "@/components/TopLoader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Birmaya Fintech",
  description: "Birmaya Fintech Pvt. Ltd.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${poppins.className} antialiased`}
      >
        <TopLoader />
        <SiteChrome>{children}</SiteChrome>

        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}