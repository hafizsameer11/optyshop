import React from 'react'

const RenderingSection: React.FC = () => {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="w-[90%] mx-auto max-w-7xl">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Left - Text Content */}
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 mb-6 md:mb-8">
                            Realistic rendering and guarantee of dimensions
                        </h2>

                        <div className="space-y-6 md:space-y-8">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Our real-time rendering engine takes realism to new levels, thanks to accurate tracking and attention to frame details. It is capable of managing complex materials and lighting effects to provide ultra-realistic renderings of frames and lenses.
                            </p>

                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Patients can view the appearance of thousands of glasses in real-time, at the exact size, by taking a selfie or uploading an image from their photo gallery.
                            </p>
                        </div>
                    </div>

                    {/* Right - Image */}
                    <div className="order-1 md:order-2">
                        <img
                            src="/assets/images/Instore VTO.webp"
                            alt="Woman using virtual try-on on large monitor in optical store"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RenderingSection

