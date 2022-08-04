import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, doc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore'

export const firebaseService = {
  init,
  addTask,
  deleteTask,
  updateTask
}
const firebaseConfig = {
  apiKey: "AIzaSyB561FTqhehgnLKTIDLZrUKQemhyN3dM2Q",
  authDomain: "task-manager-fe3c4.firebaseapp.com",
  projectId: "task-manager-fe3c4",
  storageBucket: "task-manager-fe3c4.appspot.com",
  messagingSenderId: "128400405817",
  appId: "1:128400405817:web:8b2ae2e7fab6fcd060a4e8"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()


// collection ref
const colRef = collection(db, 'tasks')

// get collection data

async function init() {
  let snapshots = await getDocs(colRef)
  let tasks = []
  snapshots.docs.forEach((doc) => {
    tasks.push({ ...doc.data(), id: doc.id })
  })

  return tasks
}

async function updateTask(task) {
  const docRef = doc(db, 'tasks', task.id)
  const docSnap = await getDoc(docRef)
  await updateDoc(docRef, {
    ...docSnap.data(),
    ...task
  })
}

async function deleteTask(id) {
  const docRef = doc(db, "tasks", id)
  await deleteDoc(docRef)
}

async function addTask(task) {
  await addDoc(colRef, task)
}