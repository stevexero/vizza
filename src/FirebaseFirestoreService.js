import firebase from './FirebaseConfig';
import {
  addDoc,
  doc,
  getDoc,
  collection as firestoreCollection,
  getDocs,
  //   query,
  //   where,
  //   orderBy,
  //   limit,
  //   startAfter,
  //   updateDoc,
  //   deleteDoc,
} from 'firebase/firestore';

const db = firebase.firestore;

const readAdminUids = async () => {
  const docRef = doc(db, 'admin', 'mIMD9AAn2o5c1QeZOfvr');
  const docSnap = await getDoc(docRef);

  return docSnap.data().userUid;
};

const readCollection = async (collectionName) => {
  const querySnapshot = await getDocs(firestoreCollection(db, collectionName));
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     return doc.data();
  //   });
  return querySnapshot;
};

const createDocument = (collection, document) => {
  return addDoc(firestoreCollection(db, collection), document);
};

const readDocument = async (collection, id) => {
  const docRef = doc(db, collection, id);
  const docSnap = await getDoc(docRef);

  //   return getDoc(doc(firestoreCollection(db, collection), id));
  return docSnap;
};

const FirebaseFirestoreService = {
  readAdminUids,
  readCollection,
  createDocument,
  readDocument,
};

export default FirebaseFirestoreService;
