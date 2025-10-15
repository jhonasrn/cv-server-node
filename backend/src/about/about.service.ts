// src/about/about.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class AboutService {
  getProfile() {
  return {
    fullName: 'Jhonas Raimundo do Nascimento',
    title: 'IT Project Manager | IT Governance | Agile Projects | PMO',
    location: 'Jaguariúna, SP, Brazil',
    availability: 'Available for hybrid, remote, or on-site work',
    phone: '+55 99999999',
    email: 'jhonas.rn@gmail.com',
    linkedin: 'https://linkedin.com/in/jhonas-nascimento',
    summary:
      'Technology professional with 9 years of experience in software and IT projects, working from development to project management. Skilled in critical and high-availability systems, leading multidisciplinary teams, and coordinating initiatives for stability, performance, and scalability. Strong background in incident, problem, and change management (ITIL), agile methodologies (Scrum, Kanban, Lean), and practical experience applying OKRs for strategic alignment.',
    languages: [
      { language: 'Portuguese', level: 'Native' },
      {
        language: 'English',
        level: 'Intermediate',
        note:
          'International experience through an intensive English course in Ireland for 8 months (Oct 2024 – Jun 2025)',
      },
    ],
  };
}

}
