import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection: React.FC = () => {
    return (
        <section
            className="relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex items-center pt-20 md:pt-0 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: 'url(/assets/images/[FBx]-slider-banner-template-3d-viewer-ok.webp)',
            }}
        >
            <div className="w-full">
                <div className="grid lg:grid-cols-2 gap-0">
                    {/* Left - Content */}
                    <div className="relative text-white px-4 sm:px-6 md:px-12 lg:px-16 py-6 sm:py-8 md:py-12 lg:py-16 flex flex-col justify-center">
                        {/* Dark overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
                        <div className="relative z-10 w-full sm:w-[95%] mx-auto max-w-4xl space-y-6 sm:space-y-8">
                            <div>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl lg:pt-15 font-bold mb-4 sm:mb-6 leading-tight text-white">
                                    Get your 3D glasses{' '}
                                    <span className="relative">
                                        digitized
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
                                    </span>
                                </h1>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-normal mb-3 text-white">
                                    Transform your frame catalog into ultra-realistic 3D assets
                                </h2>
                                <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-white mt-2"></div>
                            </div>

                            <div className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
                                <p>
                                    Transform your frame catalog into{' '}
                                    <strong className="text-white font-bold">ultra-realistic 3D assets</strong> designed for virtual experiences. From virtual try-ons to social media filters, your glasses or sunglasses are transformed into 3D frames in the most realistic and efficient way.
                                </p>
                            </div>

                            <div className="pt-4 sm:pt-6">
                                <Link
                                    to="/pricing-request"
                                    className="inline-block px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                                >
                                    Request prices
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right - Empty space to show background image */}
                    <div className="relative min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-full">
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

