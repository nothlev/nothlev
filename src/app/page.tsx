import { Navigation } from "~/components/navigation";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col w-full max-w-6xl border-2 border-[#101010] mx-auto">
      <header className="py-6 px-8 flex justify-end">
        <Navigation />
      </header>
      <main className="border-t-2 border-[#101010] py-2 px-8 flex items-center justify-center">
      </main>
    </div>
  );
}
