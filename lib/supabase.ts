import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://orggxuojtzyygbzvyllf.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yZ2d4dW9qdHp5eWdienZ5bGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzNDQyMjUsImV4cCI6MjAyMzkyMDIyNX0.YAFggnFiAj84N6O1ntCJEnrWAgB7xeHJvvKLd6rOFyM"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})