export const API_ROUTES = {
    FORMS: {
        DEMO: {
            SUBMIT: '/api/forms/demo/submit',
        },
        CONTACT: {
            SUBMIT: '/api/forms/contact/submit',
        },
        PRICING: {
            REQUEST: '/api/forms/pricing/request',
        },
    },
    AUTH: {
        LOGIN: '/api/auth/login',
        REGISTER: '/api/auth/register',
        LOGOUT: '/api/auth/logout',
        REFRESH: '/api/auth/refresh',
    },
    PRODUCTS: {
        LIST: '/api/products',
        DETAIL: (id: string) => `/api/products/${id}`,
    },
    CART: {
        GET: '/api/cart',
        ADD: '/api/cart/add',
        UPDATE: '/api/cart/update',
        REMOVE: '/api/cart/remove',
        CLEAR: '/api/cart/clear',
    },
    CHECKOUT: {
        CREATE: '/api/checkout/create',
        COMPLETE: '/api/checkout/complete',
    },
} as const

