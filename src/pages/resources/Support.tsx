import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroSection from '../../components/resources/Support/HeroSection'
import BreadcrumbsSection from '../../components/resources/Support/BreadcrumbsSection'
import SupportOptionsSection from '../../components/resources/Support/SupportOptionsSection'

const Support: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <HeroSection />
            <BreadcrumbsSection />
            <SupportOptionsSection />
            <Footer />
        </div>
    )
}

export default Support

