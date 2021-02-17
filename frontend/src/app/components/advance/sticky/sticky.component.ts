import { Component, OnInit, ElementRef } from '@angular/core';
import * as data from '../../../shared/data/sticky/sticky';

export interface Notes {
  id: number;
  isDeleted: boolean
}

@Component({
  selector: 'app-sticky',
  templateUrl: './sticky.component.html',
  styleUrls: ['./sticky.component.scss']
})
export class StickyComponent implements OnInit {

  public notes: Notes[] = data.sticky;

  constructor(private eRef: ElementRef) {
  }

  ngOnInit() { }

  //Add new sticky note
  addStickyNote() {
    this.notes.push({ id: this.notes.length + 1, isDeleted: false });
  };

  //Delete a particulr sticky note
  deleteNote(note) {
    note.isDeleted = true
  }
}
