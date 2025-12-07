export interface BlogArticle {
    id: number
    title: string
    date: string
    category: string
    snippet: string
    image: string
    slug: string
    readTime?: string
    headerImage?: string
    keyPoints?: string[]
    summary?: string[]
    content?: string[] | Array<{
        heading: string
        paragraphs: string[]
        image?: string
    }>
}

export const blogArticles: BlogArticle[] = [
    {
        id: 1,
        title: 'DP Apps vs. Virtual Private: What Impact Does It Have on Online Conversions?',
        date: 'November 25, 2025',
        category: 'Technological expertise',
        snippet: 'When selling glasses online, accurate measurements and realistic visualization play a key role in guiding...',
        image: '/assets/images/concept-de-collage-de-reconnaissance-faciale (2).webp',
        slug: 'dp-apps-vs-virtual-private',
        readTime: '5 min read'
    },
    {
        id: 2,
        title: 'Introducing Fittingbox Footwear: A Key Step in Digital Fashion',
        date: 'November 25, 2025',
        category: 'Press releases',
        snippet: 'For nearly two decades, Fittingbox has been driven by a clear and ambitious mission to bring realism, emotion, and confidence to shopping...',
        image: '/assets/images/banner-mobile-footwear-blog.webp',
        slug: 'introducing-fittingbox-footwear',
        readTime: '4 min read',
        headerImage: '/assets/images/banner-mobile-footwear-blog.webp',
        keyPoints: [
            'Fittingbox expands into footwear with innovative digital try-on technology.',
            'Bringing the same realism and confidence to shoe shopping as eyewear.',
            'A key step in digital fashion transformation.',
            'Enhancing online shopping experience for footwear customers.',
            'Continuing Fittingbox\'s mission of digital innovation.'
        ],
        summary: [
            'Introduction to Fittingbox Footwear',
            'The Digital Fashion Revolution',
            'Technology and Innovation',
            'Customer Benefits',
            'Future of Digital Shopping',
            'Conclusion'
        ],
        content: [
            'For nearly two decades, Fittingbox has been driven by a clear and ambitious mission to bring realism, emotion, and confidence to shopping...',
            'This is a placeholder for the full article content. The complete article would be displayed here with proper formatting, images, and additional sections.'
        ]
    },
    {
        id: 3,
        title: 'AR Kiosks for DP: ROI for Optical Chains',
        date: 'November 19, 2025',
        category: 'In store',
        snippet: 'In today\'s world, accuracy and speed are non-negotiable. While stores aim to offer fast and seamless experiences while reducing...',
        image: '/assets/images/portrait-de-modele-de-tablette-montrant-sympathique-femme-optometriste.webp',
        slug: 'ar-kiosks-for-dp-roi',
        readTime: '3 min read',
        headerImage: '/assets/images/portrait-de-modele-de-tablette-montrant-sympathique-femme-optometriste.webp',
        keyPoints: [
            'AR DP kiosks improve fitting accuracy: Digital tools achieve 1mm accuracy, reducing costly refits and returns.',
            'ROI of up to 50% for retailers: Savings from fewer errors and less manual work pay for themselves within a year.',
            'AR self-service strengthens brand image: Digital kiosks enhance modern perception and increase in-store traffic.',
            'Digital tools free up staff time: Automation allows teams to focus on personalized consultations and upselling.',
            'Scalable AR solutions drive growth: Centralized updates and easy replication support retail network expansion.'
        ],
        summary: [
            'Why optical chains choose AR DP kiosks',
            'The Economics of a DP AR Kiosk: Initial Costs vs. Long-Term Benefits',
            'The Key ROI Drivers for Optical Retailers',
            'Real-world results of implementing AR DP kiosks',
            'How to Choose the Right DP AR Kiosk for Your Store',
            'Conclusion'
        ],
        content: [
            {
                heading: 'Why optical chains choose AR DP kiosks',
                paragraphs: [
                    'Optical chains face constant pressure to improve service speed by ensuring accurate measurements. Traditional manual methods, such as rulers or pupillometers, can introduce variability and increase the risk of dissatisfaction. A DP AR kiosk offers self-service accuracy, reducing staff workload and eliminating human alignment errors.',
                    'The global market for augmented reality in retail reached $2.22 billion in 2024 and is expected to grow to $2.66 billion in 2025, a sign of rapid adoption of AR tools that <u>reduce returns</u> and improve the customer experience. Early adopters of AR kiosks report a more modernized brand image and increased in-store traffic, improving perception and performance.'
                ]
            },
            {
                heading: 'The Economics of a DP AR Kiosk: Initial Costs vs. Long-Term Benefits',
                paragraphs: [
                    'Calculating the ROI of a kiosk involves weighing the initial costs—hardware, software, installation, and maintenance—against the long-term savings generated by reducing errors and manual labor. A simplified ROI formula is:',
                    '• <strong>ROI = (Risparmi - Costi) / Costi</strong>',
                    'For example, if a DP AR kiosk costs $30,000 for the entire chain and generates $45,000 in combined savings in the first year, <strong>ROI = (45,000 – 30,000) / 30,000 ≈ 50%</strong>. The savings come from fewer returns, fewer refilled orders, and fewer staff hours spent on manual measurements.'
                ]
            },
            {
                heading: 'The Key ROI Drivers for Optical Retailers',
                paragraphs: [
                    'Several factors contribute to a significant ROI when introducing a DP AR kiosk:',
                    '• <strong>Time savings:</strong> Staff no longer have to spend minutes on each measurement, allowing them to offer more personalized service or upselling activities.',
                    '• <strong>Better accuracy:</strong> Digital methods offer an accuracy of ±1 mm, much higher than printed rulers (±2-4 mm).',
                    '• <strong>Fewer returns or reassemblies:</strong> High precision reduces adjustments, shipping costs and customer frustration.',
                    '• <strong>Brand perception:</strong> AR self-service offers a technological and modern image, increasing loyalty and repeat purchases.',
                    '• <strong>Scalability:</strong> Once installed, kiosks can be replicated in multiple stores with low additional costs.'
                ]
            },
            {
                heading: 'Real-world results of implementing AR DP kiosks',
                paragraphs: [
                    'Recent data shows that more and more optical retailers are adopting digital measuring tools to reduce return rates and improve margins. For example, remote DP measuring tools have reduced returns thanks to improved lens centration.',
                    'Similarly, digital methods like the Optigrid platform ensure clinical accuracy (±1 mm), reducing manual rework and support requests. <u>The online eyewear market</u> is growing rapidly, and a growing share of sales comes from digital tools and convenience.'
                ],
                image: '/assets/images/portrait-de-modele-de-tablette-montrant-sympathique-femme-optometriste.webp'
            }
        ]
    },
    {
        id: 4,
        title: 'Measure Pupillary Distance at Home: A Complete Guide with a Smartphone',
        date: 'November 10, 2025',
        category: 'User experience',
        snippet: 'Measuring your pupillary distance is an essential step when ordering glasses online. This often overlooked factor...',
        image: '/assets/images/travailleur-de-penser-tout-en-regardant-l-ecran-d-ordinateur-portable.webp',
        slug: 'measure-pupillary-distance-at-home',
        readTime: '6 min read'
    },
    {
        id: 5,
        title: 'Fittingbox\'s next-generation StudioBox 3D wins i-Nov 2025 award',
        date: 'November 5, 2025',
        category: 'Company News - Technological Expertise',
        snippet: 'This is an important recognition for Fittingbox and our entire team: our innovation project for the development of the new...',
        image: '/assets/images/thumbnail blog prix inov 2025.webp',
        slug: 'fittingbox-studiobox-3d-wins-award',
        readTime: '4 min read'
    },
    {
        id: 6,
        title: 'Digital vs. Manual DP Rulers: Which Is More Accurate?',
        date: 'November 4, 2025',
        category: 'User Experience - E-commerce',
        snippet: 'Measuring the interpupillary distance is a crucial step in ensuring that your glasses provide clear vision.',
        image: '/assets/images/seduisante-jeune-homme-barbu-avec-tatouage-rose-portant-des-lunettes.webp',
        slug: 'digital-vs-manual-dp-rulers',
        readTime: '5 min read'
    },
    {
        id: 7,
        title: 'Is your eyewear website ready for Gen Z?',
        date: 'October 27, 2025',
        category: 'User experience',
        snippet: 'Gen Z now represents over 40% of global consumers, and their impact on e-commerce is undeniable. In the eyewear industry...',
        image: '/assets/images/colocataires-partageant-des-moments-heureux-ensemble.webp',
        slug: 'eyewear-website-ready-for-gen-z',
        readTime: '7 min read'
    },
    {
        id: 8,
        title: 'Is your eyewear website really suitable for Millennials?',
        date: 'October 20, 2025',
        category: 'User experience',
        snippet: 'Millennials represent one of the most important consumer groups for the eyewear industry, and their purchasing habits are...',
        image: '/assets/images/groupe-de-femmes-elegantes-profitant-de-la-ville-et-utilisant-une-tablette-numerique.webp',
        slug: 'eyewear-website-suitable-for-millennials',
        readTime: '6 min read'
    },
    {
        id: 9,
        title: 'CX Metrics to Optimize the Eyewear Experience',
        date: 'October 13, 2025',
        category: 'User experience',
        snippet: 'In the competitive eyewear market of 2025, measuring customer experience has become more sophisticated and strategic. Modern...',
        image: '/assets/images/homme-d-affaires-regardant-des-graphiques-financiers.webp',
        slug: 'cx-metrics-optimize-eyewear-experience',
        readTime: '8 min read'
    }
]

export const getBlogArticleBySlug = (slug: string): BlogArticle | undefined => {
    return blogArticles.find(article => article.slug === slug)
}

