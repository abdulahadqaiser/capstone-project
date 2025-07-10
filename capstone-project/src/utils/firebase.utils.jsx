import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged

} from 'firebase/auth'
import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore'
import { Await } from 'react-router-dom';
const firebaseConfig = {
    apiKey: "AIzaSyARtn5fJAOarjMFDAK8JGvQohFmSYuyWZo",
    authDomain: "capstone-project-79963.firebaseapp.com",
    projectId: "capstone-project-79963",
    storageBucket: "capstone-project-79963.firebasestorage.app",
    messagingSenderId: "884762813323",
    appId: "1:884762813323:web:8c9d4ec22cee155c8dc58e"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const db = getFirestore();
export const addCollectionAndDocuments = async (collectionkey,objectsToAdd)=>{
    const collectionRef = collection(db,collectionkey)

    const batch = writeBatch(db)
    objectsToAdd.forEach((object)=>{
        const docRef = doc(collectionRef,object.title.toLowerCase());
        batch.set(docRef,object);
    });
     await batch.commit();
     console.log('done')
}
export const getCatagoriesAndDocuments = async ()=>{
    const collectionRef = collection(db , 'categories');
    const q  = query(collectionRef);
    const querySnapshot  = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc,docSnapshot)=>{
        const {title,items}  = docSnapshot.data();
        acc[title.toLowerCase()]= items;
        return acc

    },{})
    return categoryMap;

}
export const creatUserDocumentFromAuth = async (userauth, additionalInformation={}) => {
    if (!userauth) return;
    const userDocref = doc(db, 'users', userauth.uid)
    const userSnapShot = await getDoc(userDocref);
    console.log(userDocref)
    console.log(userSnapShot.exists());
    if (!userSnapShot.exists()) {
        const { displayName, email } = userauth;
        const createdAt = new Date();
        try {
            await setDoc(userDocref, { displayName, email, createdAt ,...additionalInformation});
        }
        catch (error) {
            console.log('error creating user ', error.message)

        }
    }


    return userDocref;

};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)

}


export const signInWithAuthEmailAndPassword = async (email, password) => {
    if (!email || !password) return

    return await signInWithEmailAndPassword(auth, email, password)

}

export const signOutUser = async ()=> await signOut(auth);

export const onAuthStateChangedListener = (callback)=>{
    onAuthStateChanged(auth, callback)
}