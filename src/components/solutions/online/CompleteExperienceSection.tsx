import React from 'react'

const CompleteExperienceSection: React.FC = () => {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="w-[90%] mx-auto max-w-7xl">
                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left Side - Laptop Image */}
                    <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
                        <img
                            src="/assets/images/image8.png"
                            alt="Complete virtual try-on experience on laptop"
                            className="w-full max-w-lg md:max-w-xl lg:max-w-2xl h-auto max-h-[600px] md:max-h-[700px] lg:max-h-[650px] object-contain rounded-lg"
                        />
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950 mb-6">
                                A complete <span className="underline">experience</span>
                            </h2>
                        </div>

                        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                            <p>
                                Improve your game to offer a complete virtual trial experience.
                            </p>
                            <p>
                                Enhance your solution by adding various features, including frame and lens color selection, filters, wishlists, and add-to-cart options, to offer your customers an optimal user experience.
                            </p>
                            <p className="font-semibold text-blue-950">
                                The possibilities are endless!
                            </p>
                        </div>

                        {/* Call to Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="px-8 py-3 bg-blue-950 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors duration-300 shadow-md">
                                Learn more
                            </button>
                            <button className="px-8 py-3 bg-white border-2 border-blue-950 text-blue-950 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300">
                                Request a demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompleteExperienceSection

