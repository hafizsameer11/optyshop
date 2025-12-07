import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroSection from '../../components/resources/HQPackshots/HeroSection'
import BreadcrumbsSection from '../../components/resources/HQPackshots/BreadcrumbsSection'
import PackshotsGrid from '../../components/resources/HQPackshots/PackshotsGrid'

const HQPackshots: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <HeroSection />
            <BreadcrumbsSection />
            <PackshotsGrid />
            <Footer />
        </div>
    )
}

export default HQPackshots

