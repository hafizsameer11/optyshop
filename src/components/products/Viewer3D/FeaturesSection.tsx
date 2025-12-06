import React from 'react'

interface FeatureItem {
    id: number
    title: string
    description: string
    gradientFrom: string
    gradientTo: string
    icon: string
}

const FeaturesSection: React.FC = () => {
    const features: FeatureItem[] = [
        {
            id: 1,
            title: "Increase engagement",
            description: "Viewing a product in 3D and being able to inspect it in detail is a great way to get customers to interact with a product even more, giving them an extra level of engagement.",
            gradientFrom: "from-orange-500",
            gradientTo: "to-red-500",
            icon: "👆"
        },
        {
            id: 2,
            title: "Highlight the uniqueness of each frame",
            description: "3D Viewer displays glasses from all angles, emphasizing the uniqueness, craftsmanship, and distinctiveness of each pair.",
            gradientFrom: "from-orange-400",
            gradientTo: "to-yellow-400",
            icon: "👓"
        },
        {
            id: 3,
            title: "Giving buyers confidence",
            description: "3D Viewer mimics in-store shopper behavior as if instinctively moving from trying on glasses to inspecting details, giving customers full control of their purchasing journey.",
            gradientFrom: "from-purple-500",
            gradientTo: "to-pink-500",
            icon: "👥"
        }
    ]

    return (
        <section className="bg-stone-50 py-16 md:py-24">
            <div className="w-[90%] mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-slate-800 mb-12 md:mb-16">
                    An immersive 3D viewing tool, which allows users to interact with the glasses.
                </h2>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} flex items-center justify-center text-3xl mb-6`}>
                                <span>{feature.icon}</span>
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

export default FeaturesSection

