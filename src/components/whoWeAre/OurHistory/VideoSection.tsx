import React from 'react'

const VideoSection: React.FC = () => {
    // Replace with your YouTube video ID
    const youtubeVideoId = 'dQw4w9WgXcQ' // Example video ID - replace with actual video

    return (
        <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="w-[90%] mx-auto max-w-7xl">
                <div className="space-y-8 md:space-y-12">
                    {/* Heading */}
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                            The pioneers who paved the way for world premieres.
                        </h2>
                    </div>

                    {/* Video Player */}
                    <div className="flex justify-center">
                        <div className="relative w-full max-w-6xl" style={{ paddingBottom: '40%' }}>
                            <iframe
                                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                                title="Fittingbox Pioneers Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoSection

