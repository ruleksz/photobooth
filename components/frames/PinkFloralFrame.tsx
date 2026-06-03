interface PinkFloralFrameProps {
    photos?: string[];
}

export default function PinkFloralFrame({
    photos = [],
}: PinkFloralFrameProps) {
    return (
        <div className="w-[280px] rounded-3xl border-4 border-pink-300 bg-pink-100 p-4 shadow-xl">
            {/* Header */}

            <div className="mb-4 text-center">
                <h2 className="text-xl font-bold text-pink-700">
                    🌸 Pink Floral 🌸
                </h2>

                <p className="text-sm text-pink-500">
                    Photobooth Memories
                </p>
            </div>

            {/* Slot Foto */}

            {[0, 1, 2, 3].map((index) => (
                <div
                    key={index}
                    className="mb-3 h-40 overflow-hidden rounded-xl border-2 border-pink-200 bg-white"
                >
                    {photos[index] ? (
                        <img
                            src={photos[index]}
                            alt={`Photo ${index + 1}`}
                            className="h-full w-full object-cover scale-x-[-1]"
                        />
                    ) : (
                        <div className="flex h-full items-center justify-center text-sm text-gray-400">
                            Photo Slot {index + 1}
                        </div>
                    )}
                </div>
            ))}

            {/* Footer */}

            <div className="mt-4 text-center">
                <p className="text-sm font-medium text-pink-600">
                    Made with ❤️
                </p>

                <p className="text-xs text-pink-500">
                    Photobooth 2025
                </p>
            </div>
        </div>
    );
}