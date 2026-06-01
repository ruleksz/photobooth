import Link from "next/link";
import Image from "next/image";

interface TemplateCardProps {
    id: string;
    name: string;
    image: string;
}

export default function TemplateCard({
    id,
    name,
    image,
}: TemplateCardProps) {
    return (
        <Link href={`/photobooth/${id}`}>
            <div className="overflow-hidden rounded-xl border hover:shadow-lg transition cursor-pointer">
                <Image
                    src={image}
                    alt={name}
                    width={400}
                    height={600}
                    className="w-full h-auto"
                />

                <div className="p-4">
                    <h2 className="text-center font-semibold">
                        {name}
                    </h2>
                </div>
            </div>
        </Link>
    );
}