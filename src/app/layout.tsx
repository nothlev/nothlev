import "@/styles/globals.css";

import { Merriweather } from "next/font/google";
import { type Metadata } from "next";

export const font = Merriweather({
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Mikkel Nothlev",
  description: "A fullstack web developer student from Denmark, who loves to code and learn new things.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${font.className}`}>
      <body>{children}</body>
    </html>
  );
}
