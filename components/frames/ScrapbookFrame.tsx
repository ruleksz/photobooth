interface Props {
    photos?: string[];
}

export default function ScrapbookFrame({
    photos = [],
}: Props) {
    return (
        <div className="w-[300px] rounded-3xl bg-[#f8f2e7] p-5 shadow-2xl">
            <div className="mb-4 text-center">
                <h2 className="text-2xl font-bold text-amber-900">
                    My Memories 🌷
                </h2>
            </div>

            {[0, 1, 2, 3].map((index) => (
                <div
                    key={index}
                    className="relative mb-3 rounded-xl bg-white p-2 shadow-lg"
                >
                    {index === 0 && (
                        <div className="absolute left-1/2 top-0 h-6 w-20 -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] bg-yellow-100 opacity-80" />
                    )}

                    {photos[index] ? (
                        <img
                            src={photos[index]}
                            alt={`Photo ${index + 1}`}
                            className="h-32 w-full rounded-lg object-cover scale-x-[-1]"
                        />
                    ) : (
                        <div className="flex h-32 items-center justify-center rounded-lg bg-zinc-100 text-zinc-400">
                            Photo {index + 1}
                        </div>
                    )}
                </div>
            ))}

            <div className="mt-4 text-center">
                <p className="text-lg font-semibold text-amber-800">
                    Today was fun 💕
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                    Keep this moment forever
                </p>
            </div>
        </div>
    );
}