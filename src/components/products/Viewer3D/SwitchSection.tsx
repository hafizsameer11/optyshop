import React from 'react'

const SwitchSection: React.FC = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="w-[90%] mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left - Text Content */}
                    <div className="space-y-6 text-slate-800">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            Switch from{' '}
                            <span className="text-amber-500">virtual try-on</span>
                            {' '}to{' '}
                            <span className="text-amber-500">3D view instantly</span>
                        </h2>

                        <div className="space-y-4 text-base md:text-lg text-slate-700 leading-relaxed">
                            <p>
                                Fittingbox 3D Viewer allows users to{' '}
                                <strong className="text-slate-900">switch from a 3D view to a virtual try-on, and vice versa, with a single click.</strong>
                            </p>

                            <p>
                                To maximize customer engagement, the 3D viewer icon is automatically displayed within the virtual try-on experience to{' '}
                                <strong className="text-slate-900">allow users to start their shopping experience with the virtual try-on</strong> or with the 3D view of the selected glasses.
                            </p>

                            <p>
                                You can also{' '}
                                <strong className="text-slate-900">choose to display only the 3D Viewer</strong>, it depends on you and the customer journey you want to offer!
                            </p>
                        </div>
                    </div>

                    {/* Right - Smartphone Mockup */}
                    <div className="flex justify-center lg:justify-end order-first lg:order-last">
                        <div className="relative w-[280px] sm:w-[320px] md:w-[360px]">
                            <img
                                src="/assets/images/image3.png"
                                alt="3D Viewer on mobile device"
                                className="w-full h-auto object-contain rounded-2xl shadow-2xl"
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

export default SwitchSection

