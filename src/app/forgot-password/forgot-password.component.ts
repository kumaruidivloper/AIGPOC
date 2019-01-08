import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {_} from '@biesbjerg/ngx-translate-extract/dist/utils/utils';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  public lang: any;
  public sessionLang: string;
  public emailForm: FormGroup;
  public submitted = false;
  fromCode = _('demo.text-in-code');

  constructor(
    private translate: TranslateService,
    private formBuilder: FormBuilder
    ) {
   }

  ngOnInit() {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
    this.sessionLang = sessionStorage.getItem('langCode');
    this.translate.setDefaultLang(this.sessionLang);

  }

  get f() { return this.emailForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.emailForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.emailForm.value))
}

}
