import firebase from "firebase/compat/app";
import Timestamp = firebase.firestore.Timestamp;

export interface Program {
  id: string,
  title: string,
  description: string,
  imageUrl?: string,
  date: Date,
  createdAt: Timestamp,
  updatedAt: Timestamp,
  status: 'active' | 'inactive',
  order: number,
  isPrime: boolean
}
