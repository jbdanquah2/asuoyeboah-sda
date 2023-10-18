import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  @Input()
  title: string = '';

  @Input()
  description: string = '';

  @Output()
  confirm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  closeConfirmDialog: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {

  }

  onConfirm() {
    this.confirm.emit(true);
  }

  onCloseConfirmDialog() {
    this.closeConfirmDialog.emit(true);
  }
}
