import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "@/components/Footer";
import Header from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "my Portfolio",
  description: "rami hammami 22years ",
  icons : "./log.jpg"
};


console.log(process.env.EMAIL_HOST)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        {/* footer stratr here */}
       <Footer/>
      </body>
    </html>
  );
}
