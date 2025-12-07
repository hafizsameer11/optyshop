import React from 'react'

interface Benefit {
    image: string
    title: string
    description: string
}

const BenefitsSection: React.FC = () => {
    const benefits: Benefit[] = [
        {
            image: '/assets/images/work-from-home.webp',
            title: 'Remote work',
            description: '25% of our team works from home and 75% has a hybrid organization.'
        },
        {
            image: '/assets/images/Swile_black.webp',
            title: 'Swile "Restaurant Coupon"',
            description: ''
        },
        {
            image: '/assets/images/club-employe-logo-banniere-1.webp',
            title: 'Benefits of the Employés Club',
            description: ''
        },
        {
            image: '/assets/images/Alan-logo-green.svg_1.webp',
            title: 'Alan Health Insurance',
            description: ''
        },
        {
            image: '/assets/images/education.webp',
            title: 'Training',
            description: 'In 2022, 50% of our employees received training.'
        },
        {
            image: '/assets/images/sunbed.webp',
            title: '25 days of paid vacation',
            description: 'And 11 Fitdays (additional rest days/year)'
        },
        {
            image: '/assets/images/public-transport.webp',
            title: 'Transportation',
            description: '50% refund on subscriptions'
        },
        {
            image: '/assets/images/family.webp',
            title: 'Parent Policy',
            description: 'Support when you have a child (booklet for young parents, birth gift, etc.)'
        }
    ]

    return (
        <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="w-[90%] mx-auto max-w-7xl">
                <div className="space-y-8 md:space-y-12">
                    {/* Section Title */}
                    <div className="text-center space-y-2">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950">
                            As a member of the Fittingbox team, you will enjoy:
                        </h2>
                        <p className="text-sm md:text-base text-gray-600">
                            *Only for team members living in France
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center space-y-3 md:space-y-4"
                            >
                                {/* Icon/Logo */}
                                <div className="flex items-center justify-center h-12 md:h-14 w-full">
                                    <img
                                        src={benefit.image}
                                        alt={benefit.title}
                                        className="max-h-12 md:max-h-14 max-w-24 md:max-w-32 object-contain"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement
                                            target.style.display = 'none'
                                        }}
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg md:text-xl font-bold text-blue-950">
                                    {benefit.title}
                                </h3>

                                {/* Description */}
                                {benefit.description && (
                                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BenefitsSection

