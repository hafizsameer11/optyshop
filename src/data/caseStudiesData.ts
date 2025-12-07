export interface CaseStudy {
    id: number
    slug: string
    image: string
    title: string
    category: string
    description: string
    heroTitle?: string
    heroSubtitle?: string
    content?: {
        paragraph1?: string
        paragraph2?: string
        boldPhrases?: string[]
    }
    person?: {
        name: string
        role: string
    }
}

export const caseStudies: CaseStudy[] = [
    {
        id: 1,
        slug: 'smartbuyglasses',
        image: '/assets/images/[FBx]-SmartBuyGlasses-EN-thumbnail.webp',
        title: 'How SmartBuyGlasses Delivers a Seamless Digital Experience',
        category: 'Electronic retailer',
        description: 'Learn how SmartBuyGlasses integrates virtual try-on into its e-commerce stores across over 30 countries to enhance customer trust, user experience, and global innovation.',
        heroTitle: 'Enhancing eyewear shopping by integrating virtual trying-on',
        heroSubtitle: 'Case study from SmartBuyGlasses',
        content: {
            paragraph1: 'By offering a high-resolution virtual try-on feature, SmartBuyGlasses positions itself as an innovative player in the eyewear market.',
            paragraph2: 'By being able to try on glasses directly online, the purchasing process is simplified and shoppers can experience and purchase their new frames whenever and wherever they are.',
            boldPhrases: ['high-resolution virtual try-on feature', 'try on glasses directly online', 'whenever and wherever']
        },
        person: {
            name: 'Gaëtan Girin',
            role: 'Head of Digital'
        }
    },
    {
        id: 2,
        slug: 'specsavers',
        image: '/assets/images/[FBx]-Specsavers-EN-thumbnail.webp',
        title: 'How to drive a digital strategy in the eyewear industry across 11 countries?',
        category: 'Electronic retailer',
        description: 'Discover how Specsavers enhances customer experience through digital solutions, with Thomas Shilvack emphasizing the importance of online services for customer accessibility.',
        heroTitle: 'Enhancing customer experience through seamless digital solutions',
        heroSubtitle: 'Case study from Specsavers',
        content: {
            paragraph1: 'Specsavers is enhancing the customer experience through seamless digital solutions.',
            paragraph2: 'Focusing on providing the best online services is essential when it comes to making customers accessible in the eyewear market.',
            boldPhrases: ['seamless digital solutions', 'best online services', 'making customers accessible']
        },
        person: {
            name: 'Thomas Shilvock',
            role: 'Director of Strategic Development'
        }
    },
    {
        id: 3,
        slug: 'fielmann',
        image: '/assets/images/[FBx]-Fielmann-EN-thumbnail.webp',
        title: 'How Fielmann measures the ROI of its virtual test tool',
        category: 'Electronic retailer',
        description: 'Find out how Fielmann conducted an A/B test on 5 million page views to measure the benefits of a virtual try-on feature, with Stefan Wolk discussing its impact on engagement and conversion rates.',
        heroTitle: 'Measuring ROI through comprehensive A/B testing',
        heroSubtitle: 'Case study from Fielmann',
        content: {
            paragraph1: 'Fielmann ran an A/B test on 5 million page views to measure the benefits of a virtual try-on feature.',
            paragraph2: 'Stefan Wolk, Fielmann\'s e-commerce director, explains the impact on engagement and conversion rates.',
            boldPhrases: ['A/B test on 5 million page views', 'impact on engagement and conversion rates']
        },
        person: {
            name: 'Stefan Wolk',
            role: 'E-commerce Director at Fielmann'
        }
    },
    {
        id: 4,
        slug: 'project-lobster',
        image: '/assets/images/[FBx]-Project-Lobster-EN-thumbnail.webp',
        title: 'Lobster adds a handy feature for choosing the perfect frame',
        category: 'Electronic retailer',
        description: 'Ivan Odair, Project Lobster\'s CTO, shares insights on virtual try-on technology and how it helped bridge the gap between in-store and online experiences.',
        heroTitle: 'Bridging the gap between in-store and online experiences',
        heroSubtitle: 'Case study from Project Lobster',
        content: {
            paragraph1: 'Project Lobster adds a handy feature for choosing the perfect frame through virtual try-on technology.',
            paragraph2: 'This innovation helps bridge the gap between in-store and online experiences, providing customers with confidence in their purchase decisions.',
            boldPhrases: ['handy feature for choosing the perfect frame', 'bridge the gap between in-store and online']
        },
        person: {
            name: 'Ivan Odair',
            role: 'CTO at Project Lobster'
        }
    },
    {
        id: 5,
        slug: 'krass',
        image: '/assets/images/[FBx]-Krass-EN-thumbnail.webp',
        title: 'How KRASS responds to the need to try before you buy',
        category: 'In store',
        description: 'Learn how KRASS Optik uses virtual try-on and AR technology to improve the purchasing journey and offer an immersive way for customers to try on glasses online.',
        heroTitle: 'Responding to the need to try before you buy',
        heroSubtitle: 'Case study from KRASS',
        content: {
            paragraph1: 'KRASS Optik uses virtual try-on and AR technology to improve the purchasing journey.',
            paragraph2: 'This offers an immersive way for customers to try on glasses online, addressing the fundamental need to try before you buy.',
            boldPhrases: ['virtual try-on and AR technology', 'try before you buy']
        },
        person: {
            name: 'KRASS Team',
            role: 'Innovation Department'
        }
    },
    {
        id: 6,
        slug: 'greyhounders',
        image: '/assets/images/[FBx]-Greyhounders-EN-thumbnail.webp',
        title: 'How GreyHounders Made Buying Glasses Easier',
        category: 'Electronic retailer',
        description: 'Discover how Greyhounders opted for Fittingbox virtual fitting technology to position itself as a strong digital eyewear retailer and stand out from competitors.',
        heroTitle: 'Making it easier to buy glasses',
        heroSubtitle: 'Case study from Greyhounders',
        content: {
            paragraph1: 'By offering a high-resolution virtual try-on feature, GreyHounders positions itself as an innovative player in the eyewear market.',
            paragraph2: 'By being able to try on glasses directly online, the purchasing process is simplified and shoppers can experience and purchase their new frames whenever and wherever they are.',
            boldPhrases: ['high-resolution virtual try-on feature', 'try on glasses directly online', 'whenever and wherever']
        },
        person: {
            name: 'GreyHounders Team',
            role: 'Digital Innovation'
        }
    }
]

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
    return caseStudies.find(study => study.slug === slug)
}

