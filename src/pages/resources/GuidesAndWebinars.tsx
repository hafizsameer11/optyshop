import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroSection from '../../components/resources/GuidesAndWebinars/HeroSection'
import BreadcrumbsSection from '../../components/resources/GuidesAndWebinars/BreadcrumbsSection'
import GuidesGridSection from '../../components/resources/GuidesAndWebinars/GuidesGridSection'

const GuidesAndWebinars: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <HeroSection />
            <BreadcrumbsSection />
            <GuidesGridSection />
            <Footer />
        </div>
    )
}

export default GuidesAndWebinars

