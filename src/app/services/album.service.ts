import {Injectable} from "@angular/core";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Program} from "../models/program.model";
import {from, fromEventPattern, Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private db: AngularFirestore) {

  }

   getAlbums(): Observable<any> {
    const albumRef =  this.db.firestore
      .collection(`albums`)
      .get();

    return from(albumRef.then((result) =>
      result.docs.map((snap) => {
        return {
          id: snap.id,
          ...(<any>snap.data()),
        };
      })
    ));
  }
}
