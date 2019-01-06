import { Component, OnInit, Input } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {_} from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() public loginData: string;
  fromCode = _('demo.text-in-code');
  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('en');
  }

  ngOnInit() {
  }

}
