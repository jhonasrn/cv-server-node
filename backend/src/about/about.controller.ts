// src/about/about.controller.ts

import { Controller, Get } from '@nestjs/common';
import { AboutService } from './about.service';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Get()
  getProfile() {
    return this.aboutService.getProfile();
  }
}
