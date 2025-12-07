import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { getBlogArticleBySlug } from '../../data/blogData'

const BlogDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>()
    const article = slug ? getBlogArticleBySlug(slug) : null

    // Debug: Log article data
    useEffect(() => {
        if (article) {
            console.log('Article loaded:', article.title)
            console.log('Has keyPoints:', !!article.keyPoints, article.keyPoints)
            console.log('Has summary:', !!article.summary, article.summary)
            console.log('Has headerImage:', !!article.headerImage, article.headerImage)
            console.log('Has content:', !!article.content, article.content)
        }
    }, [article])

    if (!article) {
        return (
            <div className="bg-white min-h-screen">
                <Navbar />
                <div className="flex items-center justify-center min-h-[60vh]">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
                        <Link to="/blog" className="text-blue-600 hover:text-blue-700">
                            Return to Blog
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            {/* Breadcrumbs */}
            <section className="bg-white py-4 px-4 sm:px-6 pt-20 md:pt-24">
                <div className="w-[90%] mx-auto max-w-4xl">
                    <nav className="flex items-center gap-2 text-sm text-gray-900">
                        <Link to="/" className="flex items-center gap-2 hover:text-gray-700 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            <span>HOME</span>
                        </Link>
                        <span className="text-gray-500">&gt;</span>
                        <Link to="/blog" className="hover:text-gray-700 transition-colors">
                            RESOURCES
                        </Link>
                        <span className="text-gray-500">&gt;</span>
                        <Link to="/blog" className="hover:text-gray-700 transition-colors">
                            BLOG
                        </Link>
                        <span className="text-gray-500">&gt;</span>
                        <span className="text-gray-900 truncate max-w-xs">{article.title.toUpperCase().slice(0, 40)}...</span>
                    </nav>
                </div>
            </section>

            {/* Article Content */}
            <section className="bg-white py-8 md:py-12 px-4 sm:px-6">
                <div className="w-[90%] mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 md:mb-6">
                                {article.title}
                            </h1>

                            {/* Date and Read Time */}
                            <div className="text-sm md:text-base text-gray-500 mb-4">
                                {article.date} · {article.readTime || '3 min read'}
                            </div>

                            {/* Separator Line */}
                            <div className="h-px bg-gray-300 mb-6 md:mb-8"></div>

                            {/* Header Image */}
                            {article.headerImage && (
                                <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg mb-8">
                                    <img
                                        src={article.headerImage}
                                        alt={article.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement
                                            target.style.display = 'none'
                                        }}
                                    />
                                </div>
                            )}

                            {/* Key Points Section */}
                            {article.keyPoints && article.keyPoints.length > 0 && (
                                <div className="bg-green-50 border-l-4 border-green-400 rounded-lg p-6 mb-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-2xl">🔧</span>
                                        <h2 className="text-xl font-bold text-gray-900">Key points</h2>
                                    </div>
                                    <ul className="space-y-3">
                                        {article.keyPoints.map((point: string, index: number) => (
                                            <li key={index} className="text-base text-gray-700 leading-relaxed">
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Article Content */}
                            <div className="prose prose-lg max-w-none">
                                {(() => {
                                    // Check if content exists
                                    if (!article.content) {
                                        return (
                                            <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-4">
                                                <p>{article.snippet}</p>
                                                <p>This is a placeholder for the full article content. The complete article would be displayed here with proper formatting, images, and additional sections.</p>
                                            </div>
                                        )
                                    }

                                    // Check if content is an array
                                    if (!Array.isArray(article.content) || article.content.length === 0) {
                                        return (
                                            <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-4">
                                                <p>{article.snippet}</p>
                                                <p>This is a placeholder for the full article content. The complete article would be displayed here with proper formatting, images, and additional sections.</p>
                                            </div>
                                        )
                                    }

                                    // Check if it's a string array (simple content)
                                    if (typeof article.content[0] === 'string') {
                                        const stringContent = article.content as string[]
                                        return (
                                            <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-4">
                                                {stringContent.map((paragraph: string, index: number) => (
                                                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                                                ))}
                                            </div>
                                        )
                                    }

                                    // Structured content with headings
                                    if (typeof article.content[0] === 'object' && article.content[0] !== null && 'heading' in article.content[0]) {
                                        return (
                                            <div className="space-y-8">
                                                {(article.content as Array<{ heading: string; paragraphs: string[]; image?: string }>).map((section, sectionIndex) => (
                                                    <div key={sectionIndex} className="space-y-4">
                                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                                            {section.heading}
                                                        </h2>
                                                        {section.paragraphs && Array.isArray(section.paragraphs) && section.paragraphs.map((paragraph: string, paraIndex: number) => {
                                                            // Check if paragraph starts with bullet point (•)
                                                            if (paragraph && typeof paragraph === 'string' && paragraph.trim().startsWith('•')) {
                                                                return (
                                                                    <div
                                                                        key={paraIndex}
                                                                        className="text-base md:text-lg text-gray-700 leading-relaxed ml-4"
                                                                        dangerouslySetInnerHTML={{ __html: paragraph }}
                                                                    />
                                                                )
                                                            }
                                                            return (
                                                                <p
                                                                    key={paraIndex}
                                                                    className="text-base md:text-lg text-gray-700 leading-relaxed"
                                                                    dangerouslySetInnerHTML={{ __html: paragraph }}
                                                                />
                                                            )
                                                        })}
                                                        {/* Section Image */}
                                                        {section.image && (
                                                            <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg my-6">
                                                                <img
                                                                    src={section.image}
                                                                    alt={section.heading}
                                                                    className="w-full h-full object-cover"
                                                                    onError={(e) => {
                                                                        const target = e.target as HTMLImageElement
                                                                        target.style.display = 'none'
                                                                    }}
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )
                                    }

                                    // Fallback
                                    return (
                                        <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-4">
                                            <p>{article.snippet}</p>
                                            <p>This is a placeholder for the full article content. The complete article would be displayed here with proper formatting, images, and additional sections.</p>

                                        </div>
                                    )
                                })()}
                            </div>
                        </div>

                        {/* Sidebar - Summary */}
                        {article.summary && article.summary.length > 0 && (
                            <div className="lg:col-span-1">
                                <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-2xl">📖</span>
                                        <h3 className="text-xl font-bold text-gray-900">Summary</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {article.summary.map((item: string, index: number) => (
                                            <li key={index} className="text-sm md:text-base text-gray-700 hover:text-blue-900 transition-colors cursor-pointer">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default BlogDetail

