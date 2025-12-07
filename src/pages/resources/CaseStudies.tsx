import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroSection from '../../components/resources/CaseStudies/HeroSection'
import BreadcrumbsSection from '../../components/resources/CaseStudies/BreadcrumbsSection'
import CaseStudiesGrid from '../../components/resources/CaseStudies/CaseStudiesGrid'
import TestimonialsSection from '../../components/resources/CaseStudies/TestimonialsSection'
import CustomerShowcaseSection from '../../components/resources/CaseStudies/CustomerShowcaseSection'

const CaseStudies: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <HeroSection />
            <BreadcrumbsSection />
            <CaseStudiesGrid />
            <TestimonialsSection />
            <CustomerShowcaseSection />
            <Footer />
        </div>
    )
}

export default CaseStudies

