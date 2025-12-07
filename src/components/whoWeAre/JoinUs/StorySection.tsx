import React from 'react'

const StorySection: React.FC = () => {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="w-[90%] mx-auto max-w-4xl">
                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
                    <p>
                        The story of Fittingbox began in 2006, when Benjamin and Ariel, young students and eyeglass wearers, were annoyed when trying on new frames at the optician's. They had to remove their prescription glasses to see themselves with a pair without them...
                    </p>
                    <p>
                        <strong className="text-gray-900 font-bold">Spoiler alert: it's a real pain!</strong>
                    </p>
                    <p>
                        So, they had the idea to make buying glasses as easy as possible for everyone: Fittingbox was born.
                    </p>
                    <p>
                        Benjamin is the entrepreneurial spirit and Ariel the innovative one: a truly exceptional duo.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default StorySection

