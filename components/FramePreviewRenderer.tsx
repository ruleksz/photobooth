import PinkFloralFrame from "./frames/PinkFloralFrame";
import MinimalBlackFrame from "./frames/MinimalBlackFrame";
import BluePartyFrame from "./frames/BluePartyFrame";
import Y2KChromeFrame from "./frames/Y2KChromeFrame";
import ScrapbookFrame from "./frames/ScrapbookFrame";
import VintageFilmFrame from "./frames/VintageFilmFrame";
import HorizontalClassicFrame from "./frames/HorizontalClassicFrame";
import SakuraFestivalFrame from "./frames/SakuraFestivalFrame";

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
        case "y2k-chrome":
            return <Y2KChromeFrame />;
        case "scrapbook":
            return <ScrapbookFrame />;
        case "vintage-film":
            return <VintageFilmFrame />;
        case "horizontal-classic":
            return <HorizontalClassicFrame />;
        case "sakura-festival":
            return <SakuraFestivalFrame />;

        default:
            return null;
    }
}