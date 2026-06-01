interface Props {
    photos?: string[];
}

export default function MinimalBlackFrame({
    photos = [],
}: Props) {
    return (
        <div className="w-[260px] rounded-3xl border-2 border-amber-400 bg-gradient-to-b from-black via-zinc-900 to-black p-4 shadow-2xl">

            {/* Header */}

            <div className="mb-4 text-center">
                <div className="text-xs tracking-[0.3em] text-amber-400">
                    LUXURY EDITION
                </div>

                <h2 className="mt-1 text-2xl font-bold text-amber-300">
                    BLACK GOLD
                </h2>

                <div className="mx-auto mt-2 h-[1px] w-24 bg-amber-400" />
            </div>

            {/* Photo Slots */}

            {[0, 1, 2, 3].map((index) => (
                <div
                    key={index}
                    className="mb-3 overflow-hidden rounded-xl border border-amber-500/50 bg-zinc-950"
                >
                    {photos[index] ? (
                        <img
                            src={photos[index]}
                            alt={`Photo ${index + 1}`}
                            className="h-32 w-full object-cover"
                        />
                    ) : (
                        <div className="flex h-32 items-center justify-center text-sm text-amber-500">
                            Photo {index + 1}
                        </div>
                    )}
                </div>
            ))}

            {/* Footer */}

            <div className="mt-4 text-center">
                <div className="mx-auto mb-2 h-[1px] w-24 bg-amber-400" />

                <p className="text-sm font-semibold tracking-widest text-amber-300">
                    PHOTOBOOTH
                </p>

                <p className="mt-1 text-xs text-amber-500">
                    Capture The Moment
                </p>
            </div>
        </div>
    );
}