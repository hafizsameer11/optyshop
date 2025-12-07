import React, { useState } from 'react'

interface ContactSupportModalProps {
    isOpen: boolean
    onClose: () => void
}

const ContactSupportModal: React.FC<ContactSupportModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        solutions: [] as string[],
        message: '',
        attachments: [] as File[]
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleCheckboxChange = (solution: string) => {
        setFormData({
            ...formData,
            solutions: formData.solutions.includes(solution)
                ? formData.solutions.filter(s => s !== solution)
                : [...formData.solutions, solution]
        })
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files)
            if (files.length <= 5) {
                setFormData({
                    ...formData,
                    attachments: files
                })
            } else {
                alert('Maximum 5 files allowed')
            }
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        alert('Thank you for your message! We will get back to you soon.')
        setFormData({
            email: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            solutions: [],
            message: '',
            attachments: []
        })
        onClose()
    }

    if (!isOpen) return null

    const solutions = [
        'Virtual Try-On (Website/Instore/Storefront/Advertising)',
        'Digital Frames (Database/Photo Studio/3D Studio/Model Studio)',
        'Optical Fit (Fittingbox Metrix/Lens Simulator)',
        'Open Innovation',
        'Other'
    ]

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm overflow-y-auto py-4">
            <div className="relative bg-white rounded-2xl shadow-2xl w-[90%] max-w-4xl max-h-[90vh] flex flex-col m-4">
                {/* Header - Fixed */}
                <div className="flex-shrink-0 p-6 md:p-8 pb-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                            Get in touch with our support team
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                            aria-label="Close"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Form - Scrollable */}
                <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            placeholder="your.email@example.com"
                        />
                    </div>

                    {/* First Name and Last Name - Side by Side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                placeholder="John"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                Last name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                placeholder="Doe"
                            />
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            placeholder="+1 234 567 8900"
                        />
                    </div>

                    {/* Solutions Concerned */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            Solutions concerned
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Select the solution(s) related to your support request.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {solutions.map((solution) => (
                                <label
                                    key={solution}
                                    className="flex items-start gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <input
                                        type="checkbox"
                                        checked={formData.solutions.includes(solution)}
                                        onChange={() => handleCheckboxChange(solution)}
                                        className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <span className="text-sm text-gray-700">{solution}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-y"
                            placeholder="Let us know how we can help you, please detail your request in a few lines."
                        />
                    </div>

                    {/* Attachments */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Attachments
                        </label>
                        <p className="text-sm text-gray-600 mb-3">
                            Please send us a screenshot or any relevant document that could help us process your request faster (5 files max. 100Mb max per file).
                        </p>
                        <div className="flex items-center gap-4">
                            <label className="cursor-pointer">
                                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors inline-block">
                                    Choose Files
                                </span>
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*,.pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </label>
                            <span className="text-sm text-gray-500">
                                {formData.attachments.length > 0
                                    ? `${formData.attachments.length} file(s) selected`
                                    : 'No file chosen'}
                            </span>
                        </div>
                        {formData.attachments.length > 0 && (
                            <ul className="mt-2 space-y-1">
                                {formData.attachments.map((file, index) => (
                                    <li key={index} className="text-sm text-gray-600">
                                        {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center pt-4 pb-2">
                        <button
                            type="submit"
                            className="bg-blue-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors text-base md:text-lg"
                        >
                            Send your message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactSupportModal

