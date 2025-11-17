export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-13'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Validate required environment variables
const projectIdEnv = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

if (!projectIdEnv && process.env.NODE_ENV === 'development') {
  console.warn(
    'Warning: NEXT_PUBLIC_SANITY_PROJECT_ID is not set. Please set it in your .env.local file.'
  )
}

export const projectId = projectIdEnv || 'placeholder'
