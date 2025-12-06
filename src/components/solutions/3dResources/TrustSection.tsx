import React from 'react'
import { Link } from 'react-router-dom'

const TrustSection: React.FC = () => {
    const logos = [
        { name: 'Eschenbach', image: '/assets/images/logo_eschenbach_800x300.webp' },
        { name: 'Marchon', image: '/assets/images/Logo Marchon-3.webp' },
        { name: 'Charmant', image: '/assets/images/Logo Charmant2-1.webp' },
        { name: 'De Rigo', image: '/assets/images/Logo De Rigo-1.webp' },
        { name: 'Jobson Optical Group', image: '/assets/images/jobson.webp' },
        { name: 'Rodenstock', image: '/assets/images/Rodenstock.webp' },
    ]

    return (
        <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="w-[90%] mx-auto max-w-7xl">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16 text-blue-950">
                    Trust from major eyewear manufacturers
                </h2>

                {/* Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 mb-12 md:mb-16 items-center">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
                        >
                            <img
                                src={logo.image}
                                alt={logo.name}
                                className="max-h-16 md:max-h-20 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* Call to Action Box */}
                <div className="bg-gradient-to-b from-blue-950 to-teal-600 rounded-lg p-8 md:p-12 text-center shadow-lg">
                    <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-6 md:mb-8 leading-relaxed">
                        Digitize your physical frames
                        <br />
                        and make them available in 3D for virtual experiences.
                    </p>
                    <Link
                        to="/pricing-request"
                        className="inline-block px-8 md:px-12 py-3 md:py-4 bg-white text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-md text-base md:text-lg"
                    >
                        Request a quote
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default TrustSection

