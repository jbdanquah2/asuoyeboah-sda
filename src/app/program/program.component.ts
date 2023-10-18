import {Component, OnInit} from '@angular/core';
import {ProgramService} from "../services/program.service";
import {Program} from "../models/program.model";

@Component({
  selector: 'program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  programs: Program[] = [];

  constructor(private programService: ProgramService) {
  }

  ngOnInit(): void {
    this.programService.getActiveRealTimePrograms()
      .subscribe((programs: Program[]) => {
        this.programs = programs;
        console.log('programs', this.programs);
      });
  }


}
