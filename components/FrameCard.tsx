import Link from "next/link";
import FramePreviewRenderer from "./FramePreviewRenderer";

interface Props {
    id: string;
    name: string;
}

export default function FrameCard({
    id,
    name,
}: Props) {
    return (
        <Link href={`/photobooth/${id}`}>
            <div className="cursor-pointer transition hover:scale-105">

                <FramePreviewRenderer
                    frameId={id}
                />

                <h2 className="mt-4 text-center text-lg font-bold">
                    {name}
                </h2>

            </div>
        </Link>
    );
}