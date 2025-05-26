import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/parts/Navbar";
import { Provider } from "./provider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "SquareUp",
  description:
    "SquareUp is a modern, open-source, and fully customizable blogging platform designed for developers and content creators. It offers a sleek interface, powerful features, and seamless integration with various tools to enhance your blogging experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Provider>
          <Navbar />
          <main className="md:px-8 mt-[90px] mx-auto container">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
