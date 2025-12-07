import React, { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const JobApplication: React.FC = () => {
    const { jobId } = useParams<{ jobId: string }>()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        resume: null as File | null,
        coverLetter: '',
        linkedin: '',
        portfolio: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({
                ...prev,
                resume: e.target.files![0]
            }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    if (isSubmitted) {
        return (
            <div className="bg-white min-h-screen">
                <Navbar />

                {/* Success Message */}
                <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
                    <div className="w-[90%] mx-auto max-w-3xl">
                        <div className="text-center space-y-6 md:space-y-8">
                            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                                <svg className="w-10 h-10 md:w-12 md:h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950">
                                Application Submitted!
                            </h1>
                            <p className="text-lg md:text-xl text-gray-700">
                                Thank you for your interest in joining Fittingbox. We've received your application and will review it shortly.
                            </p>
                            <p className="text-base md:text-lg text-gray-600">
                                Our team will contact you if your profile matches our requirements.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <Link
                                    to="/job-opportunities"
                                    className="inline-block px-6 md:px-8 py-3 md:py-4 rounded-lg bg-[#253C69] text-white font-semibold hover:bg-[#1e2f52] transition-colors duration-300 text-sm md:text-base"
                                >
                                    View Other Positions
                                </Link>
                                <Link
                                    to="/join-us"
                                    className="inline-block px-6 md:px-8 py-3 md:py-4 rounded-lg border-2 border-[#253C69] text-[#253C69] font-semibold hover:bg-blue-50 transition-colors duration-300 text-sm md:text-base"
                                >
                                    Back to Join Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        )
    }

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section
                className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(/assets/images/Banner-join-us-tewt-2.webp)',
                    backgroundColor: '#253C69'
                }}
            >
                {/* Dark blue gradient overlay from left */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#253C69] via-[#253C69]/80 to-transparent"></div>

                <div className="relative px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
                    <div className="max-w-4xl">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                            Apply for Position
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-4">
                            Join our team and help shape the future of digital eyewear
                        </p>
                        <div className="w-16 sm:w-20 md:w-24 h-0.5 md:h-1 bg-white"></div>
                    </div>
                </div>

                {/* Gradient Line at Bottom */}
                <div className="relative h-1 bg-gradient-to-r from-orange-500 via-green-500 to-purple-500 z-10"></div>
            </section>

            {/* Breadcrumbs Section */}
            <div className="bg-white py-4 px-4 sm:px-6">
                <div className="w-[90%] mx-auto max-w-6xl">
                    <nav className="flex items-center gap-2 text-sm text-gray-900">
                        <Link to="/" className="flex items-center gap-2 hover:text-gray-700 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            <span>HOME</span>
                        </Link>
                        <span className="text-gray-500">&gt;</span>
                        <Link to="/our-history" className="hover:text-gray-700 transition-colors">
                            WHO WE ARE
                        </Link>
                        <span className="text-gray-500">&gt;</span>
                        <Link to="/join-us" className="hover:text-gray-700 transition-colors">
                            JOIN US
                        </Link>
                        <span className="text-gray-500">&gt;</span>
                        <Link to="/job-opportunities" className="hover:text-gray-700 transition-colors">
                            JOB OPPORTUNITIES
                        </Link>
                        <span className="text-gray-500">&gt;</span>
                        <span className="text-gray-900">APPLY</span>
                    </nav>
                </div>
            </div>

            {/* Application Form Section */}
            <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
                <div className="w-[90%] mx-auto max-w-4xl">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 lg:p-12 shadow-lg">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-6 md:mb-8">
                            Application Form
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                            {/* Personal Information */}
                            <div className="space-y-4">
                                <h3 className="text-lg md:text-xl font-semibold text-blue-950 border-b border-gray-200 pb-2">
                                    Personal Information
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            required
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#253C69] focus:border-transparent outline-none transition-colors"
                                            placeholder="John"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            required
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#253C69] focus:border-transparent outline-none transition-colors"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#253C69] focus:border-transparent outline-none transition-colors"
                                        placeholder="john.doe@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#253C69] focus:border-transparent outline-none transition-colors"
                                        placeholder="+33 1 23 45 67 89"
                                    />
                                </div>
                            </div>

                            {/* Professional Links */}
                            <div className="space-y-4">
                                <h3 className="text-lg md:text-xl font-semibold text-blue-950 border-b border-gray-200 pb-2">
                                    Professional Links
                                </h3>

                                <div>
                                    <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
                                        LinkedIn Profile
                                    </label>
                                    <input
                                        type="url"
                                        id="linkedin"
                                        name="linkedin"
                                        value={formData.linkedin}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#253C69] focus:border-transparent outline-none transition-colors"
                                        placeholder="https://linkedin.com/in/yourprofile"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-2">
                                        Portfolio / Website
                                    </label>
                                    <input
                                        type="url"
                                        id="portfolio"
                                        name="portfolio"
                                        value={formData.portfolio}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#253C69] focus:border-transparent outline-none transition-colors"
                                        placeholder="https://yourportfolio.com"
                                    />
                                </div>
                            </div>

                            {/* Resume Upload */}
                            <div className="space-y-4">
                                <h3 className="text-lg md:text-xl font-semibold text-blue-950 border-b border-gray-200 pb-2">
                                    Documents
                                </h3>

                                <div>
                                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                                        Resume / CV <span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-[#253C69] transition-colors">
                                        <div className="space-y-1 text-center">
                                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                                <label htmlFor="resume" className="relative cursor-pointer bg-white rounded-md font-medium text-[#253C69] hover:text-[#1e2f52] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#253C69]">
                                                    <span>Upload a file</span>
                                                    <input
                                                        id="resume"
                                                        name="resume"
                                                        type="file"
                                                        accept=".pdf,.doc,.docx"
                                                        required
                                                        onChange={handleFileChange}
                                                        className="sr-only"
                                                    />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                                            {formData.resume && (
                                                <p className="text-sm text-green-600 mt-2">✓ {formData.resume.name}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Cover Letter */}
                            <div className="space-y-4">
                                <h3 className="text-lg md:text-xl font-semibold text-blue-950 border-b border-gray-200 pb-2">
                                    Cover Letter
                                </h3>

                                <div>
                                    <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                                        Why do you want to join Fittingbox? <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="coverLetter"
                                        name="coverLetter"
                                        required
                                        rows={6}
                                        value={formData.coverLetter}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#253C69] focus:border-transparent outline-none transition-colors resize-none"
                                        placeholder="Tell us about yourself and why you're interested in this position..."
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 px-6 md:px-8 py-3 md:py-4 rounded-lg bg-[#253C69] text-white font-semibold hover:bg-[#1e2f52] transition-colors duration-300 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                </button>
                                <Link
                                    to="/job-opportunities"
                                    className="flex-1 sm:flex-none px-6 md:px-8 py-3 md:py-4 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors duration-300 text-sm md:text-base text-center"
                                >
                                    Cancel
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default JobApplication

