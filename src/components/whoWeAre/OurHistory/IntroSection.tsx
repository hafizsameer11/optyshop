import React from 'react'

const IntroSection: React.FC = () => {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="w-[90%] mx-auto max-w-6xl">
                <div className="prose prose-lg max-w-none">
                    <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                        Fittingbox, a leader in virtual eyeglass trying-ons and 3D frame digitization. We focus on cutting-edge optical solutions based on{' '}
                        <u className="text-blue-900 font-semibold">augmented reality</u> and{' '}
                        <u className="text-blue-900 font-semibold">artificial intelligence</u>. With{' '}
                        <strong className="text-blue-900 font-bold">215 million virtual try-ons annually</strong>, we maintain the{' '}
                        <u className="text-blue-900 font-semibold">largest 3D frame database in the world</u>, with{' '}
                        <strong className="text-blue-900 font-bold">over 193,000 pairs</strong> and{' '}
                        <strong className="text-blue-900 font-bold">more than 4,000 corporate customers</strong>.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default IntroSection

