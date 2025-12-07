import React from 'react'
import { Link } from 'react-router-dom'

const JoinAdventureSection: React.FC = () => {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="w-[90%] mx-auto max-w-7xl">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                    <div className="grid lg:grid-cols-2 gap-0">
                        {/* Left Section - Photo */}
                        <div className="relative h-64 sm:h-80 md:h-96 lg:h-auto lg:min-h-[400px]">
                            <img
                                src="/assets/images/Fittingbox-2000-24 (1).webp"
                                alt="Fittingbox team members working together"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement
                                    target.style.display = 'none'
                                }}
                            />
                        </div>

                        {/* Right Section - Text and Button */}
                        <div className="bg-[#253C69] px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 flex flex-col justify-center">
                            <div className="space-y-6 md:space-y-8">
                                {/* Main Text */}
                                <div>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 md:mb-4">
                                        Want to join the Fittingbox{' '}
                                        <span className="border-b-2 border-white pb-1">adventure?</span>
                                    </h2>
                                </div>

                                {/* Call-to-Action Button */}
                                <div className="pt-2 md:pt-4">
                                    <Link
                                        to="/job-opportunities"
                                        className="inline-block px-6 md:px-8 py-3 md:py-4 rounded-lg bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors duration-300 text-sm md:text-base"
                                    >
                                        See our open positions
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JoinAdventureSection

