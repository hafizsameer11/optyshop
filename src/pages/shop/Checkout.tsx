import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useCart } from '../../context/CartContext'

const Checkout: React.FC = () => {
    const { cartItems, getTotalPrice, getTotalItems, clearCart } = useCart()
    const [isProcessing, setIsProcessing] = useState(false)
    const [isCompleted, setIsCompleted] = useState(false)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
        country: '',
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsProcessing(true)

        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000))

        setIsProcessing(false)
        setIsCompleted(true)
        clearCart()
    }

    if (cartItems.length === 0 && !isCompleted) {
        return (
            <div className="bg-white min-h-screen">
                <Navbar />
                <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
                    <div className="w-[90%] mx-auto max-w-4xl text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Your cart is empty
                        </h1>
                        <Link
                            to="/shop"
                            className="inline-block px-8 py-3 rounded-lg bg-blue-950 text-white font-semibold hover:bg-blue-900 transition-colors duration-300"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }

    if (isCompleted) {
        return (
            <div className="bg-white min-h-screen">
                <Navbar />
                <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
                    <div className="w-[90%] mx-auto max-w-4xl">
                        <div className="text-center space-y-6 md:space-y-8">
                            <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Order Placed Successfully!
                            </h1>
                            <p className="text-lg text-gray-600">
                                Thank you for your purchase. Your order has been confirmed.
                            </p>
                            <p className="text-base text-gray-500">
                                You will receive an email confirmation shortly.
                            </p>
                            <Link
                                to="/shop"
                                className="inline-block px-8 py-3 rounded-lg bg-blue-950 text-white font-semibold hover:bg-blue-900 transition-colors duration-300"
                            >
                                Continue Shopping
                            </Link>
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

            {/* Breadcrumbs */}
            <div className="bg-white py-4 px-4 sm:px-6 border-b border-gray-200">
                <div className="w-[90%] mx-auto max-w-7xl">
                    <nav className="flex items-center gap-2 text-sm text-gray-900">
                        <Link to="/" className="flex items-center gap-2 hover:text-gray-700 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            <span>HOME</span>
                        </Link>
                        <span className="text-gray-500">&gt;</span>
                        <Link to="/shop" className="hover:text-gray-700 transition-colors">
                            SHOP
                        </Link>
                        <span className="text-gray-500">&gt;</span>
                        <Link to="/cart" className="hover:text-gray-700 transition-colors">
                            CART
                        </Link>
                        <span className="text-gray-500">&gt;</span>
                        <span className="text-gray-900">CHECKOUT</span>
                    </nav>
                </div>
            </div>

            {/* Checkout Content */}
            <section className="bg-gray-50 py-12 md:py-16 lg:py-20 px-4 sm:px-6">
                <div className="w-[90%] mx-auto max-w-7xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                        Checkout
                    </h1>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Checkout Form */}
                        <div className="lg:col-span-2">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Shipping Information */}
                                <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
                                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                                        Shipping Information
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                First Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                required
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Last Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                required
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Address <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                required
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                City <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                required
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                ZIP Code <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="zipCode"
                                                required
                                                value={formData.zipCode}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Country <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                name="country"
                                                required
                                                value={formData.country}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            >
                                                <option value="">Select Country</option>
                                                <option value="US">United States</option>
                                                <option value="FR">France</option>
                                                <option value="UK">United Kingdom</option>
                                                <option value="DE">Germany</option>
                                                <option value="CA">Canada</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Information */}
                                <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
                                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                                        Payment Information
                                    </h2>
                                    <div className="space-y-4 md:space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Card Number <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="cardNumber"
                                                required
                                                placeholder="1234 5678 9012 3456"
                                                maxLength={19}
                                                value={formData.cardNumber}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Cardholder Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="cardName"
                                                required
                                                value={formData.cardName}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Expiry Date <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="expiryDate"
                                                    required
                                                    placeholder="MM/YY"
                                                    maxLength={5}
                                                    value={formData.expiryDate}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    CVV <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="cvv"
                                                    required
                                                    placeholder="123"
                                                    maxLength={3}
                                                    value={formData.cvv}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="flex gap-4">
                                    <Link
                                        to="/cart"
                                        className="flex-1 px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors duration-300 text-center"
                                    >
                                        Back to Cart
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={isProcessing}
                                        className="flex-1 px-6 py-3 rounded-lg bg-blue-950 text-white font-semibold hover:bg-blue-900 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isProcessing ? 'Processing...' : `Place Order ($${getTotalPrice().toFixed(2)})`}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl p-6 shadow-md sticky top-4">
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                                    Order Summary
                                </h2>

                                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="flex gap-3 pb-4 border-b border-gray-200">
                                            <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-contain p-1"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement
                                                        target.src = '/assets/images/frame1.png'
                                                    }}
                                                />
                                            </div>
                                            <div className="flex-grow">
                                                <h4 className="text-sm font-semibold text-gray-900">
                                                    {item.name}
                                                </h4>
                                                <p className="text-xs text-gray-500">
                                                    Qty: {item.quantity}
                                                </p>
                                                <p className="text-sm font-semibold text-blue-950">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-3 border-t border-gray-200 pt-4">
                                    <div className="flex justify-between text-gray-700">
                                        <span>Subtotal ({getTotalItems()} items)</span>
                                        <span>${getTotalPrice().toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-700">
                                        <span>Shipping</span>
                                        <span className="text-green-600">Free</span>
                                    </div>
                                    <div className="flex justify-between text-lg md:text-xl font-bold text-gray-900 pt-2 border-t border-gray-200">
                                        <span>Total</span>
                                        <span>${getTotalPrice().toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Checkout

