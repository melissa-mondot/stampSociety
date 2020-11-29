// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app"

// Add the Firebase services that you want to use
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
}

// Initialize firebase and firestore
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export const createSubRequest = (subscriberEmail) => {
  let timestamp = new Date()
  return db.collection("newsletterRequests").add({
    createdAt: timestamp,
    email: subscriberEmail,
  })
}

export const createMessage = (contactName, contactEmail, contactMessage) => {
  let timestamp = new Date()
  return db.collection("contactFormSubmissions").add({
    createAt: timestamp,
    name: contactName,
    email: contactEmail,
    message: contactMessage,
  })
}
