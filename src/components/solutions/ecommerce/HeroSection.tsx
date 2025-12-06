import React from 'react'

const HeroSection: React.FC = () => {
    return (
        <section
            className="relative min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:h-[70vh] flex items-center pt-20 md:pt-0 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: 'url(/assets/images/solutions-ecommerce2.webp)',
            }}
        >
            <div className="w-[90%] mx-auto h-full">
                <div className="grid lg:grid-cols-[60%_40%] gap-0 h-full">
                    {/* Left - Content */}
                    <div className="relative text-white px-4 sm:px-6 md:px-12 lg:px-16 py-6  sm:py-8 md:py-12 lg:py-16 flex flex-col justify-center h-full">
                        {/* Dark overlay for text readability */}

                        <div className="relative z-10 w-full space-y-4 sm:space-y-6">
                            {/* Main Headline */}
                            <div>
                                <h1 className="text-3xl sm:text-4xl  md:text-5xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight text-white">
                                    Increase your e-commerce sales
                                </h1>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-normal mb-2 sm:mb-3 text-white">
                                    With the virtual glasses try-on
                                </h2>
                                <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-white mt-2"></div>
                            </div>

                            {/* Supporting Text */}
                            <div className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
                                <p>
                                    Increase your eyewear purchase conversion rate with a live, realistic{' '}
                                    <strong className="text-white font-bold">try-on</strong> experience before you buy!
                                </p>
                            </div>

                            {/* Call to Action Button */}
                            <div className="pt-2 sm:pt-4">
                                <button className="px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg bg-white text-blue-950 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                                    Request a demo
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right - Empty space to show background image */}
                    <div className="relative h-full">
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

