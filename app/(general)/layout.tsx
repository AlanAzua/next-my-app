import { Navbar } from "@/components/navbar/Navbar";
export default function AboutLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center p-24 bg-black">
      <Navbar />
      <span className="text-5xl font-bold text-gray-400">Master Class</span>
      { children }
    </main>
  );
}