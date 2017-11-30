import { Injectable } from '@angular/core';
import { AppSettings } from '../models/app-settings';

const storageKey = 'tonyBusinessmanSettings';

@Injectable()
export class SettingsContext {
    isConfigured(): boolean {
        let settingsString = localStorage.getItem(storageKey);

        return settingsString != null;
    }

    loadSettings(): AppSettings {
        if (this.isConfigured()) {
            return JSON.parse(localStorage.getItem(storageKey))
        }
        let result = new AppSettings();
        result.idColumnNumber = 1;
        result.priceColumnNumber = 6;
        result.priceColumnCode = 'Price';
        result.ratioColumnNumber = 7;
        result.ratioColumnCode = 'Ratio';
        result.bonusColumnNumber = 8;
        result.bonusColumnCode = 'Bonus';
        result.salesColumnNumber = 9;
        result.salesColumnCode = 'Sales';
        result.balanceColumnNumber = 10;
        result.balanceColumnCode = 'Stock';
        result.orderColumnNumber = 11;
        result.orderColumnCode = 'Order';
        result.creditColumnNumber = 12;
        result.creditColumnCode = 'Credit';
        return result;
    }

    saveSettings(settings: AppSettings) {
        localStorage.setItem(storageKey, JSON.stringify(settings));
    }
}