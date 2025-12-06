import React from 'react'

const DigitizationSection: React.FC = () => {
    return (
        <section className=" py-16 md:py-24">
            <div className="w-[90%] mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left - Image */}
                    <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                        <div className="w-full max-w-xl lg:max-w-2xl">
                            <img
                                src="/assets/images/3D frame.webp"
                                alt="3D Digitization - Glasses"
                                className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                                onError={(e) => {
                                    // Fallback if image doesn't load
                                    const target = e.target as HTMLImageElement
                                    target.src = '/assets/images/frame1.png'
                                }}
                            />
                        </div>
                    </div>

                    {/* Right - Text Content */}
                    <div className="space-y-6 order-1 lg:order-2">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-700 mb-2">
                                3D digitization
                            </h2>
                            <div className="w-24 h-0.5 bg-amber-700"></div>
                        </div>

                        <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed">
                            <p>
                                Take advantage of our various solutions and services to digitize your 3D glasses, designed for virtual experiences. You can maximize the customer experience, both online and in-store.
                            </p>
                            <p>
                                Depending on your needs and budget, you can get <strong className="text-amber-700 underline">high-definition renderings</strong> with our patented Studiobox 3D or use our online converter for the bulk scanning process.
                            </p>
                        </div>

                        <div className="pt-4">
                            <button className="px-8 py-3 rounded-full border-2 border-amber-700 text-amber-700  font-semibold hover:bg-amber-50 transition-colors duration-300">
                                Discover our digitalization services
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DigitizationSection

