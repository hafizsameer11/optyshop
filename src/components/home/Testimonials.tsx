import React, { useState } from 'react'

type Testimonial = {
    logo: string
    avatar: string
    quote: string
    name: string
    role: string
}

// Use only images that exist in public/assets/images
const testimonials: Testimonial[] = [
    {
        logo: '/assets/images/multiopticas.webp',
        avatar: '/assets/images/branislav-ramsak.webp',
        quote:
            'Since we increased the number of templates offering the virtual try-on feature, the conversion rate increase has been stable at around 90%.',
        name: 'Branislav RAMSAK',
        role: 'Co‑founder of Eyerim',
    },
    {
        logo: '/assets/images/kits.webp',
        avatar: '/assets/images/Kits-Jean-Francois-Jupille.webp',
        quote:
            'We’re thrilled with the performance of VTO and how it has simplified our customers’ shopping experience. We’ve seen a significant increase in conversion rates among users who use this feature.',
        name: 'Jean‑Francois JUPILLE',
        role: 'UX Director at KITS',
    },
    {
        logo: '/assets/images/Logo Fielmann.webp',
        avatar: '/assets/images/Stefan-Wolk.webp',
        quote:
            'Virtual try‑ons are definitely a huge boost for our online sales. With a virtual try‑on experience, sunglasses purchase conversions are 2 to 3 times higher than for those without a virtual try‑on.',
        name: 'Stefan WOLK',
        role: 'E‑Commerce Director at Fielmann',
    },
    {
        logo: '/assets/images/Zenni-Logo.webp',
        avatar: '/assets/images/branislav-ramsak.webp',
        quote:
            'With virtual try‑on, our customers feel more confident in their choices and spend more time discovering frames they love.',
        name: 'Alex TAYLOR',
        role: 'Digital Experience Lead',
    },
]

const Testimonials: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const current = testimonials[activeIndex]

    return (
        <section className="bg-gradient-to-b from-blue-950 to-blue-950 py-20 px-4">
            <div className="w-[92%] max-w-7xl mx-auto">
                <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-16">
                    <span className="text-slate-200">What do they think of</span>{' '}
                    <span className="text-blue-300">Virtual Glasses Try‑On?</span>
                </h2>

                {/* Desktop / tablet: 4 cards in a row (no slider, matches reference design) */}
                <div className="hidden md:grid md:grid-cols-4 gap-8">
                    {testimonials.map((item) => (
                        <article
                            key={item.name}
                            className="bg-white rounded-3xl px-8 py-10 text-slate-900 h-full flex flex-col items-center text-center shadow-[0_24px_60px_rgba(15,23,42,0.5)]"
                        >
                            <img src={item.logo} alt={item.name} className="h-10 mb-6 object-contain" />
                            <div className="flex-1 flex flex-col justify-between">
                                <p className="text-sm leading-relaxed text-slate-700 mb-8">
                                    {item.quote}
                                </p>
                                <div className="mt-2 flex flex-col items-center">
                                    <img
                                        src={item.avatar}
                                        alt={item.name}
                                        className="h-20 w-20 rounded-full object-cover mb-3"
                                    />
                                    <p className="text-base font-semibold text-slate-900">{item.name}</p>
                                    <p className="text-xs text-slate-500 mt-1 uppercase tracking-wide">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Mobile: slider with dots, one card at a time */}
                <div className="md:hidden">
                    <article className="bg-white rounded-3xl px-8 py-12 text-slate-900 flex flex-col items-center text-center shadow-[0_24px_60px_rgba(15,23,42,0.5)]">
                        <img src={current.logo} alt={current.name} className="h-10 mb-6 object-contain" />
                        <p className="text-sm leading-relaxed text-slate-700 mb-8">{current.quote}</p>
                        <img
                            src={current.avatar}
                            alt={current.name}
                            className="h-20 w-20 rounded-full object-cover mb-3"
                        />
                        <div className="mt-1">
                            <p className="text-base font-semibold text-slate-900">{current.name}</p>
                            <p className="text-xs text-slate-500 mt-1 uppercase tracking-wide">{current.role}</p>
                        </div>
                    </article>

                    <div className="mt-6 flex justify-center gap-3">
                        {testimonials.map((_t, idx) => (
                            <button
                                key={idx}
                                type="button"
                                onClick={() => setActiveIndex(idx)}
                                className={`h-3 w-3 rounded-full border border-blue-300 transition-colors ${idx === activeIndex ? 'bg-blue-400' : 'bg-transparent'
                                    }`}
                                aria-label={`Go to testimonial ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials

