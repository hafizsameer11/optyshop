import React, { useState } from 'react'

const DemoSection: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        surname: '',
        village: '',
        company: '',
        website: '',
        frames: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Handle form submission here
    }

    return (
        <section className="bg-gray-50 py-16 md:py-24 px-4">
            <div className="w-[90%] max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12">

                <div className="text-center mb-10">
                    <p className="text-slate-600 text-sm md:text-base mb-2">Interested in the Fittingbox solution?</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-8">
                        Book a live demo
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email */}
                    <div>
                        <label className="block text-slate-600 text-sm font-medium mb-2">Email <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded-full border border-slate-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="your@email.com"
                            required
                        />
                    </div>

                    {/* Name and Surname */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-slate-600 text-sm font-medium mb-2">Name <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full rounded-full border border-slate-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="John"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-slate-600 text-sm font-medium mb-2">Surname <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="surname"
                                value={formData.surname}
                                onChange={handleChange}
                                className="w-full rounded-full border border-slate-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Doe"
                                required
                            />
                        </div>
                    </div>

                    {/* Village and Company */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-slate-600 text-sm font-medium mb-2">Village <span className="text-red-500">*</span></label>
                            <select
                                name="village"
                                value={formData.village}
                                onChange={handleChange}
                                className="w-full rounded-full border border-slate-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            >
                                <option value="">Select</option>
                                <option value="new-york">New York</option>
                                <option value="london">London</option>
                                <option value="paris">Paris</option>
                                <option value="dubai">Dubai</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-slate-600 text-sm font-medium mb-2">Company Name <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full rounded-full border border-slate-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Your Company"
                                required
                            />
                        </div>
                    </div>

                    {/* Website and Frames */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-slate-600 text-sm font-medium mb-2">Website URL</label>
                            <input
                                type="url"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                className="w-full rounded-full border border-slate-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="https://example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-slate-600 text-sm font-medium mb-2">Number of frames in the catalog</label>
                            <select
                                name="frames"
                                value={formData.frames}
                                onChange={handleChange}
                                className="w-full rounded-full border border-slate-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                <option value="">Select</option>
                                <option value="0-100">0-100</option>
                                <option value="100-500">100-500</option>
                                <option value="500-1000">500-1000</option>
                                <option value="1000+">1000+</option>
                            </select>
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-slate-600 text-sm font-medium mb-2">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full rounded-3xl border border-slate-300 px-5 py-3 min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Your message..."
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-4">
                        <button
                            type="submit"
                            className="px-10 py-3 bg-[#1e3a8a] text-white font-semibold rounded-full shadow-lg hover:bg-[#1a3276] transition-colors"
                        >
                            Request a demo
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default DemoSection
