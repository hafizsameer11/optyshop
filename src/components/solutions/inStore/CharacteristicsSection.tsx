import React from 'react'

const CharacteristicsSection: React.FC = () => {
    return (
        <section id="characteristics" className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="w-[90%] mx-auto max-w-7xl">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Left - Text Content */}
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 mb-6 md:mb-8">
                            Main features
                        </h2>

                        <div className="space-y-6 md:space-y-8">
                            <div>
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-orange-500 mb-4 pb-2 border-b-2 border-orange-500 inline-block">
                                    Instant face detection
                                </h3>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                                    Fittingbox Virtual Try-On detects <strong className="text-blue-950 font-bold">instantly</strong> the facial features, adapts them <strong className="text-blue-950 font-bold">automatically</strong> to movements and fits frames to the face in less than <strong className="text-blue-950 font-bold">400 milliseconds</strong>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right - Image */}
                    <div className="order-1 md:order-2">
                        <img
                            src="/assets/images/IMG_1631_M.webp"
                            alt="Woman using virtual try-on on tablet in optical store"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CharacteristicsSection

