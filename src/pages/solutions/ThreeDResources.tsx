import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroSection from '../../components/solutions/3dResources/HeroSection'
import BenefitsSection from '../../components/solutions/3dResources/BenefitsSection'
import InternationalBrandsSection from '../../components/solutions/3dResources/InternationalBrandsSection'
import PrivateLabelsSection from '../../components/solutions/3dResources/PrivateLabelsSection'
import LuxuryBrandsSection from '../../components/solutions/3dResources/LuxuryBrandsSection'
import DigitalExperiencesSection from '../../components/solutions/3dResources/DigitalExperiencesSection'
import TrustSection from '../../components/solutions/3dResources/TrustSection'

const ThreeDResources: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            <HeroSection />

            {/* Breadcrumbs Section */}
            <div className="bg-white py-4 md:py-6 px-4 md:px-6 border-b-4 border-green-500">
                <div className="w-[90%] mx-auto">
                    <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm">
                        <div className="flex items-center gap-2 text-green-500">
                            <svg className="w-3 md:w-4 h-3 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            <span>HOME</span>
                        </div>
                        <span className="text-green-500">/</span>
                        <span className="text-green-500">SOLUTIONS</span>
                        <span className="text-green-500">/</span>
                        <span className="text-green-600 font-bold">3D RESOURCES</span>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <BenefitsSection />

            {/* International Brands Section */}
            <InternationalBrandsSection />

            {/* Private Labels Section */}
            <PrivateLabelsSection />

            {/* Luxury Brands Section */}
            <LuxuryBrandsSection />

            {/* Digital Experiences Section */}
            <DigitalExperiencesSection />

            {/* Trust Section */}
            <TrustSection />

            <Footer />
        </div>
    )
}

export default ThreeDResources

