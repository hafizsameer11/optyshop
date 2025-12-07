import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroSection from '../../components/resources/Blog/HeroSection'
import BreadcrumbsSection from '../../components/resources/Blog/BreadcrumbsSection'
import FilterSection from '../../components/resources/Blog/FilterSection'
import BlogArticlesGrid from '../../components/resources/Blog/BlogArticlesGrid'

const Blog: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <HeroSection />
            <BreadcrumbsSection />
            <FilterSection />
            <BlogArticlesGrid />
            <Footer />
        </div>
    )
}

export default Blog

