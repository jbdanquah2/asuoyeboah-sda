import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AuthService} from "../services/auth.service";
import {Album} from "../models/album.model";

@Component({
  selector: 'add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.scss']
})
export class AddPhotoComponent {

  user: any;

  @Output() saveData: EventEmitter<any> = new EventEmitter<any>();

  @Input() showFooter: boolean = false;

  @Input()
  photo: any

  @Input()
  albums: Album[] = [];

  @Input()
  itemIndex: number = 0;

  @Output()
  onEdit: EventEmitter<any> = new EventEmitter<any>();

  form!: FormGroup;

  imagePreview: string = '';

  constructor(private fb: FormBuilder,
              private auth: AuthService) {

  }

  ngOnInit() {

    this.auth.currentUser.subscribe((user: any ) => {
      this.user = user;
    });

    this.form = this.fb.group({
      title: [this.photo?.title??'', Validators.required],
      description: [this.photo?.description??''],
      albumId: [this.photo?.albumId??''],

    });

  }

  onSave(form: any) {
    console.log('viewer: change', form.value);
    this.saveData.emit(form.value)
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log('input', input)
    const file = input.files?.[0];
    console.log('file', file)

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        this.imagePreview = reader.result as string;
        console.log('imagePreview', this.imagePreview)
      }
      reader.readAsDataURL(file);
      console.log('reader.readAsDataURL(file);', reader.readAsDataURL(file))
    }
  }
}
