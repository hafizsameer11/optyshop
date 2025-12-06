import React, { useEffect, useRef, useState } from 'react'
import { FaceMesh, type Results } from '@mediapipe/face_mesh'
import { Camera } from '@mediapipe/camera_utils'

type VirtualTryOnModalProps = {
    open: boolean
    onClose: () => void
}

const frameImages = [
    new URL('/assets/images/frame1.png', import.meta.url).href,
    new URL('/assets/images/frame2.png', import.meta.url).href,
    new URL('/assets/images/frame3.png', import.meta.url).href,
    new URL('/assets/images/frame4.png', import.meta.url).href,
]

const VirtualTryOnModal: React.FC<VirtualTryOnModalProps> = ({ open, onClose }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const [selectedFrame, setSelectedFrame] = useState(frameImages[0])

    // Store the currently loaded frame image for drawing on the canvas
    const frameImageRef = useRef<HTMLImageElement | null>(null)

    useEffect(() => {
        const img = new Image()
        img.src = selectedFrame
        img.onload = () => {
            frameImageRef.current = img
        }
    }, [selectedFrame])

    useEffect(() => {
        if (!open) return

        if (!videoRef.current) return

        let camera: Camera | null = null
        let faceMesh: FaceMesh | null = null

        const onResults = (results: Results) => {
            const canvas = canvasRef.current
            const video = videoRef.current
            const frameImg = frameImageRef.current

            if (!canvas || !video || !results.multiFaceLandmarks?.length || !frameImg) return

            const ctx = canvas.getContext('2d')
            if (!ctx) return

            const width = canvas.width
            const height = canvas.height

            ctx.clearRect(0, 0, width, height)

            const landmarks = results.multiFaceLandmarks[0]

            // Use eye corners to position the glasses
            const leftEye = landmarks[33] // left eye outer corner
            const rightEye = landmarks[263] // right eye outer corner
            const nose = landmarks[1]

            if (!leftEye || !rightEye || !nose) return

            const lx = leftEye.x * width
            const ly = leftEye.y * height
            const rx = rightEye.x * width
            const ry = rightEye.y * height
            const ny = nose.y * height

            const eyeCenterX = (lx + rx) / 2
            const eyeCenterY = (ly + ry) / 2

            const dx = rx - lx
            const dy = ry - ly
            const eyeDistance = Math.sqrt(dx * dx + dy * dy)

            // Basic sizing and rotation for the frame
            const glassesWidth = eyeDistance * 1.9
            const glassesHeight = (frameImg.height / frameImg.width) * glassesWidth

            const angle = Math.atan2(dy, dx)

            ctx.save()
            ctx.translate(eyeCenterX, (eyeCenterY + ny) / 2)
            ctx.rotate(angle)
            ctx.drawImage(
                frameImg,
                -glassesWidth / 2,
                -glassesHeight / 2,
                glassesWidth,
                glassesHeight
            )
            ctx.restore()
        }

        const setup = async () => {
            const video = videoRef.current
            const canvas = canvasRef.current
            if (!video || !canvas) return

            // Match canvas size to the rendered video size
            const resizeCanvas = () => {
                const rect = video.getBoundingClientRect()
                canvas.width = rect.width * window.devicePixelRatio
                canvas.height = rect.height * window.devicePixelRatio
            }

            resizeCanvas()
            window.addEventListener('resize', resizeCanvas)

            faceMesh = new FaceMesh({
                locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
            })

            faceMesh.setOptions({
                maxNumFaces: 1,
                refineLandmarks: true,
                minDetectionConfidence: 0.6,
                minTrackingConfidence: 0.6,
            })

            faceMesh.onResults(onResults)

            camera = new Camera(video, {
                onFrame: async () => {
                    if (faceMesh && video.videoWidth > 0 && video.videoHeight > 0) {
                        await faceMesh.send({ image: video })
                    }
                },
                width: 640,
                height: 480,
            })

            await camera.start()
        }

        setup().catch((err) => {
            console.error('Error initializing virtual try-on', err)
        })

        return () => {
            if (camera) {
                camera.stop()
            }
            if (faceMesh) {
                faceMesh.close()
            }
        }
    }, [open])

    if (!open) return null

    return (
        <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-slate-950/95 w-[90%] max-w-6xl h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
                    <h2 className="text-white font-semibold text-lg">Virtual try-on</h2>
                    <button
                        onClick={onClose}
                        className="h-8 w-8 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10"
                    >
                        ✕
                    </button>
                </div>

                <div className="flex flex-1 overflow-hidden">
                    {/* Left: camera + bottom strip */}
                    <div className="relative flex-1 bg-black/80 flex flex-col">
                        <div className="flex-1 relative">
                            {/* Video feed */}
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover"
                                muted
                                autoPlay
                                playsInline
                            />
                            {/* Canvas overlay for frames */}
                            <canvas
                                ref={canvasRef}
                                className="pointer-events-none absolute inset-0 w-full h-full"
                            />
                        </div>

                        {/* Bottom strip of frames */}
                        <div className="bg-slate-900/90 py-3 px-4 flex items-center justify-center gap-3 overflow-x-auto">
                            {frameImages.map((src) => (
                                <button
                                    key={src}
                                    type="button"
                                    onClick={() => setSelectedFrame(src)}
                                    className={`h-14 w-20 rounded-2xl border ${selectedFrame === src ? 'border-blue-500 ring-2 ring-blue-500/60' : 'border-slate-700'
                                        } overflow-hidden bg-slate-800`}
                                >
                                    <img src={src} alt="Frame option" className="h-full w-full object-contain" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: vertical list of frames */}
                    <div className="w-64 bg-slate-900/95 border-l border-slate-800 hidden sm:flex flex-col">
                        <div className="px-4 py-3 border-b border-slate-800">
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Frames</p>
                        </div>
                        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
                            {frameImages.map((src) => (
                                <button
                                    key={src}
                                    type="button"
                                    onClick={() => setSelectedFrame(src)}
                                    className={`flex items-center gap-3 w-full rounded-2xl px-2 py-2 border ${selectedFrame === src ? 'border-blue-500 bg-blue-500/10' : 'border-slate-700 bg-slate-900'
                                        }`}
                                >
                                    <div className="h-10 w-16 rounded-xl overflow-hidden bg-slate-800">
                                        <img src={src} alt="Frame option" className="h-full w-full object-contain" />
                                    </div>
                                    <span className="text-sm text-slate-100">Frame</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VirtualTryOnModal


