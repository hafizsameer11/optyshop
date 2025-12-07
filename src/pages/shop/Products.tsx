import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useCart } from '../../context/CartContext'
import { products, categories } from '../../data/productsData'
import type { Product } from '../../data/productsData'

const Products: React.FC = () => {
    const { addToCart } = useCart()
    const [selectedCategory, setSelectedCategory] = useState<string>('all')
    const [searchTerm, setSearchTerm] = useState('')

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesCategory && matchesSearch
    })

    const handleAddToCart = (product: Product) => {
        addToCart(product)
    }

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-950 to-blue-800 py-12 md:py-16 lg:py-20 px-4 sm:px-6">
                <div className="w-[90%] mx-auto max-w-7xl">
                    <div className="text-center text-white">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                            Shop Glasses
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                            Discover our wide collection of eyeglasses and sunglasses
                        </p>
                    </div>
                </div>
            </section>

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
                        <span className="text-gray-900">SHOP</span>
                    </nav>
                </div>
            </div>

            {/* Filters and Search */}
            <section className="bg-white py-8 px-4 sm:px-6">
                <div className="w-[90%] mx-auto max-w-7xl">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-8">
                        {/* Search */}
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-colors ${selectedCategory === category.id
                                        ? 'bg-blue-950 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {category.label} ({category.count})
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="bg-gray-50 py-12 md:py-16 lg:py-20 px-4 sm:px-6">
                <div className="w-[90%] mx-auto max-w-7xl">
                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-lg md:text-xl text-gray-600">
                                No products found. Try adjusting your filters.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                            {filteredProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
                                >
                                    {/* Product Image */}
                                    <div className="relative h-64 md:h-72 bg-gray-100 overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-contain p-4"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement
                                                target.src = '/assets/images/frame1.png'
                                            }}
                                        />
                                        {!product.inStock && (
                                            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                                Out of Stock
                                            </div>
                                        )}
                                    </div>

                                    {/* Product Info */}
                                    <div className="p-4 md:p-6 flex-grow flex flex-col">
                                        <div className="mb-2">
                                            <p className="text-sm text-gray-500 uppercase tracking-wide">
                                                {product.brand}
                                            </p>
                                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-1">
                                                {product.name}
                                            </h3>
                                        </div>

                                        <p className="text-sm text-gray-600 mb-4 flex-grow">
                                            {product.description}
                                        </p>

                                        {/* Rating */}
                                        {product.rating && (
                                            <div className="flex items-center gap-1 mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        className={`w-4 h-4 ${i < Math.floor(product.rating!)
                                                            ? 'text-yellow-400'
                                                            : 'text-gray-300'
                                                            }`}
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                                <span className="text-sm text-gray-500 ml-1">
                                                    ({product.rating})
                                                </span>
                                            </div>
                                        )}

                                        {/* Price and Add to Cart */}
                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
                                            <span className="text-2xl font-bold text-blue-950">
                                                ${product.price.toFixed(2)}
                                            </span>
                                            <button
                                                onClick={() => handleAddToCart(product)}
                                                disabled={!product.inStock}
                                                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-colors ${product.inStock
                                                    ? 'bg-blue-950 text-white hover:bg-blue-900'
                                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                                    }`}
                                            >
                                                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Products

