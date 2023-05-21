/* eslint-disable @typescript-eslint/member-ordering */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-passcode',
  templateUrl: './passcode.component.html',
  styleUrls: ['./passcode.component.scss'],
})
export class PasscodeComponent implements OnInit {
  @Output() doPassForm: EventEmitter<FormGroup> = new EventEmitter();
  @Input() errorLogin: string | null | boolean;
  passForm: FormGroup;
  savePin = [];
  digitsLength = 0;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.passForm = this.formBuilder.group({
      passcode: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
    });

    this.passForm.valueChanges.subscribe((value) => {
      if (this.digitsLength === 6) {
        this.emitForm();
      }
    });
    if (this.errorLogin) {
      console.log('error');
      this.passForm.reset();
      // this.passCode.setValue('');
    }
  }

  changeInput(passCode: string) {
    this.digitsLength = passCode ? passCode.length : 0;
    /*  */
    if (this.digitsLength === 6) {
      this.emitForm();
    }
    if (this.digitsLength > 6) {
      const value = this.passCode.value ? this.passCode.value : '';
      try {
        this.passCode.setValue(value.substring(0, 6), { emitEvent: false });
      } catch (e) {}
    }
  }
  get passCode() {
    return this.passForm.get('passcode');
  }
  clickingInput(pinKey: any) {
    switch (pinKey) {
      case 'backIcon':
        if (this.savePin.length > 0) {
          this.savePin.pop();
        }
        break;
      default:
        if (this.savePin.length < 6) {
          this.savePin.push(pinKey);
        }
        break;
    }
    this.digitsLength = this.savePin.length;
    if (this.digitsLength === 6) {
      this.passCode.setValue(this.savePin.join(''), { emitEvent: true });
    }
  }
  public emitForm(): void {
    this.doPassForm.emit(this.passForm);
  }
}
