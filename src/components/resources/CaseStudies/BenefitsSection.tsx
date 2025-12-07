import React from 'react'
import { Link } from 'react-router-dom'

const BenefitsSection: React.FC = () => {
    return (
        <>
            {/* Top Section - Three Benefits Columns */}
            <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
                <div className="w-[90%] mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
                        {/* Column 1 */}
                        <div className="border-r-0 md:border-r border-gray-300 pr-0 md:pr-8">
                            <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6 leading-tight">
                                Get users to engage{' '}
                                <span className="relative inline-block">
                                    more with your website
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-900"></span>
                                </span>
                            </h3>
                            <p className="text-base md:text-lg text-gray-800 leading-normal">
                                "Consumers who use the virtual try-on on our online store visit product pages 3 to 4 times more often."
                            </p>
                        </div>

                        {/* Column 2 */}
                        <div className="border-r-0 md:border-r border-gray-300 pr-0 md:pr-8">
                            <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6 leading-tight">
                                Encourage people to{' '}
                                <span className="relative inline-block">
                                    buy online
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-900"></span>
                                </span>
                            </h3>
                            <p className="text-base md:text-lg text-gray-800 leading-normal mt-4 md:mt-6">
                                "The virtual try-on is definitely a huge boost for our online sales."
                            </p>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6 leading-tight">
                                A feature that helps{' '}
                                <span className="relative inline-block">
                                    drive traffic to stores
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-900"></span>
                                </span>
                            </h3>
                            <p className="text-base md:text-lg text-gray-800 leading-normal">
                                "This is a feature that helps increase traffic to stores."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Section - Dark Blue Banner */}
            <section className="bg-blue-950 py-12 md:py-16 lg:py-20 px-4 sm:px-6">
                <div className="w-[90%] mx-auto max-w-4xl text-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 md:mb-10 leading-tight">
                        How to measure the ROI of a virtual try-on feature available on a website?
                    </h2>
                    <Link
                        to="/case-studies/fielmann"
                        className="inline-block bg-white text-blue-900 font-semibold px-8 py-3 md:py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-base md:text-lg"
                    >
                        Get insights from Fielmann
                    </Link>
                </div>
            </section>
        </>
    )
}

export default BenefitsSection

