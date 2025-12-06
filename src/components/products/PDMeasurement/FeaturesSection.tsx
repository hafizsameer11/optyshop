import React from 'react'

const FeaturesSection: React.FC = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            {/* Header Section */}
            <div className=" py-12 md:py-16">
                <div className="w-[90%] mx-auto max-w-6xl">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center">
                        Discover <strong className="text-blue-950">Pupillary Distance Measurement</strong>, the perfect tool for <strong className="text-blue-950">measuring PD online</strong>.
                    </h2>
                </div>
            </div>

            {/* Features Cards */}
            <div className="w-full bg-slate-100 py-12 md:py-16">
                <div className="w-[90%] mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Left Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
                                Unlock the barriers to online shopping
                            </h3>
                            <div className="space-y-3 text-slate-600 leading-relaxed">
                                <p>
                                    Make calculating pupil distance measurement quick and easy, providing a smooth and accurate experience.
                                </p>
                                <p>
                                    Users can complete their purchase thanks to an easy-to-use solution, which reduces cart abandonment and increases conversion rates.
                                </p>
                            </div>
                        </div>

                        {/* Right Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-green-400 flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12h10" />
                                </svg>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
                                Precise measure to reduce product returns
                            </h3>
                            <div className="space-y-3 text-slate-600 leading-relaxed">
                                <p>
                                    Ensures a proper fit thanks to precise measurements provided by a reliable solution.
                                </p>
                                <p>
                                    Reduce your eyeglass return rate and save yourself and your customers the unnecessary hassle of online shopping.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection

