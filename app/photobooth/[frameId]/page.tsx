import { frames } from "@/lib/frames";
import CameraPage from "@/components/CameraPage";

export default async function Page({
    params,
}: {
    params: Promise<{ frameId: string }>;
}) {
    const { frameId } = await params;

    const frame = frames.find(
        (item) => item.id === frameId
    );

    if (!frame) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                Frame tidak ditemukan
            </div>
        );
    }

    return (
        <CameraPage
            frameId={frame.id}
        />
    );
}