import { Component, OnInit } from '@angular/core';
import { defaultMaster, personLayout, personSchema, personData } from '../defs';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  pageView = false;
  title = 'topTitle';
  // 結果表示エリア
  payLoad = '';

  combine = {
    widgets: {},
    schema: personSchema,
    layout: personLayout,
    master: defaultMaster,
    data: personData,
    message: null,
    page: {
      pageID: 'topPage'
    },
  };

  constructor() { }

  ngOnInit() {
    this.pageView = true;
  }

  submit(event: any) {
    switch (event.kind) {
      case 'submit':
        this.payLoad = event.obj;
        break;
    }
  }
}
