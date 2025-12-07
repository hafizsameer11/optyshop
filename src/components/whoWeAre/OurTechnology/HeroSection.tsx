import React from 'react'

const HeroSection: React.FC = () => {
    return (
        <section
            className="relative h-[80vh] overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: 'url(/assets/images/graz-mesh-2800.webp)',
                backgroundColor: '#253C69'
            }}
        >
            {/* Dark blue gradient overlay from left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#253C69] via-[#253C69]/90 to-transparent"></div>

            <div className="relative h-full grid lg:grid-cols-3 gap-0">
                {/* Left - Content (2/3 width) */}
                <div className="lg:col-span-2 relative text-white px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 flex flex-col justify-center z-10">
                    <div className="relative z-10 w-full max-w-2xl space-y-4 md:space-y-6">
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                                Our experience in RA and 3D returns
                            </h1>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-normal mb-3 md:mb-4">
                                Find out what's behind the technology behind our glasses
                            </h2>
                            <div className="w-16 sm:w-20 md:w-24 h-0.5 md:h-1 bg-white mb-4 md:mb-6"></div>
                        </div>

                        <div className="space-y-3 md:space-y-4 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                            <p>
                                Since 2006, Fittingbox has <strong className="text-white font-bold">pioneered</strong> digital eyewear through its mastery of augmented reality, artificial intelligence, machine learning, computer vision, and computer graphics.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right - Empty space to show background image */}
                <div className="lg:col-span-1 relative"></div>
            </div>
        </section>
    )
}

export default HeroSection

