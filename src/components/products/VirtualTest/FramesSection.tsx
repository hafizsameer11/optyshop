import React from 'react'

const FramesSection: React.FC = () => {
    const frames = [
        { id: 1, name: 'Frame option', image: '/assets/images/frame1.png' },
        { id: 2, name: 'Frame option', image: '/assets/images/frame2.png' },
        { id: 3, name: 'Frame option', image: '/assets/images/frame3.png' },
        { id: 4, name: 'Frame option', image: '/assets/images/frame4.png' }
    ]

    return (
        <section className="bg-[#0f172a] text-white py-16 px-4">
            <div className="w-[90%] max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-widest mb-10 text-slate-300">
                    Frames
                </h2>

                <div className="grid grid-cols-1 gap-6">
                    {frames.map((frame) => (
                        <div
                            key={frame.id}
                            className="border-2 border-blue-400/50 rounded-2xl p-6 hover:border-blue-400 hover:bg-slate-800/30 transition-all cursor-pointer group flex items-center gap-6"
                        >
                            <img
                                src={frame.image}
                                alt={frame.name}
                                className="w-20 h-20 object-contain flex-shrink-0"
                            />
                            <div className="flex-1">
                                <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                                    {frame.name}
                                </h3>
                                <p className="text-sm text-slate-400 mt-1">Frame</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FramesSection
