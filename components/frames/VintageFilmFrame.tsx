interface Props {
    photos?: string[];
}

export default function VintageFilmFrame({
    photos = [],
}: Props) {
    const today = new Date().toLocaleDateString();

    return (
        <div className="w-[280px] rounded-xl border-4 border-[#5a4634] bg-[#e8dcc6] p-4 shadow-2xl">
            <div className="mb-4 text-center">
                <h2 className="font-mono text-xl font-bold text-[#5a4634]">
                    KODAK FILM
                </h2>
            </div>

            {[0, 1, 2, 3].map((index) => (
                <div
                    key={index}
                    className="mb-3 overflow-hidden rounded-lg border-2 border-[#5a4634]"
                >
                    {photos[index] ? (
                        <img
                            src={photos[index]}
                            alt={`Photo ${index + 1}`}
                            className="h-32 w-full object-cover sepia scale-x-[-1]"
                        />
                    ) : (
                        <div className="flex h-32 items-center justify-center bg-[#d8c7a9] text-[#5a4634]">
                            Photo {index + 1}
                        </div>
                    )}
                </div>
            ))}

            <div className="mt-4 text-center">
                <p className="font-mono text-sm text-[#5a4634]">
                    {today}
                </p>

                <p className="mt-1 font-mono text-xs text-[#5a4634]">
                    Analog Memories
                </p>
            </div>
        </div>
    );
}