import PinkFloralFrame from "./frames/PinkFloralFrame";
import MinimalBlackFrame from "./frames/MinimalBlackFrame";
import BluePartyFrame from "./frames/BluePartyFrame";

interface Props {
    frameId: string;
    photos?: string[];
}

export default function FrameRenderer({
    frameId,
    photos,
}: Props) {
    switch (frameId) {
        case "pink-floral":
            return (
                <PinkFloralFrame
                    photos={photos}
                />
            );

        case "minimal-black":
            return (
                <MinimalBlackFrame
                    photos={photos}
                />
            );

        case "blue-party":
            return (
                <BluePartyFrame
                    photos={photos}
                />
            );

        default:
            return (
                <div>
                    Frame tidak ditemukan
                </div>
            );
    }
}