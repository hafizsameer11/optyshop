import React from 'react'
import Hero from '../components/home/Hero'
import TrustedBrands from '../components/home/TrustedBrands'
import StatsHighlight from '../components/home/StatsHighlight'
import LiveDemoSection from '../components/home/LiveDemoSection'
import Testimonials from '../components/home/Testimonials'
import PurchasingJourneySection from '../components/home/PurchasingJourneySection'
import UltraRealisticSection from '../components/home/UltraRealisticSection'
import Viewer3DSection from '../components/home/Viewer3DSection'
import CompatibilitySection from '../components/home/CompatibilitySection'
import Footer from '../components/Footer'

const Home: React.FC = () => {
    return (
        <div className="bg-slate-950 text-white">
            <Hero />
            <TrustedBrands />
            <StatsHighlight />
            <LiveDemoSection />
            <Testimonials />
            <PurchasingJourneySection />
            <UltraRealisticSection />
            <Viewer3DSection />
            <CompatibilitySection />
            <Footer />
        </div>
    )
}

export default Home


