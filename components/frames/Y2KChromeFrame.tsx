interface Props {
    photos?: string[];
}

export default function Y2KChromeFrame({
    photos = [],
}: Props) {
    return (
        <div className="w-[280px] rounded-[32px] bg-gradient-to-b from-pink-300 via-fuchsia-300 to-violet-400 p-4 shadow-2xl">
            <div className="mb-4 text-center">
                <h2 className="text-2xl font-black text-white drop-shadow-lg">
                    ✦ Y2K VIBES ✦
                </h2>

                <p className="text-xs font-bold text-white">
                    2000'S AESTHETIC
                </p>
            </div>

            {[0, 1, 2, 3].map((index) => (
                <div
                    key={index}
                    className="mb-3 overflow-hidden rounded-2xl border-4 border-white bg-white/40"
                >
                    {photos[index] ? (
                        <img
                            src={photos[index]}
                            alt={`Photo ${index + 1}`}
                            className="h-32 w-full object-cover"
                        />
                    ) : (
                        <div className="flex h-32 items-center justify-center text-white">
                            Photo {index + 1}
                        </div>
                    )}
                </div>
            ))}

            <div className="mt-4 text-center text-2xl">
                💿 ✨ ⭐ 🌈
            </div>
        </div>
    );
}