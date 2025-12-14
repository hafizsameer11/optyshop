interface ApiResponse {
    success: boolean
    message?: string
    data?: any
}

interface ApiClient {
    post: (url: string, data: any, showLoader?: boolean) => Promise<ApiResponse>
    get: (url: string, showLoader?: boolean) => Promise<ApiResponse>
    put: (url: string, data: any, showLoader?: boolean) => Promise<ApiResponse>
    delete: (url: string, showLoader?: boolean) => Promise<ApiResponse>
}

const getBaseUrl = (): string => {
    // Use environment variable if available, otherwise default to empty (relative URLs)
    return import.meta.env.VITE_API_BASE_URL || ''
}

const apiClient: ApiClient = {
    post: async (url: string, data: any, showLoader: boolean = true): Promise<ApiResponse> => {
        try {
            const baseUrl = getBaseUrl()
            const fullUrl = baseUrl ? `${baseUrl}${url}` : url

            const response = await fetch(fullUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            const result = await response.json()

            if (!response.ok) {
                return {
                    success: false,
                    message: result.message || 'An error occurred',
                    data: result,
                }
            }

            return {
                success: true,
                message: result.message,
                data: result,
            }
        } catch (error: any) {
            return {
                success: false,
                message: error.message || 'Network error occurred',
            }
        }
    },

    get: async (url: string, showLoader: boolean = true): Promise<ApiResponse> => {
        try {
            const baseUrl = getBaseUrl()
            const fullUrl = baseUrl ? `${baseUrl}${url}` : url

            const response = await fetch(fullUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            const result = await response.json()

            if (!response.ok) {
                return {
                    success: false,
                    message: result.message || 'An error occurred',
                    data: result,
                }
            }

            return {
                success: true,
                message: result.message,
                data: result,
            }
        } catch (error: any) {
            return {
                success: false,
                message: error.message || 'Network error occurred',
            }
        }
    },

    put: async (url: string, data: any, showLoader: boolean = true): Promise<ApiResponse> => {
        try {
            const baseUrl = getBaseUrl()
            const fullUrl = baseUrl ? `${baseUrl}${url}` : url

            const response = await fetch(fullUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            const result = await response.json()

            if (!response.ok) {
                return {
                    success: false,
                    message: result.message || 'An error occurred',
                    data: result,
                }
            }

            return {
                success: true,
                message: result.message,
                data: result,
            }
        } catch (error: any) {
            return {
                success: false,
                message: error.message || 'Network error occurred',
            }
        }
    },

    delete: async (url: string, showLoader: boolean = true): Promise<ApiResponse> => {
        try {
            const baseUrl = getBaseUrl()
            const fullUrl = baseUrl ? `${baseUrl}${url}` : url

            const response = await fetch(fullUrl, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            const result = await response.json()

            if (!response.ok) {
                return {
                    success: false,
                    message: result.message || 'An error occurred',
                    data: result,
                }
            }

            return {
                success: true,
                message: result.message,
                data: result,
            }
        } catch (error: any) {
            return {
                success: false,
                message: error.message || 'Network error occurred',
            }
        }
    },
}

export { apiClient }
export type { ApiResponse, ApiClient }

