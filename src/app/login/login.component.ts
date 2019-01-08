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
    if (sessionStorage.getItem('langCode') !== null) {
      translate.setDefaultLang('en');
    } else {
      JSON.stringify(sessionStorage.setItem('langCode', 'en'));
    }
  }

  ngOnInit() {
    this.sessionLang = sessionStorage.getItem('langCode');
    this.translate.setDefaultLang(this.sessionLang);
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.lang = language;
    let sessionstore = JSON.stringify(sessionStorage.setItem('langCode', this.lang));
}

}
