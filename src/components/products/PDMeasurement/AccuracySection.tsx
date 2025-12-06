import React from 'react'

const AccuracySection: React.FC = () => {
    return (
        <section className="bg-white  md:py-24">
            <div className="w-[90%] mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left - Text Content */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-600 mb-4">
                                Accurate and reliable PD measurements
                            </h2>
                            <div className="w-20 h-1 bg-teal-600"></div>
                        </div>

                        <div className="space-y-4 text-base md:text-lg text-slate-700 leading-relaxed">
                            <p>
                                Fittingbox's Pupillary Distance Measurement ensures{' '}
                                <strong className="text-teal-600 underline">precise online measurements</strong>.
                            </p>
                            <p>
                                Backed by 5 international patents, this research-based solution guides users to get{' '}
                                <strong className="text-teal-600 underline">accurate results</strong>, through an intuitive{' '}
                                <strong className="text-teal-600 underline">step-by-step protocol, using any card</strong>.
                            </p>
                            <p>
                                This solution guarantees a{' '}
                                <strong className="text-teal-600 underline">proven accuracy of 1 mm</strong> for 7 out of 10 measurements. In 96% of cases, the accuracy is within 2 mm of the actual measurement.
                            </p>
                        </div>
                    </div>

                    {/* Right - Smartphone Mockups */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
                            <img
                                src="/assets/images/2-mock-ups-PD-Measurement-on-Mobile.webp"
                                alt="PD Measurement mobile mockups"
                                className="w-full h-auto object-contain rounded-2xl"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement
                                    target.src = '/assets/images/mobile1.png'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AccuracySection

