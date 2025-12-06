import React from 'react'

const OmnichannelSection: React.FC = () => {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="w-[90%] mx-auto max-w-7xl">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Left - Image */}
                    <div className="order-2 md:order-1">
                        <img
                            src="/assets/images/Instore Frame Selection.webp"
                            alt="Omnichannel virtual try-on experience with large screen and smartphone"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right - Text Content */}
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 mb-6 md:mb-8">
                            Omnichannel capability
                        </h2>

                        <div className="space-y-6 md:space-y-8">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                A single platform for a multi-device experience. Fittingbox Virtual Try-On is compatible with most systems and devices used, including:
                            </p>

                            <ul className="space-y-3 md:space-y-4">
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-3 mt-1 text-xl font-bold">•</span>
                                    <span className="text-base md:text-lg text-gray-700">Laptop/PC and tablet</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-3 mt-1 text-xl font-bold">•</span>
                                    <span className="text-base md:text-lg text-gray-700">Chrome, Firefox, Edge and Safari</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OmnichannelSection

