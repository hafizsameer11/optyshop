import React from 'react'
import { Link } from 'react-router-dom'
import { caseStudies, type CaseStudy } from '../../../data/caseStudiesData'

const CaseStudiesGrid: React.FC = () => {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20">
            <div className="w-[90%] mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {caseStudies.map((study: CaseStudy) => (
                        <article
                            key={study.id}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative w-full h-48 md:h-56 overflow-hidden">
                                <img
                                    src={study.image}
                                    alt={study.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement
                                        target.style.display = 'none'
                                    }}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                {/* Category Tag */}
                                <span className="text-xs md:text-sm text-gray-600 font-semibold uppercase tracking-wide mb-2">
                                    {study.category}
                                </span>

                                {/* Title */}
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-tight">
                                    {study.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm md:text-base text-gray-600 mb-4 flex-grow leading-relaxed">
                                    {study.description}
                                </p>

                                {/* Continue Reading Link */}
                                <Link
                                    to={`/case-studies/${study.slug}`}
                                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm md:text-base transition-colors inline-flex items-center gap-2 group"
                                >
                                    Continue reading
                                    <svg
                                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Learn More Button */}
                <div className="flex justify-center mt-8 md:mt-12">
                    <button className="rounded-full border border-blue-900 bg-gray-200 text-blue-900 font-semibold text-sm md:text-base px-6 py-2.5 hover:bg-gray-300 transition-colors">
                        Learn more
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CaseStudiesGrid

