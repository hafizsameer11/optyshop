import React from 'react'
import { Link } from 'react-router-dom'

const CustomerSupportSection: React.FC = () => {
    const languages = [
        { country: 'Brazil', flag: '🇧🇷' },
        { country: 'Spain', flag: '🇪🇸' },
        { country: 'France', flag: '🇫🇷' },
        { country: 'United Kingdom', flag: '🇬🇧' },
        { country: 'Italy', flag: '🇮🇹' }
    ]

    return (
        <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="w-[90%] mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                    {/* Left Column - Text Content */}
                    <div className="space-y-6 md:space-y-8 flex flex-col justify-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950 mb-4 md:mb-6">
                                A successful <strong className="text-blue-950 font-bold">team dedicated to <span className="underline">customers</span></strong>
                            </h3>
                        </div>

                        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                            <p>
                                Our specialists serve over 4,000 clients in 75 countries and speak a total of 7 languages.
                            </p>
                            <p>
                                They handle the entire customer lifecycle, including support, and are here to assist you at all times!
                            </p>
                        </div>

                        {/* Contact Us Button */}
                        <div className="pt-4 md:pt-6">
                            <Link
                                to="/contact"
                                className="inline-block px-6 md:px-8 py-3 md:py-4 rounded-lg bg-[#253C69] text-white font-semibold hover:bg-[#1e2f52] transition-colors duration-300 text-sm md:text-base"
                            >
                                Contact us
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Team Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-lg lg:max-w-xl">
                            <img
                                src="/assets/images/cs team.png"
                                alt="Customer Support Team"
                                className="w-full h-auto rounded-lg object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement
                                    target.style.display = 'none'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomerSupportSection

