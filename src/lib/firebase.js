import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, query, where, getDocs, serverTimestamp } from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDf7ZdhnDUXGWA7_sTNltzLzbgOSbwQyg0",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "wholspacewaitlist.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "wholspacewaitlist",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "wholspacewaitlist.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1042572889329",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1042572889329:web:46363421c970fc82fb2d50",
}

// Check if Firebase is properly configured
const isFirebaseConfigured = () => {
  const hasAllRequired = firebaseConfig.apiKey && 
         firebaseConfig.projectId && 
         firebaseConfig.authDomain &&
         firebaseConfig.appId
  
  if (!hasAllRequired) {
    console.warn('Firebase config missing required fields:', {
      apiKey: !!firebaseConfig.apiKey,
      projectId: !!firebaseConfig.projectId,
      authDomain: !!firebaseConfig.authDomain,
      appId: !!firebaseConfig.appId
    })
  }
  
  return hasAllRequired
}

// Initialize Firebase
let app
let db

if (isFirebaseConfigured()) {
  try {
    app = initializeApp(firebaseConfig)
    db = getFirestore(app)
    console.log('✅ Firebase initialized successfully')
  } catch (error) {
    console.error('❌ Firebase initialization failed:', error)
    db = null
  }
} else {
  console.error('❌ Firebase not configured. Missing environment variables.')
  console.error('Current config values:', {
    apiKey: firebaseConfig.apiKey ? `${firebaseConfig.apiKey.substring(0, 10)}...` : 'missing',
    projectId: firebaseConfig.projectId || 'missing',
    authDomain: firebaseConfig.authDomain || 'missing',
    appId: firebaseConfig.appId || 'missing'
  })
}

/**
 * Add an email to the waitlist
 * @param {string} email - The email to add
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function addToWaitlist(email) {
  // Demo mode - if Firebase isn't configured, throw error
  if (!db || !isFirebaseConfigured()) {
    const errorMsg = 'Firebase is not configured. Please set environment variables in your deployment platform.'
    console.error('Demo mode detected:', errorMsg)
    throw new Error('Service temporarily unavailable. Please try again later.')
  }

  try {
    // Check for duplicate email
    const waitlistRef = collection(db, 'waitlist')
    const q = query(waitlistRef, where('email', '==', email.toLowerCase()))
    const querySnapshot = await getDocs(q)

    if (!querySnapshot.empty) {
      throw new Error('This email is already on the waitlist!')
    }

    // Add new email to waitlist
    await addDoc(waitlistRef, {
      email: email.toLowerCase(),
      joinedAt: serverTimestamp(),
      source: 'landing_page',
    })

    return { success: true, message: 'Successfully added to waitlist!' }
  } catch (error) {
    console.error('Error adding to waitlist:', error)
    throw error
  }
}

export { db }
