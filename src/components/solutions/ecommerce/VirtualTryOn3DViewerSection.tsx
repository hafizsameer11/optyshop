import React from 'react'

const VirtualTryOn3DViewerSection: React.FC = () => {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="w-[90%] mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left Side - Text Content */}
                    <div className="order-2 lg:order-1 space-y-6 md:space-y-8">
                        {/* Main Headline */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 leading-tight">
                                Virtual Try-On and 3D Viewer: A Great Help in Choosing the Right{' '}
                                <span className="underline decoration-2 underline-offset-4">Frame</span>
                            </h2>
                        </div>

                        {/* Statistics and Benefits */}
                        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                            <p>
                                <strong className="text-blue-950">81%</strong> of online eyeglass users found the virtual try-on combined with the 3D Viewer useful for choosing the right frame.
                            </p>
                            <p>
                                The impact is even more pronounced among those who are ready to buy online, with <strong className="text-blue-950">88%</strong> finding it useful, rising to <strong className="text-blue-950">92%</strong> in the United States.
                            </p>
                            <p>
                                These data reinforce the idea that the combination of 3D Viewer and Virtual Try-On is a powerful tool for eyewear retailers.
                            </p>
                        </div>

                        {/* Call to Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="px-8 md:px-12 py-3 md:py-4 border border-blue-950 text-blue-950 font-semibold rounded-full hover:bg-blue-50 transition-colors duration-300 text-base md:text-lg bg-white">
                                Learn more
                            </button>
                            <button className="px-8 md:px-12 py-3 md:py-4 bg-blue-950 text-white font-semibold rounded-full hover:bg-blue-900 transition-colors duration-300 text-base md:text-lg">
                                Discover the 3D Viewer
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Smartphone Image */}
                    <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                        <div className="relative w-[280px] sm:w-[320px] md:w-[360px]">
                            <img
                                src="/assets/images/mobile1.png"
                                alt="Virtual Try-On and 3D Viewer on smartphone"
                                className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement
                                    target.src = '/assets/images/image3.png'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VirtualTryOn3DViewerSection

