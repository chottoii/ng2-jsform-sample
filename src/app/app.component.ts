import { Component, OnInit } from '@angular/core';

import { I18nService } from 'ng2-jsform';
import { DateAdapter, NativeDateAdapter } from '@angular/material';

import { messageJa, messageEn } from './defs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  pageView = true;
  lang = 'ja';

  constructor(
    private dateAdapter: DateAdapter<NativeDateAdapter>,
    private i18n: I18nService
  ) {
  }

  ngOnInit() {
    this.dateAdapter.setLocale('ja-JP');
    this.i18n.setDictionary(messageJa);
  }

  changeLang() {
    this.pageView = false;
    if ( this.lang === 'ja') {
      this.dateAdapter.setLocale('ja-JP');
      this.i18n.setDictionary(messageJa);
    } else {
      this.dateAdapter.setLocale('en-US');
      this.i18n.setDictionary(messageEn);
    }
    setTimeout(() => {
      this.pageView = true;
    }, 100);
  }
}
