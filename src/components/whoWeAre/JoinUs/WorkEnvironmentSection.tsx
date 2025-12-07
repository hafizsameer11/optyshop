import React from 'react'

const WorkEnvironmentSection: React.FC = () => {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="w-[90%] mx-auto max-w-7xl">
                <div className="space-y-8 md:space-y-12">
                    {/* Main Heading */}
                    <div className="text-center space-y-4">
                        <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-blue-950 leading-tight max-w-4xl mx-auto">
                            We are committed to ensuring that <strong className="text-blue-950 font-bold">every member of our team can grow</strong>, both professionally and personally.
                        </h2>
                        <p className="text-lg md:text-xl text-gray-700">
                            Here are some examples of the benefits you can expect from working with us:
                        </p>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
                        {/* Left - Text Content */}
                        <div className="space-y-6 md:space-y-8">
                            <div>
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950 mb-4 md:mb-6">
                                    <span className="underline">A dedicated</span> <strong className="text-blue-950 font-bold">work environment</strong>
                                </h3>
                            </div>

                            <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                                <p>
                                    Since December 2020, we are on the 3rd floor of a <strong className="text-gray-900 font-bold">brand new building</strong>!
                                </p>

                                <p>Our space offers:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>flexible office on 70% of our floor</li>
                                    <li>equipped meeting rooms</li>
                                    <li>soundproof rooms for a quick phone call or meeting.</li>
                                </ul>

                                <p>
                                    In addition to our break room, there is a <strong className="text-gray-900 font-bold">dining hall</strong> on the 5th floor with plenty of space for heating or storing meals.
                                </p>

                                <p>
                                    On sunny days you can also enjoy the terrace overlooking the Pyrenees!
                                </p>
                            </div>
                        </div>

                        {/* Right - Image */}
                        <div className="flex justify-center lg:justify-end order-first lg:order-last">
                            <div className="relative w-full max-w-lg lg:max-w-xl">
                                <img
                                    src="/assets/images/[FBx]ImageText--loc.webp"
                                    alt="Fittingbox office meeting room"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement
                                        target.style.display = 'none'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkEnvironmentSection

