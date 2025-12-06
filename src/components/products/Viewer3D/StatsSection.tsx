import React from 'react'

type StatsSectionProps = {
    onOpenViewer: () => void
}

const StatsSection: React.FC<StatsSectionProps> = ({ onOpenViewer }) => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="w-[90%] mx-auto max-w-5xl">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-slate-800 mb-12">
                    Why is the 3D Viewer a driving factor for online glasses sales?
                </h2>

                <div className="bg-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Left - Statistics */}
                        <div className="text-white space-y-6">
                            <div>
                                <div className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
                                    88%
                                </div>
                                <p className="text-lg md:text-xl mb-4">
                                    of users ready to buy online found the 3D Viewer useful
                                </p>
                                <p className="text-base md:text-lg text-white/80">
                                    In the United States it's even 92%
                                </p>
                            </div>

                            <div className="pt-4">
                                <button
                                    onClick={onOpenViewer}
                                    className="px-8 py-3 rounded-full bg-white text-slate-800 font-semibold hover:bg-gray-100 transition-colors duration-300"
                                >
                                    Try the 3D Viewer
                                </button>
                            </div>
                        </div>

                        {/* Right - Icon */}
                        <div className="flex justify-center md:justify-end">
                            <div className="relative">
                                <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl bg-gradient-to-b from-orange-500 to-orange-300 flex items-center justify-center p-6">
                                    <img
                                        src="/assets/images/picto-3d-viewer-300x300.webp"
                                        alt="3D Viewer Icon"
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement
                                            target.src = '/assets/images/frame1.png'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StatsSection

