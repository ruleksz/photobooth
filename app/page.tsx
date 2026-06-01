import FrameCard from "@/components/FrameCard";
import { frames } from "@/lib/frames";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-purple-950 to-black p-8">
      <h1 className="mb-3 text-center text-6xl font-bold text-white">
        Photobooth Studio
      </h1>

      <p className="mb-12 text-center text-zinc-300">
        Choose your favorite frame and start capturing memories
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
    </main>
  );
}