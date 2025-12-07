import React from 'react'

interface CultureValue {
    title: string
    description: string
    color: string
}

const cultureValues: CultureValue[] = [
    {
        title: 'Do well and improve',
        description: 'We are committed to providing high-performing solutions and improving them with the evolution of technology.',
        color: 'text-orange-600'
    },
    {
        title: 'Trust',
        description: 'We believe that trust is the foundation of a lasting relationship. That\'s why every day we honor the trust that our clients and our teams place in us.',
        color: 'text-amber-400'
    },
    {
        title: 'Commitment',
        description: 'Our commitment to clients and team members comes through respect, solidarity, and mutual help.',
        color: 'text-cyan-400'
    },
    {
        title: 'Feeling good',
        description: 'Providing a safe environment for everyone is fundamental: kindness, personal development, and conviviality are at the heart of the relationships we build.',
        color: 'text-purple-400'
    }
]

const CultureSection: React.FC = () => {
    return (
        <section className="bg-blue-950 py-12 md:py-16 lg:py-20 px-4 sm:px-6 border-t border-b border-white/20">
            <div className="w-[90%] mx-auto max-w-7xl">
                <div className="space-y-8 md:space-y-12">
                    {/* Section Title */}
                    <div className="text-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                            Our <strong>culture</strong>
                        </h2>
                    </div>

                    {/* Culture Values Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {cultureValues.map((value, index) => (
                            <div
                                key={index}
                                className={`text-white ${index < cultureValues.length - 1
                                    ? 'border-r-0 lg:border-r border-white/20 pr-0 lg:pr-6'
                                    : ''
                                    }`}
                            >
                                <h3 className={`text-xl md:text-2xl font-bold mb-4 ${value.color}`}>
                                    {value.title}
                                </h3>
                                <p className="text-sm md:text-base text-white/90 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CultureSection

