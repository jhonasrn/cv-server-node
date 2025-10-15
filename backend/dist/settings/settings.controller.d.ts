import { SettingsService } from './settings.service';
export declare class SettingsController {
    private readonly settingsService;
    constructor(settingsService: SettingsService);
    getSettings(): {
        theme: string;
        language: string;
        notifications: boolean;
        layout: string;
    };
}
