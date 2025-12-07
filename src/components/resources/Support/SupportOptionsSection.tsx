import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CredentialsRequestModal from './CredentialsRequestModal'
import ContactSupportModal from './ContactSupportModal'

const SupportOptionsSection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    return (
        <>
            <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
                <div className="w-[90%] mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {/* Left Column - ID and password */}
                        <div className="border-r-0 md:border-r border-gray-300 pr-0 md:pr-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6">
                                <span className="relative inline-block">
                                    ID and password
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-900"></span>
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
                                Have you forgotten your IDs and want to receive them by email?
                            </p>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="rounded-lg border-2 border-blue-900 bg-white text-blue-900 font-semibold px-6 py-3 hover:bg-blue-50 transition-colors text-sm md:text-base"
                            >
                                Request your credentials
                            </button>
                        </div>

                        {/* Right Column - Customer Service */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6">
                                <span className="relative inline-block">
                                    Customer Service
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-900"></span>
                                </span>
                            </h2>
                            <Link
                                to="/help-center"
                                className="inline-block rounded-lg bg-blue-900 text-white font-semibold px-6 py-3 hover:bg-blue-800 transition-colors mb-6 md:mb-8 text-sm md:text-base"
                            >
                                Visit the help center
                            </Link>
                            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
                                Do you have a problem that requires assistance? Would you like to optimize your Fittingbox solutions and speak with one of our Customer Success Managers?
                            </p>
                            <button
                                onClick={() => setIsContactModalOpen(true)}
                                className="rounded-lg bg-blue-900 text-white font-semibold px-6 py-3 hover:bg-blue-800 transition-colors text-sm md:text-base"
                            >
                                Contact our customer support team
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Credentials Request Modal */}
            <CredentialsRequestModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

            {/* Contact Support Modal */}
            <ContactSupportModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </>
    )
}

export default SupportOptionsSection

