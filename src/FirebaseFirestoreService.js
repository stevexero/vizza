import firebase from './FirebaseConfig';
import {
  addDoc,
  doc,
  getDoc,
  collection as firestoreCollection,
  //   query,
  //   where,
  //   orderBy,
  //   limit,
  //   startAfter,
  //   getDocs,
  //   updateDoc,
  //   deleteDoc,
} from 'firebase/firestore';

const db = firebase.firestore;

const readAdminUids = async () => {
  const docRef = doc(db, 'admin', 'mIMD9AAn2o5c1QeZOfvr');
  const docSnap = await getDoc(docRef);

  return docSnap.data().userUid;
};

const createDocument = (collection, document) => {
  //   return db.collection(collection).add(document);
  return addDoc(firestoreCollection(db, collection), document);
};

const readDocument = (collection, id) => {
  return getDoc(doc(firestoreCollection(db, collection), id));
};

const FirebaseFirestoreService = {
  readAdminUids,
  createDocument,
  readDocument,
};

export default FirebaseFirestoreService;
