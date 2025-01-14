// ADDONS
import type { Metadata } from "next";
import { Ubuntu } from 'next/font/google'

// MAIN COMPONENTS
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactIcons from "@/components/ui/ContactIcons";
/* import AnimatedSlidesBg from "@/components/ui/AnimatedSlidesBg"; */

// CSS STYLES
import '@/css/globals.css'
import '@/css/header.css'
import '@/css/footer.css'
import '@/css/spinCarousel.css'
/* import '@/css/textSlider.css' */
/* import '@/css/animatedSlidesBg.css' */

// addons config
const ubuntu = Ubuntu({subsets: ['latin'], display: 'swap', weight: ['400', '700'], style: 'normal'})
export const metadata: Metadata = {
  title: "DougDuranDEV",
  description: "Doug Duran JS developer / Designer Digital",
  authors: {name: 'Doug Duran'},
  keywords: 'developer, javascript, designer',
  icons: 'img/logo-dougduran.png',
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="pt-br">
      <body className={`${ubuntu.className} antialiased`}>
        <Header />
        {children}
        <ContactIcons whatsapp='+5544999323339' messenger='doug.duran1' />
        <Footer />
        {/* <AnimatedSlidesBg /> */}
      </body>
    </html>
  );
}
