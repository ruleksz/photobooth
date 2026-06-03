interface Props {
    photos?: string[];
}

export default function HorizontalClassicFrame({
    photos = [],
}: Props) {
    return (
        <div className="w-[600px] rounded-3xl bg-black p-4 shadow-2xl">

            {/* Photo Row */}

            <div className="grid grid-cols-4 gap-3">
                {[0, 1, 2, 3].map((index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-xl border-4 border-white bg-zinc-200"
                    >
                        {photos[index] ? (
                            <img
                                src={photos[index]}
                                alt={`Photo ${index + 1}`}
                                className="h-[220px] w-full object-cover"
                            />
                        ) : (
                            <div className="flex h-[220px] items-center justify-center text-zinc-500">
                                🖼️
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Footer */}

            <div className="mt-4 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                    Captured With
                </p>

                <h2 className="text-xl font-bold text-white">
                    PHOTOBOX
                </h2>

                <p className="mt-1 text-xs text-zinc-500">
                    Photobooth Studio 2025
                </p>
            </div>
        </div>
    );
}