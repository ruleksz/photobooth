interface Props {
    photos?: string[];
}

export default function BluePartyFrame({
    photos = [],
}: Props) {
    return (
        <div className="w-[260px] rounded-[32px] bg-gradient-to-b from-sky-400 via-blue-500 to-indigo-600 p-4 shadow-2xl">

            {/* Header */}

            <div className="mb-4 text-center">
                <div className="text-3xl">🎉🎈🎊</div>

                <h2 className="text-2xl font-bold text-white">
                    BLUE PARTY
                </h2>

                <p className="text-xs tracking-widest text-blue-100">
                    LET'S CELEBRATE
                </p>
            </div>

            {/* Photo Slots */}

            {[0, 1, 2, 3].map((index) => (
                <div
                    key={index}
                    className="mb-3 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-md"
                >
                    {photos[index] ? (
                        <img
                            src={photos[index]}
                            alt={`Photo ${index + 1}`}
                            className="h-32 w-full object-cover scale-x-[-1]"
                        />
                    ) : (
                        <div className="flex h-32 items-center justify-center bg-gradient-to-r from-sky-50 to-blue-100 text-sm font-medium text-blue-500">
                            📸 Photo {index + 1}
                        </div>
                    )}
                </div>
            ))}

            {/* Footer */}

            <div className="mt-4 rounded-xl bg-white/20 p-3 text-center backdrop-blur-sm">
                <p className="font-bold text-white">
                    PARTY TIME ✨
                </p>

                <p className="text-xs text-blue-100">
                    Make Memories Together
                </p>
            </div>
        </div>
    );
}