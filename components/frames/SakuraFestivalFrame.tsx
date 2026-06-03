interface Props {
    photos?: string[];
}

export default function SakuraFestivalFrame({
    photos = [],
}: Props) {
    return (
        <div className="w-[730px] rounded-[32px] border-4 border-pink-200 bg-gradient-to-br from-pink-100 via-rose-50 to-white p-5 shadow-2xl">

            {/* Header */}

            <div className="mb-5 text-center">
                <div className="text-3xl">
                    🌸 🌸 🌸
                </div>

                <h2 className="text-xl font-bold text-pink-600">
                    Sakura Festival
                </h2>

                <p className="text-sm text-pink-400">
                    Spring Memories
                </p>
            </div>

            {/* Photo Row */}

            <div className="grid grid-cols-4 gap-3">
                {[0, 1, 2, 3].map((index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-2xl border-4 border-pink-200 bg-white shadow-md"
                    >
                        {photos[index] ? (
                            <img
                                src={photos[index]}
                                alt={`Photo ${index + 1}`}
                                className="h-[220px] w-full object-cover scale-x-[-1]"
                            />
                        ) : (
                            <div className="flex h-[220px] items-center justify-center bg-pink-50 text-pink-300">
                                🌸
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Footer */}

            <div className="mt-5 text-center">
                <p className="mt-1 text-xs text-pink-300">
                    Photobooth Studio 2025
                </p>
            </div>
        </div>
    );
}