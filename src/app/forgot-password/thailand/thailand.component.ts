import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {_} from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

@Component({
  selector: 'app-thailand',
  templateUrl: './thailand.component.html',
  styleUrls: ['./thailand.component.scss']
})
export class ThailandComponent implements OnInit {

  fromCode = _('demo.text-in-code');

  constructor(
    private translate: TranslateService,
  ) { }

  ngOnInit() {
  }

}
