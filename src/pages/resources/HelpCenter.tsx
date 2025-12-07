import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HelpCenterSection from '../../components/resources/Support/HelpCenterSection'

const HelpCenter: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <HelpCenterSection />
            <Footer />
        </div>
    )
}

export default HelpCenter

