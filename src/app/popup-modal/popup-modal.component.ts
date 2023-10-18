import {
  AfterContentChecked,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.scss']
})
export class PopupModalComponent implements AfterContentChecked, OnInit {
  @Input() program: any;
  @Input() title: string ='';
  @Input() icon: string ='';
  @Input() iconUrl: string ='';
  @Input() showFooter: boolean = false;
  @Output() saveModal: EventEmitter<void> = new EventEmitter<void>();
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Output() afterContentCheckedEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(private renderer: Renderer2) { }

  private scrollPosition: number = 0;

  ngOnInit(): void {
    this.scrollPosition = window.pageYOffset;
    this.disableScroll();
  }

  ngOnDestroy(): void {
    this.enableScroll();
    window.scrollTo(0, this.scrollPosition);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    window.scrollTo(0, this.scrollPosition);
  }

  private disableScroll(): void {
    const body = document.body;
    this.scrollPosition = window.pageYOffset;
    body.style.top = `-${this.scrollPosition}px`;
    body.classList.add('modal-open');
  }

  private enableScroll(): void {
    const body = document.body;
    body.style.top = '';
    body.classList.remove('modal-open');
  }

  save(): void {
    console.log('save', this.program);
    this.saveModal.emit(this.program);

    this.close();
  }

  close(): void {
    this.enableScroll();
    this.closeModal.emit();
  }

  ngAfterContentChecked() {
    this.afterContentCheckedEvent.emit();
  }
}
