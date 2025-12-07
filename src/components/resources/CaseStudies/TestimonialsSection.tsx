import React from 'react'

interface Testimonial {
    logo: string
    quote: string
    boldPhrase: string
    avatar: string
    name: string
    role: string
}

const testimonials: Testimonial[] = [
    {
        logo: '/assets/images/Logo Fielmann.webp',
        quote: 'Virtual try-ons are definitely a huge boost for our online sales. With a virtual try-on experience, sunglasses purchase conversions are 2 to 3 times higher than those without a virtual try-on.',
        boldPhrase: 'sunglasses purchase conversions are 2 to 3 times higher',
        avatar: '/assets/images/Stefan-Wolk.webp',
        name: 'Stefan WOLK',
        role: 'E-Commerce Director at Fielmann',
    },
    {
        logo: '/assets/images/multiopticas.webp',
        quote: 'Since we increased the number of templates offering the virtual try-on feature, the conversion rate increase has been stable at around 90%.',
        boldPhrase: 'conversion rate increase has been stable at around 90%',
        avatar: '/assets/images/branislav-ramsak.webp',
        name: 'Branislav RAMSAK',
        role: 'Co-founder of Eyerim',
    },
    {
        logo: '/assets/images/kits.webp',
        quote: 'We\'re thrilled with the performance of VTO and how it\'s simplified our customers\' shopping experience. We\'ve seen a significant increase in conversion rates among users who use this feature.',
        boldPhrase: 'significant increase in conversion rates',
        avatar: '/assets/images/Kits-Jean-Francois-Jupille.webp',
        name: 'Jean-Francois JUPILLE',
        role: 'UX Director at KITS',
    },
]

const TestimonialsSection: React.FC = () => {
    return (
        <section className="bg-blue-950 py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="w-[90%] mx-auto max-w-7xl">
                {/* Title */}
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-12 md:mb-16">
                    What They Say About Fittingbox Virtual Glasses Try-On
                </h2>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((testimonial, index) => {
                        // Split quote to insert bold phrase
                        const parts = testimonial.quote.split(testimonial.boldPhrase)

                        return (
                            <article
                                key={index}
                                className="bg-white rounded-2xl px-6 md:px-8 py-8 md:py-10 flex flex-col shadow-lg"
                            >
                                {/* Logo */}
                                <div className="mb-6">
                                    <img
                                        src={testimonial.logo}
                                        alt={testimonial.name}
                                        className="h-8 md:h-10 object-contain"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement
                                            target.style.display = 'none'
                                        }}
                                    />
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-8 flex-grow">
                                    {parts[0]}
                                    <strong className="font-bold text-gray-900">
                                        {testimonial.boldPhrase}
                                    </strong>
                                    {parts[1]}
                                </p>

                                {/* Profile Section */}
                                <div className="flex flex-col items-center">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover mb-3"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement
                                            target.style.display = 'none'
                                        }}
                                    />
                                    <p className="text-base md:text-lg font-bold text-gray-900">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-xs md:text-sm text-gray-600 mt-1">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection

