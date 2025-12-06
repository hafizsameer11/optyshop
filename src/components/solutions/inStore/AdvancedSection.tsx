import React from 'react'

const AdvancedSection: React.FC = () => {
    return (
        <section className="bg-stone-50 py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="w-[90%] mx-auto max-w-4xl">
                <div className="text-center space-y-6 md:space-y-8">
                    {/* Main Title */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold leading-tight">
                        <span className="text-blue-950">Virtual try-on </span>
                        <span className="text-blue-900 font-extrabold">Advanced</span>
                        <span className="text-blue-950"> for Instore</span>
                    </h2>

                    {/* Subheading */}
                    <h3 className="text-xl lg:text-2xl sm:text-2xl md:text-3xl font-bold text-blue-950 leading-relaxed">
                        Take the longest step with a tailor-made virtual try-on for your store.
                    </h3>

                    {/* Paragraph */}
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        Ensure that your customers immerse themselves in your brand&apos;s universe by completely customizing your virtual try-on solution and making virtual try-on technology your personal solution.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AdvancedSection

