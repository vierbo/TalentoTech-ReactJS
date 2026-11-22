import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";

// Referencia global a la colección "products" en Firestore
const productsRef = collection(db, "products");

/* -------------------------------------------------------------------------- */
/*                               TRAER PRODUCTOS                              */
/* -------------------------------------------------------------------------- */
export const getProducts = async () => {
  try {
    const snapshot = await getDocs(productsRef);
    const productsFormat = snapshot.docs.map((docItem) => ({
      id: docItem.id,
      ...docItem.data(),
    }));
    return productsFormat;
  } catch (error) {
    console.error("Error al traer productos:", error);
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                            TRAER PRODUCTO POR ID                           */
/* -------------------------------------------------------------------------- */
export const getProductById = async (id) => {
  try {
    const productRef = doc(productsRef, id);
    const snapshot = await getDoc(productRef);

    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    }
    return null;
  } catch (error) {
    console.error("Error al traer producto por ID:", error);
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                              ALTA DE PRODUCTO                              */
/* -------------------------------------------------------------------------- */
export const createProduct = async (productData) => {
  try {
    const docRef = await addDoc(productsRef, productData);
    return docRef.id;
  } catch (error) {
    console.error("Error al crear producto:", error);
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                           ACTUALIZAR PRODUCTO                              */
/* -------------------------------------------------------------------------- */
export const updateProduct = async (id, productData) => {
  try {
    const productRef = doc(productsRef, id);
    await updateDoc(productRef, productData);
  } catch (error) {
    console.error("Error al actualizar producto:", error);
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                            ELIMINAR PRODUCTO                               */
/* -------------------------------------------------------------------------- */
export const deleteProduct = async (id) => {
  try {
    const productRef = doc(productsRef, id);
    await deleteDoc(productRef);
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    throw error;
  }
};
