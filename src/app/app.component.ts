import { Component, Input } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {_} from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '{{loginData}}';


  @Input() public loginData: string;
  fromCode = _('demo.text-in-code');
  
  constructor(private translate: TranslateService) {
        translate.setDefaultLang('en');
    }
	
	useLanguage(language: string) {
        this.translate.use(language);
    }
}
