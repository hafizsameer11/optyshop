import React from 'react'

const HeroSection: React.FC = () => {
    return (
        <section
            className="relative overflow-hidden pt-20 md:pt-0 bg-cover bg-center bg-no-repeat h-[80vh]"
            style={{
                backgroundImage: 'url(/assets/images/case-studies_header_ok.webp)',
            }}
        >
            <div className="grid lg:grid-cols-3 gap-0 h-full">
                {/* Left - Content with Dark Overlay (2/3 width) */}
                <div className="lg:col-span-2 relative text-white px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-16 flex flex-col justify-center">
                    {/* Dark overlay for text readability */}
                   

                    <div className="relative z-10 w-full sm:w-[95%] mx-auto max-w-4xl space-y-4 sm:space-y-5 md:space-y-6">
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">
                                Case studies and testimonials
                            </h1>
                            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3">
                                Find out what the leaders in the optical sector are{' '}
                                <span className="relative inline-block">
                                    saying
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-white"></span>
                                </span>
                            </h2>
                        </div>

                        <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                            <p>
                                Learn how to successfully use Fittingbox's virtual try-on by exploring <strong className="text-white font-bold">case studies</strong> and <strong className="text-white font-bold">testimonials</strong> from eyewear professionals.
                            </p>
                            <p>
                                You can discover and <strong className="text-white font-bold">download for free</strong>:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-2">
                                <li>The <strong className="text-white font-bold">results</strong> achieved by some of our clients.</li>
                                <li><strong className="text-white font-bold">Feedback and reflections</strong> after the implementation of our solutions.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right - Image visible area (1/3 width) */}
                <div className="lg:col-span-1 relative">
                    {/* Minimal overlay to show image clearly on right side */}
                    <div className="absolute inset-0 bg-gradient-to-l from-blue-950/20 to-transparent"></div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

