import React, { useState } from 'react'
import VirtualTryOnModal from './VirtualTryOnModal'

const LiveDemoSection: React.FC = () => {
    const [isTryOnOpen, setIsTryOnOpen] = useState(false)

    return (
        <section className="bg-white py-16 px-4">
            <div className="w-[90%] mx-auto grid gap-10 lg:grid-cols-2">
                {/* Left image panel */}
                <div className="relative overflow-hidden image-cover rounded-3xl shadow-2xl h-[630px]">
                    <img
                        src="/assets/images/virtual-try.jpg"
                        alt="Virtual eyewear try-on"
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 px-6 text-white space-y-4 text-center">
                        <p className="text-lg font-medium max-w-xl">
                            <span className="block">Discover our ultra-realistic</span>
                            <span className="block">virtual eyewear try-on solution</span>
                        </p>
                        <button
                            onClick={() => setIsTryOnOpen(true)}
                            className="rounded-full bg-white/90 text-slate-900 px-8 py-3 font-semibold shadow-lg hover:bg-white transition-colors"
                        >
                            Try on glasses
                        </button>
                    </div>
                </div>

                {/* Right form panel */}
                <div className="bg-white rounded-3xl shadow-[0_20px_45px_rgba(14,30,37,0.08)] p-8 space-y-6 border border-slate-100">
                    <div className="text-center lg:text-left space-y-2">
                        <p className="text-slate-600 text-sm uppercase tracking-[0.35em]">Interested?</p>
                        <h2 className="text-2xl font-semibold text-slate-800">Interested in the OptiShop solution?</h2>
                        <p className="text-xl text-blue-700 font-semibold">Book a live demo</p>
                    </div>

                    <form className="space-y-4 text-slate-700">
                        <input className="w-full rounded-full border border-slate-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Email *" />

                        <div className="grid md:grid-cols-2 gap-4">
                            <input className="rounded-full border border-slate-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Name *" />
                            <input className="rounded-full border border-slate-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Surname *" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <select className="rounded-full border border-slate-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                <option>Village *</option>
                                <option>New York</option>
                                <option>Paris</option>
                                <option>Dubai</option>
                            </select>
                            <input className="rounded-full border border-slate-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Company name *" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <input className="rounded-full border border-slate-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Website URL" />
                            <select className="rounded-full border border-slate-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                <option>Frames in catalog</option>
                                <option>0-100</option>
                                <option>100-500</option>
                                <option>500+</option>
                            </select>
                        </div>

                        <textarea
                            className="w-full rounded-3xl border border-slate-200 px-5 py-3 min-h-[110px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Message"
                        />

                        <button
                            type="button"
                            className="w-full rounded-full bg-blue-900 text-white font-semibold py-3 shadow-lg hover:bg-blue-800 transition-colors"
                        >
                            Request a demo
                        </button>
                    </form>
                </div>
            </div>

            <VirtualTryOnModal open={isTryOnOpen} onClose={() => setIsTryOnOpen(false)} />
        </section>
    )
}

export default LiveDemoSection


