import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import Quill from 'quill';
import * as QuillNamespace from 'quill';

@Component({
  selector: 'text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements AfterViewInit {
  editor: Quill | null = null;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');

      const editorElement = this.elementRef.nativeElement.querySelector('#editor');
      console.log('here:', editorElement);

      const editorOptions = {
        // theme: 'bubble',
        modules: {
          toolbar: [
            [{ 'header': '1' }, { 'header': '2' }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['link'],
            ['clean']
          ]
        }
      };

      this.editor = new Quill(editorElement, editorOptions);
  }

}
