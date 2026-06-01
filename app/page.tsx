import FrameCard from "@/components/FrameCard";
import { frames } from "@/lib/frames";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-purple-950 to-black p-8">
      <div className="fixed right-[-40px] top-8 z-50 rotate-45 bg-red-600 px-12 py-2 text-sm font-bold tracking-widest text-white shadow-lg">
        DEMO
      </div>

      <h1 className="mb-3 text-center text-6xl font-bold text-white">
        Photobooth Studio
      </h1>

      <p className="mb-6 text-center text-zinc-300">
        Choose your favorite frame and start capturing memories
      </p>

      <p className="text-center text-zinc-400 mb-12">
        By: Ruleks15
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {frames.map((frame) => (
          <FrameCard
            key={frame.id}
            id={frame.id}
            name={frame.name}
          />
        ))}
      </div>
      <div className="fixed bottom-4 right-4 z-50 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-medium text-zinc-300 backdrop-blur-md">
        v1.0.0-demo
      </div>
    </main>
  );
}