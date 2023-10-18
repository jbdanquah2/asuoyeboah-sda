import {Injectable} from "@angular/core";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Program} from "../models/program.model";
import {from, fromEventPattern, Observable} from "rxjs";
import { map, catchError } from 'rxjs/operators';
import firebase from "firebase/compat/app";


@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private db: AngularFirestore) {

  }

  getPrograms(userId: string): Observable<Program[]> {

    return from(this.db.firestore
      .collection(`programs`)
      .get()
      .then((result) =>
        result.docs.map((snap) => {
          return {
            id: snap.id,
            ...(<any>snap.data()),
          };
        })
      ));
  }


  /**
   * Get real time programs
   * @returns Observable<Program[]>
   * @description This method returns an observable that emits an array of program.
   * - It uses the fromEventPattern operator to listen to the onSnapshot event of the collection reference.
   * - The onSnapshot event is triggered whenever there is a change in the collection.
   * - The event handler receives a snapshot of the collection. The snapshot contains an array of documents.
   * - We map the array of documents to an array of tasks and return it.
   * - The fromEventPattern operator returns an observable that emits the array of program.
   *
   */
  getActiveRealTimePrograms(): Observable<Program[]> {

    const collectionRef = this.db.firestore
      .collection('programs')
      .where('status', '!=', 'inactive')
      .orderBy('status')
      .orderBy('date', 'asc');

    const addListener = (handler: (snapshot: firebase.firestore.QuerySnapshot) => void) => {
      // @ts-ignore
      return collectionRef.onSnapshot(handler, (error) => {
        console.error('Error in Firestore listener:', error);
      });
    };

    return fromEventPattern<firebase.firestore.QuerySnapshot>(
      addListener,
      (handler, unsubscribe) => unsubscribe()
    ).pipe(
      map((snapshot: firebase.firestore.QuerySnapshot) => {
        return snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as any),
        }));
      }),
      catchError((error) => {
        console.error('Error in Firestore data mapping:', error);
        return [];
      })
    );
  }

  getAllRealTimePrograms(): Observable<Program[]> {

    const collectionRef = this.db.firestore
      .collection('programs')
      .orderBy('date', 'asc');

    const addListener = (handler: (snapshot: firebase.firestore.QuerySnapshot) => void) => {
      // @ts-ignore
      return collectionRef.onSnapshot(handler, (error) => {
        console.error('Error in Firestore listener:', error);
      });
    };

    return fromEventPattern<firebase.firestore.QuerySnapshot>(
      addListener,
      (handler, unsubscribe) => unsubscribe()
    ).pipe(
      map((snapshot: firebase.firestore.QuerySnapshot) => {
        return snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as any),
        }));
      }),
      catchError((error) => {
        console.error('Error in Firestore data mapping:', error);
        return [];
      })
    );
  }

  async postProgram(program: Partial<Program>, userId: string) {
    console.log('Saving program', program);
    return await this.db.firestore.doc(`programs/${program.id}`).set(program);

  }

  async deleteProgram(programId: string) {
    console.log('Delete program',  `programs/${programId}`);
    return await this.db.firestore.doc(`programs/${programId}`).delete();
  }


}
