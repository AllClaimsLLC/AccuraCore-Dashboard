import { Sora, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";

// Fonts
const sora = Sora({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "AccuraCore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider>

          <ScrollProgress />
          {/* <CustomCursor /> */}

          <div className={sora.className}>{children}</div>

          <Analytics />

          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-BSJFNSTFG4"
            strategy="afterInteractive"
          />

          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BSJFNSTFG4');
            `}
          </Script>
        </ThemeProvider>
      </body>
    </html>
  );
}
