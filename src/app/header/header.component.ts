import { Component, OnInit, Input } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {_} from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() public loginData: string;

  fromCode = _('demo.text-in-code');

  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('en');
  }

  ngOnInit() {
  }

}
