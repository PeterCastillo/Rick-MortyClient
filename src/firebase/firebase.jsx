import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getFirestore , collection , addDoc , getDocs , doc , getDoc , query , where , setDoc , deleteDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDRFq4toMLecx_Zl1l9-GSbluUSOuM41eM",
  authDomain: "rickandmortyclient.firebaseapp.com",
  projectId: "rickandmortyclient",
  storageBucket: "rickandmortyclient.appspot.com",
  messagingSenderId: "750916013134",
  appId: "1:750916013134:web:09afd63795bbe4cfea871f"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export const registerNewUser = async(user) => {
  try {
    const collectionRef = collection(db,"users")
    const docRef = doc(collectionRef, user.uid)
    await setDoc(docRef,user)
  } catch(error){
    console.log(error)
  }
}

export async function userExist(uid) {
  const docRef = doc(db, 'users', uid)
  const res = await getDoc(docRef)
  return res.exists();
}

export const getUserInfo = async(uid) => {
  try {
    const docRef = doc(db,'users',uid)
    const document = await getDoc(docRef)
    return document.data()
  } catch(error){
    console.log(error)
  }
}

export async function existsUserName(username){
  const userrs = []
  const docsRef = collection(db,"users")
  const q = query(docsRef, where("username","==", username))
  const querySnapShot = await getDocs(q)

  querySnapShot.forEach(doc => {
    userrs.push(doc.data())
  })
  return userrs.length > 0 ? userrs[0].uid : null;
}


export const upDateUser = async(user) => {
  try {
    const collectionRef = collection(db,"users")
    const docRef = doc(collectionRef, user.uid)
    await setDoc(docRef,user)
  } catch(error){
    console.log(error)
  }
}

export const favorite = async (favorite) => {
  try {
    const docRef = collection(db, "favorites")
    const res = await addDoc(docRef, favorite)
    return res
  }catch(error) {
    console.log(error)
  }
}

export const getfavorites = async (uid) => {
  const favoritos= []
  try {
    const collectionRef = collection(db, "favorites")
    const q = query(collectionRef, where("uid" , "==" , uid)) 
    const querySnapShot = await getDocs(q)

    querySnapShot.forEach(docItem => {
      const itemFavorito  = {...docItem.data()}
      itemFavorito.docId = docItem.id
      favoritos.push(itemFavorito)
    })
    return favoritos
  }catch(error) {
    console.log(error)
  }
}

export const deleteFavorite = async (docId) => {
  try {
    if(docId){
      const docRef = doc(db, "favorites" , docId)
      const res = await deleteDoc(docRef)
      return res
    }
  }catch(error) {
    console.log(error)
  }
}

export const logOut = async () => {
    await auth.signOut()
}

