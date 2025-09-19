// ================================
// DisasterUnified - Environment Variables Usage Examples
// ================================

// ================================
// Supabase Client Setup (UserC/src/supabaseClient.js)
// ================================
import { createClient } from '@supabase/supabase-js'

// ⬇ These values come from your .env.local file
const supabaseUrl = process.env.VITE_SUPABASE_URL || "https://frzhnvkojtiuvwvgqiui.supabase.co"
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyemhudmtvanRpdXZ3dmdxaXVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxMTU1NDYsImV4cCI6MjA3MzY5MTU0Nn0.UgZIXvqeRd5_6zVAAqvb9vecdoJKxOZ_R_dCbNNzMe8"

export const supabase = createClient(supabaseUrl, supabaseKey)

// ================================
// OpenAI API Setup (for Whisper + AI Predictions)
// ================================
const openaiApiKey = process.env.VITE_OPENAI_API_KEY

// Voice Support - Whisper API (NO separate SPEECH_API_KEY needed)
const whisperConfig = {
  apiKey: openaiApiKey,
  model: 'whisper-1',
  language: 'en' // or 'hi' for Hindi, 'auto' for auto-detect
}

// AI Predictions
const gptConfig = {
  apiKey: openaiApiKey,
  model: 'gpt-4',
  temperature: 0.7
}

// ================================
// Weather API Setup
// ================================
const weatherApiKey = process.env.VITE_WEATHER_API_KEY
const weatherBaseUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${weatherApiKey}`

// ================================
// Twitter API Setup (for social media monitoring)
// ================================
const twitterConfig = {
  apiKey: process.env.TWITTER_API_KEY,
  apiSecret: process.env.TWITTER_API_SECRET,
  bearerToken: process.env.TWITTER_BEARER_TOKEN
}

// ================================
// Application URLs (for integration)
// ================================
const appUrls = {
  main: process.env.VITE_APP_URL || 'http://localhost:3000',
  live: process.env.VITE_LIVE_PAGE_URL || 'http://localhost:3002',
  predictions: process.env.VITE_PREDICTION_PAGE_URL || 'http://localhost:3003',
  voice: process.env.VITE_VOICE_SUPPORT_URL || 'http://localhost:3004',
  api: process.env.VITE_API_BASE_URL || 'http://localhost:3001'
}

// ================================
// Feature Flags (for conditional features)
// ================================
const features = {
  voiceSupport: process.env.VITE_ENABLE_VOICE_SUPPORT === 'true',
  liveData: process.env.VITE_ENABLE_LIVE_DATA === 'true',
  predictions: process.env.VITE_ENABLE_PREDICTIONS === 'true',
  socialMedia: process.env.VITE_ENABLE_SOCIAL_MEDIA === 'true'
}

// ================================
// Usage Examples
// ================================

// Example 1: Check if voice support is enabled
if (features.voiceSupport) {
  console.log('Voice support is enabled - using Whisper API')
  // Initialize speech-to-text with OpenAI Whisper
}

// Example 2: Dynamic API endpoint construction
const constructApiUrl = (endpoint) => {
  return `${appUrls.api}/${endpoint}`
}

// Example 3: Environment-specific logging
if (process.env.NODE_ENV === 'development') {
  console.log('🔧 Development mode - all features enabled')
  console.log('Supabase URL:', supabaseUrl)
  console.log('OpenAI configured:', !!openaiApiKey)
}

// ================================
// Export for use in other files
// ================================
export {
  supabase,
  openaiApiKey,
  whisperConfig,
  gptConfig,
  weatherApiKey,
  twitterConfig,
  appUrls,
  features
}