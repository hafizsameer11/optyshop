import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroSection from '../../components/solutions/inStore/HeroSection'
import VideoSection from '../../components/solutions/inStore/VideoSection'
import AdvantagesSection from '../../components/solutions/inStore/AdvantagesSection'
import CharacteristicsSection from '../../components/solutions/inStore/CharacteristicsSection'
import OmnichannelSection from '../../components/solutions/inStore/OmnichannelSection'
import RenderingSection from '../../components/solutions/inStore/RenderingSection'
import CatalogFeaturesSection from '../../components/solutions/inStore/CatalogFeaturesSection'
import AdvancedSection from '../../components/solutions/inStore/AdvancedSection'

const InStore: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            <HeroSection />

            {/* Breadcrumbs Section */}
            <div className="bg-white py-4 md:py-6 px-4 md:px-6 border-b-4 border-orange-500">
                <div className="w-[90%] mx-auto">
                    <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm mb-4 md:mb-6">
                        <div className="flex items-center gap-2 text-orange-500">
                            <svg className="w-3 md:w-4 h-3 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            <span>HOME</span>
                        </div>
                        <span className="text-gray-500">&gt;</span>
                        <span className="text-orange-500">VIRTUAL TEST</span>
                        <span className="text-gray-500">&gt;</span>
                        <span className="text-orange-600 font-bold">STANDARD FOR SHOP</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                        <a href="#video" className="text-orange-500 hover:text-orange-600 transition-colors font-medium text-sm md:text-base uppercase">
                            VIDEO
                        </a>
                        <a href="#advantages" className="text-orange-500 hover:text-orange-600 transition-colors font-medium text-sm md:text-base uppercase">
                            ADVANTAGES
                        </a>
                        <a href="#characteristics" className="text-orange-500 hover:text-orange-600 transition-colors font-medium text-sm md:text-base uppercase">
                            CHARACTERISTICS
                        </a>
                        <a href="#documentation" className="text-orange-500 hover:text-orange-600 transition-colors font-medium text-sm md:text-base uppercase">
                            DOCUMENTATION
                        </a>
                    </div>

                    {/* Separator Line */}
                    <div className="w-full h-px bg-gray-300 mt-4 md:mt-6"></div>
                </div>
            </div>

            {/* Video Section */}
            <VideoSection />

            {/* Advantages Section */}
            <AdvantagesSection />

            {/* Characteristics Section */}
            <CharacteristicsSection />

            {/* Omnichannel Section */}
            <OmnichannelSection />

            {/* Rendering Section */}
            <RenderingSection />

            {/* Catalog Features Section */}
            <CatalogFeaturesSection />

            {/* Advanced Section */}
            <AdvancedSection />

            <Footer />
        </div>
    )
}

export default InStore

