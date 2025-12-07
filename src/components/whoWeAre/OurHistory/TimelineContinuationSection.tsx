import React from 'react'

interface TimelineEvent {
    year: string
    events: string[]
}

const timelineEvents: TimelineEvent[] = [
    {
        year: '2017',
        events: [
            'Publication of Virtual Try-On Advanced and Standard in HTML5'
        ]
    },
    {
        year: '2018',
        events: [
            'Fielmann becomes investor'
        ]
    },
    {
        year: '2019',
        events: [
            'Gartner recommends Fittingbox',
            '100,000 3D frames in the Fittingbox database'
        ]
    },
    {
        year: '2020',
        events: [
            'Gartner recommends Fittingbox for the second consecutive year',
            'Silmo d\'Or finalist with Fittingbox Visio'
        ]
    },
    {
        year: '2021',
        events: [
            'Winner of the BPI France I-Nov innovation competition with Fittingbox Visio',
            'JINS becomes investor'
        ]
    },
    {
        year: '2022',
        events: [
            'Publication of Frame Removal'
        ]
    },
    {
        year: '2023',
        events: [
            'Publication of improved 3D Frame rendering',
            'Acquisition of Ditto, Luna\'s virtual try-on activity'
        ]
    }
]

const TimelineContinuationSection: React.FC = () => {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="w-[90%] mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
                    {/* Left - Timeline */}
                    <div className="space-y-6 md:space-y-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950 mb-6 md:mb-8">
                                ...to the reference
                            </h2>
                        </div>

                        <div className="space-y-6 md:space-y-8">
                            {timelineEvents.map((event, index) => (
                                <div key={index} className="border-l-4 border-blue-950 pl-4 md:pl-6">
                                    <h3 className="text-xl md:text-2xl font-bold text-blue-950 mb-3 md:mb-4">
                                        {event.year}
                                    </h3>
                                    <ul className="space-y-2 md:space-y-3">
                                        {event.events.map((item, itemIndex) => (
                                            <li key={itemIndex} className="text-sm md:text-base text-gray-700 leading-relaxed flex items-start">
                                                <span className="text-blue-950 mr-2 mt-1">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Trophy Image */}
                    <div className="flex justify-center lg:justify-end order-first lg:order-last">
                        <div className="relative w-full max-w-lg lg:max-w-xl">
                            <img
                                src="/assets/images/Fittingbox-Trophée.webp"
                                alt="Fittingbox Trophy"
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
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

export default TimelineContinuationSection

