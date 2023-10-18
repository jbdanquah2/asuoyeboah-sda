import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent {

  user: any;

  @Output() saveData: EventEmitter<any> = new EventEmitter<any>();

  @Input() showFooter: boolean = false;

  @Input()
  item: any

  @Input()
  itemIndex: number = 0;

  @Output()
  onEdit: EventEmitter<any> = new EventEmitter<any>();

  form!: FormGroup;

  programStatus: string = 'active';

  constructor(private fb: FormBuilder,
              private auth: AuthService) {

  }

  ngOnInit() {

    this.programStatus = this.item?.status ?? 'active';

    console.log('viewer')

    this.auth.currentUser.subscribe((user: any ) => {
      this.user = user;
    });

    this.form = this.fb.group({
      title: [this.item?.title??'', Validators.required],
      description: [this.item?.description??''],
      status: [this.item?.status??'active'],
      date: [this.item?.date?? Date.now()],
      time: [this.item?.time??'']
    });

  }

  onSave(form: any) {
    console.log('viewer: change', form.value);
    this.saveData.emit(form.value)
  }

}
