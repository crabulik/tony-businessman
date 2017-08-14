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
        result.priceColumnNumber = 4;
        result.priceColumnCode = '';
        result.ratioColumnNumber = 5;
        result.ratioColumnCode = '';
        result.bonusColumnNumber = 6;
        result.bonusColumnCode = '';
        result.balanceColumnNumber = 7;
        result.balanceColumnCode = '';
        result.orderColumnNumber = 8;
        result.orderColumnCode = '';
        return result;
    }

    saveSettings(settings: AppSettings) {
        localStorage.setItem(storageKey, JSON.stringify(settings));
    }
}