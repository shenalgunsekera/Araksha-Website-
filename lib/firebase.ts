// Firebase client — connects to the SAME project as the Araksha staff app,
// so customer accounts and submitted quotes live in one Firestore.
import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  type Auth,
} from 'firebase/auth';
import { getStorage, type FirebaseStorage } from 'firebase/storage';

// The Firebase WEB config is not a secret (it ships in the client bundle and is
// safe to expose — access is controlled by the Firestore/Storage security
// rules). The values MUST come from env (NEXT_PUBLIC_FIREBASE_* — .env.local
// locally, Project Settings → Environment Variables on Vercel). The
// placeholder fallbacks are non-empty so `getAuth` doesn't crash the BUILD
// during prerender when env vars are missing — auth simply fails at runtime
// until the real values are configured, instead of silently using another
// project's database.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'MISSING_FIREBASE_API_KEY',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'missing.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'missing-project',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'missing.appspot.com',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '0',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:0:web:missing',
};

// Reuse the app across hot-reloads / route changes (Next.js can re-import).
const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db: Firestore = getFirestore(app);
export const auth: Auth = getAuth(app);
export const storage: FirebaseStorage = getStorage(app);

// Customers stay logged in across visits (better UX than the staff app's
// session-only persistence). Guarded for SSR.
if (typeof window !== 'undefined') {
  setPersistence(auth, browserLocalPersistence).catch(() => {});
}

export default app;
