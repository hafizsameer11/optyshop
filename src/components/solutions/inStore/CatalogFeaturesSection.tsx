import React from 'react'

const CatalogFeaturesSection: React.FC = () => {
    const features = [
        'Filters: gender/type/brands',
        'Wishlist to share: QR code, e-mail, social media',
        'Live try-on',
        'Photos of digital frames seen from different angles',
        'Price display',
        'Search bar by model',
        'Virtual try-on via photo',
    ]

    return (
        <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="w-[90%] mx-auto max-w-7xl">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Left - Image */}
                    <div className="order-2 md:order-1">
                        <img
                            src="/assets/images/Tablet-Frame-Selection.webp"
                            alt="Person using tablet to browse digital eyewear catalog"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right - Features List */}
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 mb-6 md:mb-8">
                            Catalog features
                        </h2>
                        <ul className="space-y-4 md:space-y-2">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-orange-500 mr-3 mt-1 text-xl font-bold">•</span>
                                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                        {feature}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CatalogFeaturesSection

