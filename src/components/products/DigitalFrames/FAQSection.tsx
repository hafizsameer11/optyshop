import React, { useState } from 'react'

interface FAQItem {
    question: string
    answer: React.ReactNode
}

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const faqs: FAQItem[] = [
        {
            question: "How do you digitalize a physical mount?",
            answer: (
                <div className="space-y-4 text-slate-700">
                    <p>
                        We have developed an efficient process for transforming physical frames into digital ones.
                    </p>
                    <p>
                        The process involves inspecting and preparing frames, shooting glasses from various angles to create a 3D digital replica using <a href="#" className="text-blue-500 underline hover:text-blue-600">our patented StudioBox</a>, followed by quality control and necessary adjustments.
                    </p>
                    <p>
                        The <a href="#" className="text-blue-500 underline hover:text-blue-600">3D frames</a> are added to <a href="#" className="text-blue-500 underline hover:text-blue-600">our database</a> and made available for a <a href="#" className="text-blue-500 underline hover:text-blue-600">live virtual try-on</a> before the physical frames are returned.
                    </p>
                </div>
            )
        },
        {
            question: "How and where can I use digital frames?",
            answer: (
                <div className="space-y-4 text-slate-700">
                    <p>
                        3D frames can be used for various purposes, including compatibility with Fittingbox's virtual try-on solution and other rendering technologies. You can also use 3D frames to <a href="#" className="text-blue-500 underline hover:text-blue-600">create eyewear filters for social media platforms</a> and guarantees compatibility with filters.
                    </p>
                </div>
            )
        },
        {
            question: "How can I access the 3D frames already available?",
            answer: (
                <div className="space-y-4 text-slate-700">
                    <p>
                        Upon request, our team can match an eyewear catalog to the Fittingbox database to identify available 3D assets for virtual try-ons or other uses.
                    </p>
                    <p>
                        You can access the eyewear database through <a href="#" className="text-blue-500 underline hover:text-blue-600">our dedicated management tools</a> to view available frames, check digitization status, and manage your online catalog.
                    </p>
                </div>
            )
        }
    ]

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="bg-slate-100 py-16 md:py-24">
            <div className="w-[90%] mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 text-center mb-12">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-0">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-slate-200 last:border-b-0">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between py-6 text-left group"
                            >
                                <h3 className="text-lg md:text-xl font-bold text-slate-800 pr-4">
                                    {faq.question}
                                </h3>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-slate-300 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <svg
                                        className="w-4 h-4 text-slate-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 15l7-7 7 7"
                                        />
                                    </svg>
                                </div>
                            </button>

                            {openIndex === index && (
                                <div className="pb-6 pr-12">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQSection

