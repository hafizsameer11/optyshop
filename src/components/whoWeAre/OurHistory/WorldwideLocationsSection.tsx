import React from 'react'

const WorldwideLocationsSection: React.FC = () => {
    return (
        <>
            {/* Top Gradient Line */}
            <div className="h-1 bg-gradient-to-r from-orange-500 via-cyan-500 to-blue-500"></div>

            <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6" style={{ backgroundColor: '#253C69' }}>
                <div className="w-[90%] mx-auto max-w-7xl">
                    <div className="space-y-8 md:space-y-12">
                        {/* Section Title */}
                        <div className="text-center">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                                Well established worldwide
                            </h2>
                        </div>

                        {/* Map Image */}
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-4xl lg:max-w-5xl">
                                <img
                                    src="/assets/images/Map RH 2.webp"
                                    alt="World map showing Fittingbox locations"
                                    className="w-full h-auto rounded-lg  object-cover"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement
                                        target.style.display = 'none'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Gradient Line */}
            <div className="h-1 bg-gradient-to-r from-orange-500 via-green-500 via-cyan-500 to-purple-500"></div>
        </>
    )
}

export default WorldwideLocationsSection

