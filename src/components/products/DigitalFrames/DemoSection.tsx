import React, { useState } from 'react'

const DemoSection: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        surname: '',
        village: '',
        companyName: '',
        websiteUrl: '',
        numberOfFrames: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
    }

    return (
        <section className="bg-stone-100 py-16 md:py-24">
            <div className="w-[90%] mx-auto">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
                        <div className="mb-8">
                            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-2">
                                Interested in the Fittingbox solution?
                            </h2>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800">
                                Book a live demo
                            </h3>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email - Full Width */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            {/* Name and Surname - Two Columns */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="surname" className="block text-sm font-medium text-slate-700 mb-2">
                                        Surname <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="surname"
                                        name="surname"
                                        required
                                        value={formData.surname}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                                        placeholder="Your surname"
                                    />
                                </div>
                            </div>

                            {/* Village and Company Name - Two Columns */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="village" className="block text-sm font-medium text-slate-700 mb-2">
                                        Village <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="village"
                                        name="village"
                                        required
                                        value={formData.village}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent appearance-none bg-white"
                                    >
                                        <option value="">Select</option>
                                        <option value="village1">Village 1</option>
                                        <option value="village2">Village 2</option>
                                        <option value="village3">Village 3</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-2">
                                        Company Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        required
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                                        placeholder="Your company name"
                                    />
                                </div>
                            </div>

                            {/* Website URL and Number of Frames - Two Columns */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="websiteUrl" className="block text-sm font-medium text-slate-700 mb-2">
                                        Website URL
                                    </label>
                                    <input
                                        type="url"
                                        id="websiteUrl"
                                        name="websiteUrl"
                                        value={formData.websiteUrl}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                                        placeholder="https://example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="numberOfFrames" className="block text-sm font-medium text-slate-700 mb-2">
                                        Number of frames in the catalog
                                    </label>
                                    <select
                                        id="numberOfFrames"
                                        name="numberOfFrames"
                                        value={formData.numberOfFrames}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent appearance-none bg-white"
                                    >
                                        <option value="">Select</option>
                                        <option value="0-100">0 - 100</option>
                                        <option value="101-500">101 - 500</option>
                                        <option value="501-1000">501 - 1,000</option>
                                        <option value="1001-5000">1,001 - 5,000</option>
                                        <option value="5000+">5,000+</option>
                                    </select>
                                </div>
                            </div>

                            {/* Message - Full Width */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent resize-y"
                                    placeholder="Message"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center pt-4">
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors duration-300 shadow-md"
                                >
                                    Request a demo
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DemoSection

