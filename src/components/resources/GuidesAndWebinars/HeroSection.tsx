import React from 'react'

const HeroSection: React.FC = () => {
    return (
        <section
            className="relative overflow-hidden pt-20 md:pt-0 bg-cover bg-center bg-no-repeat h-[80vh]"
            style={{
                backgroundImage: 'url(/assets/images/solutions-ecommerce2.webp)',
            }}
        >
            <div className="grid lg:grid-cols-3 gap-0 h-full">
                {/* Left - Content with Dark Overlay (2/3 width) */}
                <div className="lg:col-span-2 relative text-white px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-16 flex flex-col justify-center">
                    {/* Dark overlay for text readability */}


                    <div className="relative z-10 w-full sm:w-[95%] mx-auto max-w-4xl space-y-4 sm:space-y-5 md:space-y-6">
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl lg:pt-5 font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">
                                Guides for eyewear professionals
                            </h1>
                            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3">
                                To help you grow your business online and in-store.
                            </h2>
                            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-white mb-4 sm:mb-5"></div>
                        </div>

                        <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                            <p>
                                Take advantage of our guides and webinars to learn more about <strong className="text-white font-bold">virtual try-ons</strong> and <strong className="text-white font-bold">augmented reality technology</strong>.
                            </p>
                            <p>
                                Here you'll find several key topics related to the eyewear industry, for all your potential needs (ecommerce, in-store, social media, online catalog, etc.).
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-2">
                                <li>
                                    <strong className="text-white font-bold">Practical</strong> guides to accompany your growth
                                </li>
                                <li>
                                    <strong className="text-white font-bold">Webinars</strong> focusing on virtual try-on solutions for eyeglasses
                                </li>
                                <li>
                                    <strong className="text-white font-bold">Articles</strong> dedicated to online and in-store sales
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right - Image visible area (1/3 width) */}
                <div className="lg:col-span-1 relative">
                    {/* Minimal overlay to show image clearly on right side */}
                    <div className="absolute inset-0 bg-gradient-to-l from-blue-950/20 to-transparent"></div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

