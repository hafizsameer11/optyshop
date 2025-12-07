import React from 'react'

interface KeyNumberCard {
    icon: string
    gradient: string
    number: string
    category: string
    description: string
}

const KeyNumbersSection: React.FC = () => {
    const keyNumbers: KeyNumberCard[] = [
        {
            icon: '👥',
            gradient: 'from-green-400 to-blue-400',
            number: '100',
            category: 'Team Members',
            description: 'More than 100 people are part of the Fittingbox adventure!'
        },
        {
            icon: '🌍',
            gradient: 'from-purple-400 to-pink-400',
            number: '13',
            category: 'Nationalities',
            description: 'We have no fewer than 13 nationalities on our team!'
        },
        {
            icon: '🎂',
            gradient: 'from-orange-400 to-red-400',
            number: '34',
            category: 'Years',
            description: 'This is the average age of all our team members!'
        }
    ]

    return (
        <section className="bg-[#253C69] py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="w-[90%] mx-auto max-w-7xl">
                <div className="space-y-8 md:space-y-12">
                    {/* Section Title */}
                    <div className="text-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                            Fittingbox Key Numbers
                        </h2>
                    </div>

                    {/* Key Numbers Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {keyNumbers.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                {/* Icon */}
                                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-3xl md:text-4xl mb-4 md:mb-6`}>
                                    <span>{item.icon}</span>
                                </div>

                                {/* Number */}
                                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 mb-2 md:mb-3">
                                    {item.number}
                                </div>

                                {/* Category */}
                                <h3 className="text-lg md:text-xl font-bold text-blue-950 mb-3 md:mb-4">
                                    {item.category}
                                </h3>

                                {/* Description */}
                                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KeyNumbersSection

