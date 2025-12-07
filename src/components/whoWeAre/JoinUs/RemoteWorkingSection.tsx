import React from 'react'

const RemoteWorkingSection: React.FC = () => {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="w-[90%] mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
                    {/* Left - Image */}
                    <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                        <div className="relative w-full max-w-lg lg:max-w-xl">
                            <img
                                src="/assets/images/Teletravail.jpg"
                                alt="Fittingbox team video conference call"
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement
                                    target.style.display = 'none'
                                }}
                            />
                        </div>
                    </div>

                    {/* Right - Text Content */}
                    <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
                        <div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950 mb-4 md:mb-6">
                                <span className="underline text-blue-800">Flexible remote working</span>
                            </h3>
                        </div>

                        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                            <p>
                                Fittingbox encourages <strong className="text-gray-900 font-bold">remote working</strong>. All types of work arrangements are possible (on-site, hybrid, 100% remote) depending on your needs. On average, our employees are on-site <strong className="text-gray-900 font-bold">2 days a week</strong>, and 20 of them are even spread <strong className="text-gray-900 font-bold">across France</strong>!
                            </p>

                            <p>
                                So, we need to stay connected more than ever! That's why we have dedicated tools: <strong className="text-gray-900 font-bold">Teams, Steeple, and our intranet, "My Fitting Space."</strong>
                            </p>

                            <p>
                                Because we believe in our employees' autonomy, they have the ability to <strong className="text-gray-900 font-bold">adjust their work schedule</strong> with their manager (start and finish times, lunch breaks, etc.).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RemoteWorkingSection

