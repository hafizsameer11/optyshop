import React from 'react'

interface IndustryLogo {
    name: string
    image: string
}

const industryLogos: IndustryLogo[] = [
    {
        name: 'La French Tech',
        image: '/assets/images/FrenchTech-240.webp'
    },
    {
        name: 'Gartner',
        image: '/assets/images/gartner_sq.webp'
    },
    {
        name: 'CES Consumer Technology Association',
        image: '/assets/images/banner CES-Frame Removal-desktop.webp'
    },
    {
        name: 'VIVA TECHNOLOGY',
        image: '/assets/images/Logo_Viva_Technology.svg'
    }
]

const IndustryRecognitionSection: React.FC = () => {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="w-[90%] mx-auto max-w-7xl">
                <div className="space-y-8 md:space-y-12">
                    {/* Headline */}
                    <div className="text-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950 leading-tight">
                            Cutting-edge technology for glasses<br />
                            praised by the industry
                        </h2>
                    </div>

                    {/* Logos */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center">
                        {industryLogos.map((logo, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center p-4 w-full"
                            >
                                <img
                                    src={logo.image}
                                    alt={logo.name}
                                    className="max-h-16 md:max-h-20 lg:max-h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement
                                        target.style.display = 'none'
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IndustryRecognitionSection

