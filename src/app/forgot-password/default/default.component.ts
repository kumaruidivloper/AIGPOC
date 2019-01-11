import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {_} from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  fromCode = _('demo.text-in-code');

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
  }

}
