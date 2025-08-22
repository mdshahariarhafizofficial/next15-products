import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "./providers";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <Suspense>
          {children}
          </Suspense>
           <Toaster position="top-center" reverseOrder={false} />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
