import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection: React.FC = () => {
    return (
        <section
            className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: 'url(/assets/images/Banner-join-us-tewt-2.webp)',
                backgroundColor: '#253C69' // Fallback color
            }}
        >
            {/* Dark blue gradient overlay from left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#253C69] via-[#253C69]/80 to-transparent"></div>

            <div className="relative grid lg:grid-cols-5 gap-0">
                {/* Left Side - Text Content (60%) */}
                <div className="lg:col-span-3 relative text-white px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 flex flex-col justify-center z-10">
                    <div className="space-y-4 md:space-y-6">
                        {/* Main Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Join our team
                        </h1>

                        {/* Sub-heading */}
                        <div className="space-y-3 md:space-y-4">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-normal">
                                Discover our culture and latest job offers
                            </h2>
                            <div className="w-16 sm:w-20 md:w-24 h-0.5 md:h-1 bg-white"></div>
                        </div>

                        {/* Body Text */}
                        <div className="space-y-2 md:space-y-3 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                            <p>
                                Want to help create tomorrow's technology as part of a <strong className="text-white font-bold">passionate team</strong> ?
                            </p>
                            <p>Then you're in the right place!</p>
                        </div>

                        {/* Call-to-Action Button */}
                        <div className="pt-4 md:pt-6">
                            <Link
                                to="/job-opportunities"
                                className="inline-block px-6 md:px-8 py-3 md:py-4 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm md:text-base"
                            >
                                See our job opportunities
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gradient Line at Bottom */}
            <div className="relative h-1 bg-gradient-to-r from-orange-500 via-green-500 to-purple-500 z-10"></div>
        </section>
    )
}

export default HeroSection

