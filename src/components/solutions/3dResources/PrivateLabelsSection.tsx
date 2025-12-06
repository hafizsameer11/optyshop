import React from 'react'

const PrivateLabelsSection: React.FC = () => {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="w-[90%] mx-auto max-w-7xl">
                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left Side - Image */}
                    <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
                        <img
                            src="/assets/images/Glasses_pink_M-1.webp"
                            alt="Pink designer glasses"
                            className="w-full max-w-lg md:max-w-xl lg:max-w-2xl h-auto rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
                        {/* Section Title */}
                        <div>
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">
                                <span className="text-amber-700">Private labels</span>{' '}
                                <span className="text-gray-400">and designer</span>{' '}
                                <span className="text-amber-700 underline">collections</span>.
                            </h3>
                        </div>

                        {/* Paragraphs */}
                        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                            <p>
                                3D Studio adapts to your business to <strong className="font-semibold">meet all your needs.</strong>
                            </p>
                            <p>
                                From photo packshots that accompany 3D digitization to multi-material frames, Fittingbox ensures you get 3D renderings that are true to life.
                            </p>
                            <p>
                                We make sure to pay special attention to your unique designs to create a 3D frame that is as close to the real thing as possible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PrivateLabelsSection

