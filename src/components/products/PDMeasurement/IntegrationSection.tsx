import React from 'react'

const IntegrationSection: React.FC = () => {
    return (
        <section className="bg-white pt-0 pb-16 md:pb-24">
            <div className="w-[90%] mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left - Text Content */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-600 mb-4">
                                <span className="underline decoration-teal-600 decoration-2 underline-offset-4">
                                    Easy and flexible
                                </span>{' '}
                                integration
                            </h2>
                        </div>

                        <div className="space-y-4 text-base md:text-lg text-slate-700 leading-relaxed">
                            <p>
                                PD Measurement can be{' '}
                                <strong className="text-slate-900">embedded directly into your website</strong>, at{' '}
                                <strong className="text-slate-900">any stage of the eyewear purchasing journey</strong>.
                            </p>
                            <p>
                                The solution is designed to be{' '}
                                <strong className="text-slate-900">easily integrated into any website</strong>, during order validation, or on any web page. The access link can also be{' '}
                                <strong className="text-slate-900">added to any email</strong> you send.
                            </p>
                            <p>
                                The standard version{' '}
                                <strong className="text-slate-900">requires a web developer to integrate in 10 minutes</strong>. Accessible on any desktop and mobile browser, users can measure their PD in just a few clicks and{' '}
                                <strong className="text-slate-900">from any device</strong>.
                            </p>
                        </div>
                    </div>

                    {/* Right - Image */}
                    <div className="flex justify-center lg:justify-end order-first lg:order-last">
                        <div className="relative w-full max-w-xl lg:max-w-2xl">
                            <img
                                src="/assets/images/Mochup-PD-v2.webp"
                                alt="Easy and flexible integration - PD Measurement"
                                className="w-full h-auto object-contain rounded-2xl shadow-lg"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement
                                    target.src = '/assets/images/mobile1.png'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntegrationSection

