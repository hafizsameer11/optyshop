import React, { useState } from 'react'

const VideoSection: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlay = () => {
        setIsPlaying(true)
    }

    return (
        <section id="video" className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="w-[90%] mx-auto max-w-7xl">
                {/* Heading */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 leading-tight">
                        Discover our <strong className="text-blue-950 font-bold">virtual try-on solution</strong> for <strong className="text-blue-950 font-bold">optics stores</strong>.
                    </h2>
                </div>

                {/* Video Player */}
                <div className="relative w-full max-w-5xl mx-auto">
                    <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                        {!isPlaying ? (
                            <>
                                {/* Video Thumbnail/Placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <div className="text-sm md:text-base mb-2 opacity-75">Video Preview</div>
                                        <div className="text-xs md:text-sm opacity-50">Click play to watch the video</div>
                                    </div>
                                </div>

                                {/* Play Button Overlay */}
                                <button
                                    onClick={handlePlay}
                                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors duration-300 cursor-pointer group"
                                >
                                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-blue-600/90 hover:bg-blue-600 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                                        <svg
                                            className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </button>
                            </>
                        ) : (
                            /* Video Player - Replace with actual video URL/embed */
                            <div className="w-full h-full flex items-center justify-center bg-black">
                                <div className="text-white text-center">
                                    <p className="text-lg mb-4">Video Player</p>
                                    <p className="text-sm opacity-75">Replace this with your video embed code</p>
                                    {/* Example: <iframe src="YOUR_VIDEO_URL" className="w-full h-full" allowFullScreen></iframe> */}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoSection

