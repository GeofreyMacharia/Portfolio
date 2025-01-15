import "./globals.css";
import { AnimatePresence } from "framer-motion";
export const metadata = {
  title: "Geofrey Macharia",
  description: "My Porfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth"  suppressHydrationWarning>
      <body  >
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </body>
    </html>
  );
}

