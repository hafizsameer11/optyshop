import React from 'react'

const ImmersiveSection: React.FC = () => {
    return (
        <section className="bg-stone-50 py-16 md:py-24">
            <div className="w-[90%] mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left - Smartphone Mockup */}
                    <div className="flex justify-center lg:justify-start order-first lg:order-first">
                        <div className="relative w-[280px] sm:w-[320px] md:w-[360px]">
                            <img
                                src="/assets/images/image1.png"
                                alt="Immersive 3D Viewer on mobile device"
                                className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement
                                    target.src = '/assets/images/mobile1.png'
                                }}
                            />
                        </div>
                    </div>

                    {/* Right - Text Content */}
                    <div className="space-y-6 text-slate-800">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            An immersive and{' '}
                            <span className="text-amber-500 underline decoration-amber-500 decoration-2 underline-offset-4">
                                interactive
                            </span>
                        </h2>

                        <div className="space-y-4 text-base md:text-lg text-slate-700 leading-relaxed">
                            <p>
                                The Fittingbox 3D Viewer allows users to{' '}
                                <strong className="text-slate-900">examine a pair of glasses from every angle, rotating and zooming in on specific parts.</strong>{' '}
                                84% of users ready to buy online believe that the rendering of glasses in the 3D Viewer is close to reality. In this way, consumers can enjoy an{' '}
                                <strong className="text-slate-900">engaging, interactive, and pleasant shopping experience.</strong>
                            </p>

                            <p>
                                By showcasing collections with a 3D Viewer,{' '}
                                <strong className="text-slate-900">online retailers and frame manufacturers can highlight what makes their glasses unique.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImmersiveSection

