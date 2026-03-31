import { Sora, Outfit } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Fonts
const sora = Sora({ subsets: ["latin"], weight: ["300", "400", "500", "700"] })
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata = {
  title: "AccuraCore",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider>
          <div className={sora.className}>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
