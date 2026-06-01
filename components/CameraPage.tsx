"use client";

import React, {
    useEffect,
    useRef,
    useState,
} from "react";
import FrameRenderer from "./FrameRender";
import { toPng } from "html-to-image";

interface CameraPageProps {
    frameId: string;
}

export default function CameraPage({
    frameId,
}: CameraPageProps) {
    const frameRef = useRef<HTMLDivElement>(null);
    const [photos, setPhotos] = useState<string[]>([]);
    const [countdown, setCountdown] = useState<number | null>(null);
    const [isCapturing, setIsCapturing] = useState(false);

    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        startCamera();
    }, []);

    const startCamera = async () => {
        try {
            const stream =
                await navigator.mediaDevices.getUserMedia({
                    video: {
                        facingMode: "user",
                    },
                    audio: false,
                });

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (err) {
            console.error(err);
        }
    };

    const capturePhoto = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;

        if (!video || !canvas) return;

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        ctx.drawImage(
            video,
            0,
            0,
            canvas.width,
            canvas.height
        );

        const image =
            canvas.toDataURL("image/png");

        setPhotos((prev) => [...prev, image]);
    };

    const runCountdown = () => {
        return new Promise<void>((resolve) => {
            let count = 3;

            setCountdown(count);

            const timer = setInterval(() => {
                count--;

                if (count === 0) {
                    clearInterval(timer);

                    setCountdown(null);

                    resolve();
                } else {
                    setCountdown(count);
                }
            }, 1000);
        });
    };

    const startSession = async () => {
        if (isCapturing) return;

        setIsCapturing(true);

        setPhotos([]);

        for (let i = 0; i < 4; i++) {
            await runCountdown();

            capturePhoto();

            await new Promise((resolve) =>
                setTimeout(resolve, 800)
            );
        }

        setIsCapturing(false);
    };

    const downloadPhotostrip = async () => {
        if (!frameRef.current) return;

        try {
            const dataUrl = await toPng(
                frameRef.current,
                {
                    cacheBust: true,
                    pixelRatio: 3,
                }
            );

            const link =
                document.createElement("a");

            link.download =
                `${frameId}-photostrip.png`;

            link.href = dataUrl;

            link.click();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="w-full lg:flex flex flex-col min-h-screen items-center justify-center gap-12 p-10 bg-teal-200">
            {/* Preview Frame */}

            <div className="flex flex-col items-center gap-4">
                <div className="flex lg:h-[500px] lg:w-[400px] h-[500px] w-[350px] items-center justify-center rounded-2xl border-2 border-dashed">
                    <div className="relative">
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted
                            className="lg:h-[500px] lg:w-[400px] h-[500px] w-[350px] rounded-2xl object-cover scale-x-[-1]"
                        />

                        {countdown && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                <span className="text-8xl font-bold text-white">
                                    {countdown}
                                </span>
                            </div>
                        )}
                    </div>

                    <canvas
                        ref={canvasRef}
                        className="hidden"
                    />
                </div>

                <button
                    onClick={startSession}
                    disabled={isCapturing}
                    className="rounded-xl bg-black px-6 py-3 text-white disabled:opacity-50"
                >
                    {isCapturing
                        ? "Capturing..."
                        : "Start Session"}
                </button>

            </div>
            <div ref={frameRef}>
                <FrameRenderer
                    frameId={frameId}
                    photos={photos}
                />
            </div>
            <button
                onClick={downloadPhotostrip}
                disabled={photos.length === 0}
                className="rounded-xl bg-green-600 px-6 py-3 text-white disabled:opacity-50"
            >
                Download Photostrip
            </button>
        </div>
    );
}