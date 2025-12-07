import React, { useState } from 'react'

const categories = [
    'See all',
    'User experience',
    'E-commerce',
    'Technological expertise',
    'Press releases',
    'In store',
    'Eyewear catalog',
    'Company news'
]

const FilterSection: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('See all')

    return (
        <section className="bg-gray-50 border-t border-gray-200">
            {/* Gradient line separator at top */}
            <div className="h-px bg-gradient-to-r from-orange-400 via-orange-300 to-teal-400"></div>

            <div className="w-[90%] mx-auto px-4 sm:px-6 py-4 md:py-6">
                <div className="flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`text-sm md:text-base font-medium transition-colors ${activeCategory === category
                                    ? 'text-blue-900 border-b-2 border-blue-900'
                                    : 'text-gray-700 hover:text-blue-900'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FilterSection

