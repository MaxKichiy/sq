import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sweet Queen",
    template: "%s | Sweet Queen",
  },
  description: "Купуйте коробки тут!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(oswald.className, "h-full")}>
        <Header />
        <main>{children}</main>
        <Toaster />
        <footer></footer>
      </body>
    </html>
  );
}
