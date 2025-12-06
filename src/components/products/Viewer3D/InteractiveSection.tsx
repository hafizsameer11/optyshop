import React from 'react'

type InteractiveSectionProps = {
    onOpenViewer: () => void
}

const InteractiveSection: React.FC<InteractiveSectionProps> = ({ onOpenViewer }) => {

    return (
        <section className="py-16 md:py-24">
            <div className="w-full">
                <div
                    className="relative overflow-hidden min-h-[500px] md:min-h-[600px] bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url(/assets/images/3D-View-2-ok.webp)',
                    }}
                >
                    {/* Overlay with text and button - directly on image, bottom center */}
                    <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-12">
                        <div className="text-center space-y-4 px-4">
                            <h3 className="text-2xl md:text-3xl font-bold text-blue-800">
                                Manipulate the 3D glasses
                            </h3>
                            <p className="text-xl md:text-2xl font-semibold text-blue-800">
                                and then try them on!
                            </p>
                            <button
                                onClick={onOpenViewer}
                                className="px-8 py-3 border-2 border-slate-800 rounded-full text-slate-800 font-semibold hover:bg-slate-800 hover:text-white transition-colors duration-300 bg-white/90"
                            >
                                Try the 3D Viewer for glasses
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InteractiveSection

