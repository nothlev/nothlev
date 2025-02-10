import { Footer } from "~/components/footer";
import { Navigation } from "~/components/navigation";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col w-full max-w-4xl border-2 border-[#101010] mx-auto">
      <header className="py-6 px-8 flex justify-end">
        <Navigation />
      </header>
      <main className="border-t-2 border-[#101010] py-2 px-8 flex items-center justify-center">
      </main>
      <footer className="mt-auto border-t-2 border-[#101010] w-full py-12 px-6" role="contentinfo">
        <Footer />
      </footer>
    </div>
  );
}
