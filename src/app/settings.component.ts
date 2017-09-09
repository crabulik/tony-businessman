import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppSettings } from './models/app-settings';
import { SettingsContext } from './services/settings-context.service';
import { MdSnackBar } from '@angular/material';

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers: [SettingsContext]
})
export class SettingsComponent {
  constructor(private settingsContext: SettingsContext, public snackBar: MdSnackBar) { }

  settingsForm: FormGroup;

  ngOnInit() {
    let settings = this.settingsContext.loadSettings();
    this.settingsForm = new FormGroup({
      'idColumnNumber': new FormControl(settings.idColumnNumber, Validators.required),
      'priceColumnNumber': new FormControl(settings.priceColumnNumber, Validators.required),
      'priceColumnCode': new FormControl(settings.priceColumnCode, Validators.required),
      'ratioColumnNumber': new FormControl(settings.ratioColumnNumber, Validators.required),
      'ratioColumnCode': new FormControl(settings.ratioColumnCode, Validators.required),
      'bonusColumnNumber': new FormControl(settings.bonusColumnNumber, Validators.required),
      'bonusColumnCode': new FormControl(settings.bonusColumnCode, Validators.required),
      'balanceColumnNumber': new FormControl(settings.balanceColumnNumber, Validators.required),
      'balanceColumnCode': new FormControl(settings.balanceColumnCode, Validators.required),
      'orderColumnNumber': new FormControl(settings.orderColumnNumber, Validators.required),
      'orderColumnCode': new FormControl(settings.orderColumnCode, Validators.required),
      'salesColumnNumber': new FormControl(settings.salesColumnNumber, Validators.required),
      'salesColumnCode': new FormControl(settings.salesColumnCode, Validators.required)
    });
  }

  onSubmit() {
    if(!this.settingsForm.valid) {
      this.snackBar.open('Ошибки в настройках!', null, {
        duration: 3000,
      });
    } else {
      const formModel = this.settingsForm.value;
      this.settingsContext.saveSettings(
        formModel as AppSettings
      );
    }
    
  }
}