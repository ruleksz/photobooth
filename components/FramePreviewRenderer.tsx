import PinkFloralFrame from "./frames/PinkFloralFrame";
import MinimalBlackFrame from "./frames/MinimalBlackFrame";
import BluePartyFrame from "./frames/BluePartyFrame";

interface Props {
    frameId: string;
}

export default function FramePreviewRenderer({
    frameId,
}: Props) {
    switch (frameId) {
        case "pink-floral":
            return <PinkFloralFrame />;

        case "minimal-black":
            return <MinimalBlackFrame />;

        case "blue-party":
            return <BluePartyFrame />;

        default:
            return null;
    }
}