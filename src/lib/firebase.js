import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, query, where, getDocs, serverTimestamp } from 'firebase/firestore'

// Firebase configuration
// Replace these values with your Firebase project config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'your-api-key',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'your-project.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'your-project-id',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'your-project.appspot.com',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '123456789',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:123456789:web:abc123',
}

// Initialize Firebase
let app
let db

try {
  app = initializeApp(firebaseConfig)
  db = getFirestore(app)
} catch (error) {
  console.warn('Firebase initialization failed. Running in demo mode.', error)
}

/**
 * Add an email to the waitlist
 * @param {string} email - The email to add
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function addToWaitlist(email) {
  // Demo mode - if Firebase isn't configured, simulate success
  if (!db || firebaseConfig.apiKey === 'your-api-key') {
    console.log('Demo mode: Would add email to waitlist:', email)
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    return { success: true, message: 'Added to waitlist (demo mode)' }
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
