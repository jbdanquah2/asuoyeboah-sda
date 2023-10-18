import {Injectable} from "@angular/core";
import {AngularFireStorage} from "@angular/fire/compat/storage";


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: AngularFireStorage) {
  }

  // saveFile(file: File, path: string): Promise<string> {
  //   return new Promise<string>
  // }
}
