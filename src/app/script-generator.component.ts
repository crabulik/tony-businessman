import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SettingsContext } from './services/settings-context.service';
import { ReportElement } from './models/report-element';
import { AppSettings } from './models/app-settings';
import { MdSnackBar } from '@angular/material';
import * as XLSX from 'xlsx';

@Component({
  templateUrl: './script-generator.component.html',
  styleUrls: ['./script-generator.component.css'],
  providers: [SettingsContext]
})
export class ScriptGeneratorComponent {
  constructor(private settingsContext: SettingsContext, private snackBar: MdSnackBar) { }

  isConfigured: boolean;
  isShowScriptBlock: boolean = false;
  script: string;

  ngOnInit() {
    this.isConfigured = this.settingsContext.isConfigured();
    this.isShowScriptBlock = false;
    this.script = '';
  }

  handleUpload(selectedFiles: FileList) {
    this.isShowScriptBlock = (selectedFiles.length > 0);
    if (selectedFiles.length > 0) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        /* read workbook */
        const bstr = e.target.result;
        const wb = XLSX.read(bstr, { type: 'binary' });

        /* grab first sheet */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];

        this.script = '';
        const data = XLSX.utils.sheet_to_json(ws, { header: 1 });

        if (Array.isArray(data) && data.length > 0) {
          this.script = this._handleXlsJson(data.slice(1));
        } else {
          this.snackBar.open('Загруженый файл не таблица или таблица пуста!', null, {
            duration: 3000,
          });
        }
      };
      reader.readAsBinaryString(selectedFiles[0]);
    }
  }

  _handleXlsJson(xlsJson: any[]): string {
    const settings = this.settingsContext.loadSettings();
    const parsedData = xlsJson.map(item => {
      let result = new ReportElement();
      result.itemId = item[settings.idColumnNumber - 1];
      result.balance = item[settings.balanceColumnNumber - 1];
      result.bonus = item[settings.bonusColumnNumber - 1];
      result.order = item[settings.orderColumnNumber - 1];
      result.price = item[settings.priceColumnNumber - 1];
      result.ratio = item[settings.ratioColumnNumber - 1];
      result.sales = item[settings.salesColumnNumber - 1];
      return result;
    });
    return this.generateScript(parsedData, settings);
  }

  generateScript(reportData: ReportElement[], settings: AppSettings): string {
    let result = '';

    result += `var reportData = ${JSON.stringify(reportData)};`;
    result += '\n';
    result += `var generatorOptions = ${JSON.stringify(settings)};`;
    result += '\n';
    result += fillReportData;
    result += '\n';
    result += fillReportCell;
    result += '\n';
    result += `${fillReportData.name}(reportData, generatorOptions);`;
    return result;
  }

  copyToClipboard(inputElement) {
    inputElement.select();
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
    } catch (err) {
      console.log('Oops, unable to copy');
    }
  }
}

function fillReportData(data, options) {
  data.forEach(element => {
    fillReportCell(element.itemId, options.priceColumnCode, element.price);
    fillReportCell(element.itemId, options.ratioColumnCode, element.ratio);
    fillReportCell(element.itemId, options.bonusColumnCode, element.bonus);
    fillReportCell(element.itemId, options.balanceColumnCode, element.balance);
    fillReportCell(element.itemId, options.orderColumnCode, element.order);
    fillReportCell(element.itemId, options.salesColumnCode, element.sales);
  });
}

function fillReportCell(itemId, cellName, cellValue) {
  if (cellValue) {
    var cellId = itemId + '_' + cellName;
    var cellElemet = (<HTMLInputElement>document.getElementById(cellId));
    if (cellElemet) {
      cellElemet.value = cellValue;
    } else {
      console.log('===Не могу найти элемент: ' + cellId);
    }
  }
}