import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children, pageProps }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="dark:text-white h-[calc(100vh-5rem)] p-10">
          <div className="container mx-auto h-full">{children}</div>
        </div>
  <ToastContainer/>
      </body>
    </html>
    
  );
}
