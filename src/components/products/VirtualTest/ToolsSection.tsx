import React from 'react'

const ToolsSection: React.FC = () => {
    return (
        <section className="bg-white py-16 md:py-20">
            <div className="w-[90%] max-w-7xl mx-auto">
                <h3 className="text-center text-3xl md:text-4xl font-semibold text-[#0f172a] mb-12">
                    <span className="font-normal">Virtual testing tools </span>
                    <span className="font-bold">for your website</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    <article className="bg-white rounded-2xl shadow-xl transition p-10 text-center">
                        <h4 className="text-2xl md:text-2xl font-semibold text-orange-500 mb-6">Advanced for the website</h4>
                        <p className="text-base md:text-lg text-slate-600 mb-8 px-4 leading-relaxed">
                            Choose your features and build a virtual try-on experience that matches your brand identity, to improve the purchasing journey.
                        </p>
                        <div className="text-orange-500 font-medium">You discover</div>
                    </article>

                    <article className="bg-[#fdf6f5] rounded-2xl shadow-xl transition p-10 text-center">
                        <h4 className="text-2xl md:text-2xl font-semibold text-orange-500 mb-6">App for Shopify</h4>
                        <p className="text-base md:text-lg text-slate-600 mb-8 px-4 leading-relaxed">
                            A turnkey solution designed for e-commerce operators who are just starting out on Shopify and want to quickly and easily set up a virtual try-on.
                        </p>
                        <div className="text-orange-500 font-medium">You discover</div>
                    </article>

                    <article className="bg-[#faf5f4] rounded-2xl shadow-xl transition p-10 text-center">
                        <h4 className="text-2xl md:text-2xl font-semibold text-orange-500 mb-6">Website Standards</h4>
                        <p className="text-base md:text-lg text-slate-600 mb-8 px-4 leading-relaxed">
                            A solution designed for optical stores looking to quickly and easily set up virtual eyewear try-ons on their website, enhancing their digital experience.
                        </p>
                        <div className="text-orange-500 font-medium">You discover</div>
                    </article>

                </div>

                <p className="text-center text-sm text-slate-500 mt-10">
                    Our solutions are compatible with any type of website. If you use Shopify, <a href="#" className="text-[#0f172a] underline">compare the different solutions here</a>.
                </p>
            </div>
        </section>
    )
}

export default ToolsSection
