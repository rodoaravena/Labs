import { Component, OnInit } from '@angular/core';
import { KB_DB } from '../../shared/data/knowledge-base/knowledge-base'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.scss']
})
export class KnowledgeBaseComponent implements OnInit {

  public Kb: any
  public title: any
  public term: string

  constructor(private _sanitizer: DomSanitizer) {
    this.Kb = KB_DB.Kb_Category
  }

  ngOnInit() { }

}
