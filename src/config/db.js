// db.js
import { collection, addDoc, getFirestore, onSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { app } from './firebaseConfig';

const db = getFirestore(app);

export default db;

export const useNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'notes'), (snapshot) => {
      const fetchedNotes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setNotes(fetchedNotes);
    });

    return () => unsubscribe();
  }, []); // Empty dependency array for useEffect

  return notes;
};

export const addNote = async (note) => {
  await addDoc(collection(db, 'notes'), { text: note });
};

export const deleteNote = async (id) => {
  await deleteDoc(doc(db, 'notes', id));
};

export const updateNote = async (id, newText) => {
  const noteRef = doc(db, 'notes', id);
  await updateDoc(noteRef, { text: newText });
};
