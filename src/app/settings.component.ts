import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { AppSettings } from './models/app-settings';
import { SettingsContext } from './services/settings-context.service';

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers: [SettingsContext]
})
export class SettingsComponent {
  constructor(private settingsContext: SettingsContext) { }

  idColumnNumberFormControl = new FormControl('', [
    Validators.required]);
  priceColumnNumberFormControl = new FormControl('', [
    Validators.required]);
  priceColumnCodeFormControl = new FormControl('', [
    Validators.required]);
  ratioColumnNumberFormControl = new FormControl('', [
    Validators.required]);
  ratioColumnCodeFormControl = new FormControl('', [
    Validators.required]);
  bonusColumnNumberFormControl = new FormControl('', [
    Validators.required]);
  bonusColumnCodeFormControl = new FormControl('', [
    Validators.required]);
  balanceColumnNumberFormControl = new FormControl('', [
    Validators.required]);
  balanceColumnCodeFormControl = new FormControl('', [
    Validators.required]);
  orderColumnNumberFormControl = new FormControl('', [
    Validators.required]);
  orderColumnCodeFormControl = new FormControl('', [
    Validators.required]);
  /*sellingColumnNumberFormControl = new FormControl('', [
    Validators.required]);
  sellingColumnCodeFormControl = new FormControl('', [
    Validators.required]);*/

  ngOnInit() {
    let settings = this.settingsContext.loadSettings();
    this.idColumnNumberFormControl.setValue(settings.idColumnNumber);
    this.priceColumnNumberFormControl.setValue(settings.priceColumnNumber);
    this.priceColumnCodeFormControl.setValue(settings.priceColumnCode);
    this.ratioColumnNumberFormControl.setValue(settings.ratioColumnNumber);
    this.ratioColumnCodeFormControl.setValue(settings.ratioColumnCode);
    this.bonusColumnNumberFormControl.setValue(settings.bonusColumnNumber);
    this.bonusColumnCodeFormControl.setValue(settings.bonusColumnCode);
    this.balanceColumnNumberFormControl.setValue(settings.balanceColumnNumber);
    this.balanceColumnCodeFormControl.setValue(settings.balanceColumnCode);
    this.orderColumnNumberFormControl.setValue(settings.orderColumnNumber);
    this.orderColumnCodeFormControl.setValue(settings.orderColumnCode);
  }
}