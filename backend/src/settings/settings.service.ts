// src/settings/settings.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class SettingsService {
  getSettings() {
    return {
      theme: 'dark',
      language: 'en',
      notifications: true,
      layout: 'standard',
    };
  }
}
