export interface Product {
    id: number
    name: string
    brand: string
    category: 'eyeglasses' | 'sunglasses' | 'sports'
    price: number
    image: string
    description: string
    inStock: boolean
    rating?: number
}

export const products: Product[] = [
    // Eyeglasses
    {
        id: 1,
        name: 'Classic Round Frames',
        brand: 'Diesel',
        category: 'eyeglasses',
        price: 129.99,
        image: '/assets/images/Diesel - DL5177 - Quarter.webp',
        description: 'Timeless round frames perfect for everyday wear. Durable and comfortable design.',
        inStock: true,
        rating: 4.5
    },
    {
        id: 2,
        name: 'Modern Square Frames',
        brand: 'Marc Jacobs',
        category: 'eyeglasses',
        price: 159.99,
        image: '/assets/images/Marc Jacobs - MARC 283 - Quarter.webp',
        description: 'Contemporary square frames with a sophisticated edge. Ideal for professional settings.',
        inStock: true,
        rating: 4.8
    },
    {
        id: 3,
        name: 'Aviator Style Frames',
        brand: 'Tommy Hilfiger',
        category: 'eyeglasses',
        price: 149.99,
        image: '/assets/images/Tommy Hilfiger - TH 1018 - Quarter.webp',
        description: 'Classic aviator design with modern materials. Lightweight and stylish.',
        inStock: true,
        rating: 4.6
    },
    {
        id: 4,
        name: 'Browline Frames',
        brand: 'Frame Collection',
        category: 'eyeglasses',
        price: 119.99,
        image: '/assets/images/frame1.png',
        description: 'Vintage-inspired browline frames for a retro yet modern look.',
        inStock: true,
        rating: 4.4
    },
    {
        id: 5,
        name: 'Oval Frames',
        brand: 'Frame Collection',
        category: 'eyeglasses',
        price: 109.99,
        image: '/assets/images/frame2.png',
        description: 'Soft oval frames that complement all face shapes. Comfortable fit.',
        inStock: true,
        rating: 4.7
    },
    {
        id: 6,
        name: 'Rectangle Frames',
        brand: 'Frame Collection',
        category: 'eyeglasses',
        price: 134.99,
        image: '/assets/images/frame3.png',
        description: 'Sharp rectangular frames with contemporary styling. Perfect for the modern professional.',
        inStock: true,
        rating: 4.5
    },
    {
        id: 7,
        name: 'Cat Eye Frames',
        brand: 'Frame Collection',
        category: 'eyeglasses',
        price: 139.99,
        image: '/assets/images/frame4.png',
        description: 'Elegant cat-eye frames with a feminine touch. Classic and chic.',
        inStock: true,
        rating: 4.9
    },
    {
        id: 8,
        name: 'Wireframe Frames',
        brand: 'Frame Collection',
        category: 'eyeglasses',
        price: 99.99,
        image: '/assets/images/frame5.png',
        description: 'Lightweight wireframe design. Minimalist and barely-there aesthetic.',
        inStock: true,
        rating: 4.3
    },
    // Sunglasses
    {
        id: 9,
        name: 'Hypnotic Aviators',
        brand: 'Dior',
        category: 'sunglasses',
        price: 299.99,
        image: '/assets/images/Dior - DIOR HYPNOTIC 1 - Quarter.webp',
        description: 'Luxury aviator sunglasses with premium lenses. UV protection included.',
        inStock: true,
        rating: 4.9
    },
    {
        id: 10,
        name: 'Round Sunglasses',
        brand: 'Gucci',
        category: 'sunglasses',
        price: 349.99,
        image: '/assets/images/Gucci - GG0113S - Quarter.webp',
        description: 'Stylish round sunglasses with iconic Gucci branding. High-quality lenses.',
        inStock: true,
        rating: 5.0
    },
    {
        id: 11,
        name: 'Polo Sunglasses',
        brand: 'Ralph Lauren',
        category: 'sunglasses',
        price: 249.99,
        image: '/assets/images/Ralph Lauren - RA5150 - Quarter.webp',
        description: 'Classic polo design with superior craftsmanship. Timeless elegance.',
        inStock: true,
        rating: 4.8
    },
    {
        id: 12,
        name: 'Black Round Frames',
        brand: 'Premium',
        category: 'sunglasses',
        price: 179.99,
        image: '/assets/images/black-glasses-round-frame-transparent-260nw-1303077247.webp',
        description: 'Classic black round sunglasses. Versatile and stylish for any occasion.',
        inStock: true,
        rating: 4.6
    },
    {
        id: 13,
        name: 'Cool Sunglasses',
        brand: 'Style',
        category: 'sunglasses',
        price: 149.99,
        image: '/assets/images/cool-sunglasses-isolated-on-white-background-front-view-vector.jpg',
        description: 'Trendy sunglasses with modern design. Perfect for sunny days.',
        inStock: true,
        rating: 4.5
    },
    {
        id: 14,
        name: 'Vintage Sunglasses',
        brand: 'Retro',
        category: 'sunglasses',
        price: 159.99,
        image: '/assets/images/sunglasses-isolated-on-white-background-260nw-2285256445.webp',
        description: 'Retro-inspired sunglasses with a modern twist. UV400 protection.',
        inStock: true,
        rating: 4.7
    },
    {
        id: 15,
        name: 'Pink Glasses',
        brand: 'Fashion',
        category: 'eyeglasses',
        price: 124.99,
        image: '/assets/images/Glasses_pink_M-1.webp',
        description: 'Bold pink frames that make a statement. Fun and fashionable.',
        inStock: true,
        rating: 4.4
    },
    {
        id: 16,
        name: 'Metal Frame Glasses',
        brand: 'Classic',
        category: 'eyeglasses',
        price: 114.99,
        image: '/assets/images/Glasses-two-metal.webp',
        description: 'Durable metal frames with timeless design. Reliable and comfortable.',
        inStock: true,
        rating: 4.6
    }
]

export const categories = [
    { id: 'all', label: 'All Products', count: products.length },
    { id: 'eyeglasses', label: 'Eyeglasses', count: products.filter(p => p.category === 'eyeglasses').length },
    { id: 'sunglasses', label: 'Sunglasses', count: products.filter(p => p.category === 'sunglasses').length },
    { id: 'sports', label: 'Sports', count: products.filter(p => p.category === 'sports').length }
]

