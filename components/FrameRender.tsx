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

        case "y2k-chrome":
            return <Y2KChromeFrame photos={photos} />;

        case "scrapbook":
            return <ScrapbookFrame photos={photos} />;

        case "vintage-film":
            return <VintageFilmFrame photos={photos} />;
        case "horizontal-classic":
            return <HorizontalClassicFrame photos={photos} />;
        case "sakura-festival":
            return <SakuraFestivalFrame photos={photos} />;

        default:
            return (
                <div>
                    Frame tidak ditemukan
                </div>
            );
    }
}