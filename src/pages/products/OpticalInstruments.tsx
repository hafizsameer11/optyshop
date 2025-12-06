import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroSection from '../../components/products/OpticalInstruments/HeroSection'
import PDMeasurementSection from '../../components/products/OpticalInstruments/PDMeasurementSection'
import LensSimulatorSection from '../../components/products/OpticalInstruments/LensSimulatorSection'
import ExpertiseSection from '../../components/products/OpticalInstruments/ExpertiseSection'

const OpticalInstruments: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            <HeroSection />

            {/* Breadcrumbs Section */}
            <div className="bg-white py-6 md:py-8 px-4 md:px-6 border-b-4 border-teal-500">
                <div className="w-[90%] mx-auto">
                    <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm mb-4 md:mb-6">
                        <div className="flex items-center gap-2 text-teal-500">
                            <svg className="w-3 md:w-4 h-3 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            <span>HOME</span>
                        </div>
                        <span className="text-teal-500">/</span>
                        <span className="text-teal-500">OPTICAL INSTRUMENTS</span>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                        <a href="#" className="text-teal-500 hover:text-teal-400 transition-colors font-medium text-sm md:text-base">
                            PD MEASURE
                        </a>
                        <a href="#" className="text-teal-500 hover:text-teal-400 transition-colors font-medium text-sm md:text-base">
                            LENS SIMULATOR
                        </a>
                    </div>
                </div>
            </div>

            {/* PD Measurement Section */}
            <PDMeasurementSection />

            {/* Lens Simulator Section */}
            <LensSimulatorSection />

            {/* Our other areas of expertise Section */}
            <ExpertiseSection />

            <Footer />
        </div>
    )
}

export default OpticalInstruments

