import React, { useState } from 'react'

interface FAQItem {
    id: number
    question: string
    answer: string
}

const FAQSection: React.FC = () => {
    const [openId, setOpenId] = useState<number>(1)

    const faqs: FAQItem[] = [
        {
            id: 1,
            question: "How does the virtual glasses try-on work?",
            answer: "Powered by augmented reality technology, Fittingbox's virtual try-on works like a virtual mirror, allowing users to try on glasses virtually anywhere, anytime, on any device.\n\nFittingbox's solution places ultra-realistic digital frames (both eyeglasses and sunglasses) on the user's face through the device's front-facing camera feed in real time and ensures an accurate fit thanks to the \"Size Guarantee \" feature ..\n\nAs the pioneer and inventor of virtual eyeglass try-on technology, Fittingbox has been offering the most realistic experience for over 15 years. Another great advantage: our solution works in real time for a live try-on session, while other solutions require a photo for a recorded experience."
        },
        {
            id: 2,
            question: "Can the virtual try-on be used on all devices?",
            answer: "The Fittingbox virtual try-on tool works on any device—cell phone, computer, tablet—since it only requires access to the front-facing camera/webcam to detect the user's face. Thanks to our patented Augmented Reality (AR) technology, our solutions offer a realistic virtual try-on experience."
        },
        {
            id: 3,
            question: "Is the Fittingbox solution compatible with Shopify or WooCommerce?",
            answer: "Fittingbox Virtual Try-On, being developed in HTML5, is compatible with all major CMS platforms (WordPress, WooCommerce, Shopify, Magento...).\n\nIt can be easily added to any website, whether e-commerce or traditional, and you can customize the integration to fit your user experience. Consult our technical documentation to create a customizable Advanced Virtual Try-On. We also offer a Standard version, ready to connect and use, if you don't have resources for implementation ."
        },
        {
            id: 4,
            question: "Can virtual proof be used with a photo?",
            answer: "Fittingbox offers both a real-time virtual try-on and a photo-based virtual try-on. If you prefer to see how your glasses look in a photo or don't want to access the camera, simply upload a photo from your gallery and Fittingbox's virtual try-on will generate a photo-based virtual try-on.\n\nThis is useful when you want to see how you look with sunglasses on vacation or how someone else would look with sunglasses if you're buying them a pair of glasses as a gift."
        },
        {
            id: 5,
            question: "How can I make sure my eyewear catalog is available for virtual trying on?",
            answer: "In addition to our virtual try-on solution, we offer access to a database of ready-to-use digital frames with over 193,000 references, including more than 1,200 brands.\n\nWe also match our database to your inventory, so you can see which glasses are already available for trying on.\n\nIf you can't find your eyewear collections in our database, you can always transform them into digital frames thanks to our patented 3D studio ."
        }
    ]

    const toggleAccordion = (id: number) => {
        setOpenId(openId === id ? -1 : id)
    }

    return (
        <section className="bg-gray-50 py-16 md:py-24 px-4">
            <div className="w-[90%] max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] text-center mb-12">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div key={faq.id} className="rounded-lg overflow-hidden bg-white">
                            <button
                                onClick={() => toggleAccordion(faq.id)}
                                className="w-full px-6 md:px-8 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors border-b border-slate-200"
                            >
                                <h3 className="text-base md:text-lg font-medium text-[#0f172a] text-left">
                                    {faq.question}
                                </h3>
                                <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#0f172a] flex items-center justify-center transition-transform ${openId === faq.id ? 'rotate-180' : ''
                                    }`}>
                                    <svg
                                        className="w-4 h-4 text-[#0f172a]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </div>
                            </button>

                            {openId === faq.id && (
                                <div className="px-6 md:px-8 py-4 bg-slate-50">
                                    <p className="text-slate-700 text-base leading-relaxed whitespace-pre-line">
                                        {faq.answer}
                                    </p>
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
