import React from 'react'
import { Link } from 'react-router-dom'

const BreadcrumbsSection: React.FC = () => {
    return (
        <section className="relative bg-white">
            {/* Gradient line separator at top */}
            <div className="h-px bg-gradient-to-r from-orange-400 via-orange-300 to-teal-400"></div>

            <div className="w-[90%] mx-auto px-4 sm:px-6 py-4 md:py-6">
                {/* Breadcrumbs */}
                <div className="flex flex-wrap items-center  gap-2 md:gap-3 text-xs md:text-sm mb-3 md:mb-4">
                    <Link to="/" className="flex items-center gap-2 text-blue-900 hover:text-blue-700 transition-colors">
                        <svg className="w-3 md:w-4 h-3 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        <span className="uppercase font-medium">HOME</span>
                    </Link>
                    <span className="text-gray-400">&gt;</span>
                    <span className="text-blue-900 uppercase font-medium">RESOURCES</span>
                    <span className="text-gray-400">&gt;</span>
                    <span className="text-blue-900 uppercase font-semibold">CASE STUDIES</span>
                </div>

                {/* Separator Line */}
                <div className="h-px bg-gray-300 mb-4 md:mb-6"></div>

                {/* Category Filters */}
                <div className="flex flex-wrap items-center lg:justify-center lg:gap-50 gap-6 md:gap-8">
                    <button className="text-blue-900 hover:text-blue-700 transition-colors font-medium text-sm md:text-base uppercase">
                        EVERYONE
                    </button>
                    <button className="text-blue-900 hover:text-blue-700 transition-colors font-medium text-sm md:text-base uppercase">
                        ONLINE
                    </button>
                    <button className="text-blue-900 hover:text-blue-700 transition-colors font-medium text-sm md:text-base uppercase">
                        IN STORE
                    </button>
                    <button className="text-blue-900 hover:text-blue-700 transition-colors font-medium text-sm md:text-base uppercase">
                        PRODUCER
                    </button>
                </div>
            </div>
        </section>
    )
}

export default BreadcrumbsSection

