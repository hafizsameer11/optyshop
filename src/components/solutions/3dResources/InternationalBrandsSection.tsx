import React from 'react'

const InternationalBrandsSection: React.FC = () => {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="w-[90%] mx-auto max-w-7xl">
                {/* Main Heading */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16 text-blue-950">
                    A reliable solution for an ultra-realistic 3D version of any type of frame
                </h2>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left Side - Text Content */}
                    <div className="space-y-6 md:space-y-8">
                        {/* Section Title */}
                        <div>
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-amber-700 mb-6">
                                International brands and extensive <span className="underline">collections</span>
                            </h3>
                        </div>

                        {/* Paragraphs */}
                        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                            <p>
                                With the maximum capacity to digitize large volumes of frames, Fittingbox 3D Studio produces up to 4,000 frames per month with <strong className="font-semibold">consistent quality</strong>.
                            </p>
                            <p>
                                Over 195,000 frames from over 1,200 brands are already available <strong className="font-semibold underline">in the Fittingbox database</strong>. New frames from leading international brands are constantly being digitized.
                            </p>
                            <p>
                                You can choose to access the database of digitized frames and digitize frames that are not yet available at an affordable price.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        <img
                            src="/assets/images/Glasses-two-metal.webp"
                            alt="Two pairs of metal glasses"
                            className="w-full max-w-lg h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InternationalBrandsSection

