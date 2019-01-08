import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {_} from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public lang: string;
  public sessionLang: string;
  public selectedLang: string;
  public langArr: any = ['en', 'th', 'ms'];

  fromCode = _('demo.text-in-code');

  constructor(private translate: TranslateService) { 
    if (localStorage.getItem('langCode') !== null) {
      translate.setDefaultLang('en');
    } else {
      JSON.stringify(localStorage.setItem('langCode', 'th'));
    }
  }

  ngOnInit() {
    this.sessionLang = localStorage.getItem('langCode');
    this.translate.setDefaultLang(this.sessionLang);
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.lang = language;
    let sessionstore = JSON.stringify(localStorage.setItem('langCode', this.lang));
}

}
