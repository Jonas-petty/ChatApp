import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAIymY5ZFI5A9meq5416PY3hdu7yNdMOME",
    authDomain: "pettychat-a10ab.firebaseapp.com",
    projectId: "pettychat-a10ab",
    storageBucket: "pettychat-a10ab.appspot.com",
    messagingSenderId: "285099876791",
    appId: "1:285099876791:web:1b74360c2ea0ecfe1f8832",
    measurementId: "G-JMWZ7KGS3N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const analytics = getAnalytics(app);

const db = getFirestore(app)

export { auth, db}
