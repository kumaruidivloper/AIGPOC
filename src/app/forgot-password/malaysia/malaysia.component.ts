import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {_} from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

@Component({
  selector: 'app-malaysia',
  templateUrl: './malaysia.component.html',
  styleUrls: ['./malaysia.component.scss']
})
export class MalaysiaComponent implements OnInit {

  fromCode = _('demo.text-in-code');

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
  }

}
