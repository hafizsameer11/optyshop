import React from 'react'

const HeroSection: React.FC = () => {
    return (
        <section
            className="relative h-[80vh] overflow-hidden bg-blue-950 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: 'url(/assets/images/About-us-team-2022-neutral-slider-banner2-1.webp)',
            }}
        >
            {/* Dark blue gradient overlay from left */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/70 to-transparent"></div>

            <div className="relative h-full grid lg:grid-cols-2 gap-0">
                {/* Left - Content */}
                <div className="relative text-white px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 flex flex-col justify-center z-10">
                    <div className="relative z-10 w-full max-w-2xl space-y-4 md:space-y-6">
                        <div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                                About Fittingbox
                            </h1>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
                                Let's get to know each other!
                            </h2>
                            <div className="w-16 sm:w-20 md:w-24 h-0.5 md:h-1 bg-white mb-4 md:mb-6"></div>
                        </div>

                        <div className="space-y-3 md:space-y-4 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                            <p>
                                Since 2006, Fittingbox, the Digital Eyewear Company, has established itself as the world leader in Virtual Try-On and digital eyewear.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right - Empty space to show background image */}
                <div className="relative lg:col-span-1"></div>
            </div>
        </section>
    )
}

export default HeroSection

