import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  idColumnNumberFormControl = new FormControl('', [
    Validators.required]);
  /*priceColumnNumberFormControl = new FormControl('', [
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
    Validators.required]);*/
  balanceColumnNumberFormControl = new FormControl('', [
    Validators.required]);
  balanceColumnCodeFormControl = new FormControl('', [
    Validators.required]);
  orderColumnNumberFormControl = new FormControl('', [
    Validators.required]);
  orderColumnCodeFormControl = new FormControl('', [
    Validators.required]);
  sellingColumnNumberFormControl = new FormControl('', [
    Validators.required]);
  sellingColumnCodeFormControl = new FormControl('', [
    Validators.required]);
}