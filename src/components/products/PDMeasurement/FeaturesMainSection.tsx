import React from 'react'

interface Feature {
    id: number
    title: string
    description: string
    icon: string
}

const FeaturesMainSection: React.FC = () => {
    const features: Feature[] = [
        {
            id: 1,
            title: 'Immediate and precise results',
            description: 'An accuracy of 1 mm from the actual measurement, for 7 out of 10 measurements. The accuracy is 2 mm in 96% of cases.',
            icon: '📏'
        },
        {
            id: 2,
            title: 'Step-by-step protocol',
            description: 'Easy-to-follow instructions, position guidelines, and a tutorial to walk you through the process.',
            icon: '📋'
        },
        {
            id: 3,
            title: 'Multiple devices',
            description: 'Mobile-friendly tool, available without downloading an app. Compatible with any device: mobile, desktop, or tablet.',
            icon: '💻'
        },
        {
            id: 4,
            title: 'Easy implementation',
            description: 'The standard version requires 10 minutes of integration for a web developer.',
            icon: '⚙️'
        },
        {
            id: 5,
            title: 'Data privacy',
            description: 'Fittingbox is GDPR compliant and does not collect or process any personal data.',
            icon: '🛡️'
        },
        {
            id: 6,
            title: 'Customization options',
            description: 'Light and dark modes are available.',
            icon: '🔧'
        }
    ]

    return (
        <section className="bg-slate-800 py-16 md:py-24">
            <div className="w-[90%] mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 md:mb-16">
                    Main features
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-800 flex items-center justify-center mb-6">
                                <span className="text-3xl">{feature.icon}</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturesMainSection

