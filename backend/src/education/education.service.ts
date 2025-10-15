// src/education/education.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class EducationService {
  getEducation() {
    return [
      {
        degree: 'Postgraduate in IT Project Management and Agile Methodologies',
        institution: 'Universidade São Judas Tadeu',
        location: 'São Paulo, Brazil',
        period: '2023 – 2024',
      },
      {
        degree: 'Bachelor’s in Computer Science',
        institution: 'UniFAJ – Jaguariúna University Center',
        location: 'Jaguariúna, SP, Brazil',
        period: '2013 – 2017',
      },
    ];
  }
}
