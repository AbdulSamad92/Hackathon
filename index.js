import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, user => {
});