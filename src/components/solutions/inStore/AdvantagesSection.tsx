import React from 'react'

const AdvantagesSection: React.FC = () => {
    const advantages = [
        {
            text: 'Present your ',
            bold: 'frame catalog',
        },
        {
            text: '',
            bold: 'Simple management interface',
            after: ': manage your frame selection, add descriptions and set prices',
        },
        {
            text: 'Offer frame catalog variations ',
            bold: 'on request',
            after: ' and allow your customers to simulate ',
            bold2: 'different lens sets and coatings',
        },
        {
            text: 'Generate " ',
            bold: 'Web to Store',
            after: '" traffic from mobile or PC',
        },
        {
            text: 'Offer an ',
            bold: 'omnichannel experience',
            after: ' to your visitors',
        },
        {
            text: 'Improve in-store ',
            bold: 'customer experience and conversion rate',
        },
    ]

    return (
        <section id="advantages" className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="w-[90%] mx-auto max-w-7xl">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Left - Image */}
                    <div className="order-2 md:order-1">
                        <img
                            src="/assets/images/Instore-frame-catalogue.webp"
                            alt="In-store frame catalog display"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right - Advantages List */}
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 mb-6 md:mb-8 pb-4 border-b-4 border-orange-500">
                            Advantages
                        </h2>
                        <ul className="space-y-4 md:space-y-6">
                            {advantages.map((advantage, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-orange-500 mr-3 mt-1 text-xl font-bold">•</span>
                                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                        {advantage.text}
                                        <strong className="text-blue-950 font-bold">{advantage.bold}</strong>
                                        {advantage.after}
                                        {advantage.bold2 && (
                                            <>
                                                {' '}
                                                <strong className="text-blue-950 font-bold">{advantage.bold2}</strong>
                                            </>
                                        )}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdvantagesSection

