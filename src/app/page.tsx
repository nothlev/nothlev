"use client";

import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-3 grid-rows-[1fr_auto] justify-items-stretch px-4 sm:px-8 select-none">
      <div className="col-span-3 row-start-2 py-4 sm:py-8">
        <Footer />
      </div>
    </main>
  );
}
