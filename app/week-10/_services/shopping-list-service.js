import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const itemsSnapshot = await getDocs(itemsRef);

    const items = itemsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return items;
  } catch (e) {
    console.log("Error in getItems: ", e);
  }
};

export const addItem = async (userId, item) => {
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;
  } catch (e) {
    console.log("Error in addItems: ", e);
  }
};
