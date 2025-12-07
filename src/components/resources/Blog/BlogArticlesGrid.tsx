import React from 'react'
import { Link } from 'react-router-dom'
import { blogArticles } from '../../../data/blogData'

const BlogArticlesGrid: React.FC = () => {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="w-[90%] mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {blogArticles.map((article) => (
                        <article
                            key={article.id}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative w-full h-48 md:h-56 overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement
                                        target.style.display = 'none'
                                    }}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                {/* Title */}
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-tight">
                                    {article.title}
                                </h3>

                                {/* Date & Category */}
                                <div className="text-xs md:text-sm text-gray-600 mb-3">
                                    {article.date} - {article.category}
                                </div>

                                {/* Snippet */}
                                <p className="text-sm md:text-base text-gray-700 mb-4 flex-grow leading-relaxed">
                                    {article.snippet}
                                </p>

                                {/* Read the article Link */}
                                <Link
                                    to={`/blog/${article.slug}`}
                                    className="text-gray-900 hover:text-gray-700 font-semibold text-sm md:text-base transition-colors inline-flex items-center gap-2 group"
                                >
                                    Read the article
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
            </div>
        </section>
    )
}

export default BlogArticlesGrid

