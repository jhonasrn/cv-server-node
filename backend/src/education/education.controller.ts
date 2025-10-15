// src/education/education.controller.ts

import { Controller, Get } from '@nestjs/common';
import { EducationService } from './education.service';

@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Get()
  getEducation() {
    return this.educationService.getEducation();
  }
}
