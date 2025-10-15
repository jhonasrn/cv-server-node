// src/experience/experience.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class ExperienceService {
  getExperiences() {
    return [
      {
        role: 'Delivery Manager',
        company: 'Compass UOL',
        period: 'Jul 2024 – Nov 2024',
        location: 'São Paulo, SP',
        responsibilities: [
          'Managed digital security squads in critical environments.',
          'Structured agile processes and implemented Scrum ceremonies.',
          'Oversaw backlog management, demand prioritization, and impediment resolution.',
          'Deployed Azure DevOps for delivery governance and team integration.',
        ],
      },
      {
        role: 'Project Manager',
        company: 'Convergência',
        period: 'Feb 2024 – Jul 2024',
        location: 'Campinas, SP',
        responsibilities: [
          'Led multidisciplinary squads supporting hospital systems.',
          'Aligned backlog priorities with business needs for high availability.',
          'Established agile ceremonies and continuous improvement culture.',
          'Applied OKRs to guide strategic goals and measure impact.',
          'Participated in technical decisions including architecture and technology choices.',
        ],
      },
      {
        role: 'Project Manager',
        company: 'InCuca Tech',
        period: 'Dec 2021 – Nov 2023',
        location: 'Florianópolis, SC',
        responsibilities: [
          'Coordinated 3 squads focused on support, continuous improvement, and new development.',
          'Adapted agile methodologies to squad context (Kanban for support, hybrid Scrum/Kanban for development).',
          'Managed contracts, costs, and resource allocation for operational efficiency.',
          'Planned and executed releases with change governance.',
          'Defined and tracked OKRs to ensure strategic alignment.',
        ],
      },
      {
        role: 'Project Manager',
        company: 'Softmus Tecnologia',
        period: 'Jul 2020 – Apr 2021',
        location: 'Campinas, SP',
        responsibilities: [
          'Led multidisciplinary squads delivering agile and incremental solutions.',
          'Managed backlog and facilitated Scrum ceremonies.',
          'Coordinated development, product, and stakeholders for transparency.',
          'Contributed to technical decisions and architecture planning.',
          'Delivered a functional MVP that restored client confidence.',
        ],
      },
      {
        role: 'Systems Analyst / Backend Developer (PHP)',
        company: 'PicPay, BPP, ART IT, Grupo Stefanini',
        period: '2018 – 2020',
        location: 'Various',
        responsibilities: [
          'Developed and optimized RESTful APIs using pure PHP and Laravel.',
          'Collaborated with frontend and QA teams for user experience and automated testing.',
          'Participated in architectural decisions and code reviews.',
        ],
      },
      {
        role: 'Software Development Intern (COBOL)',
        company: 'Stefanini',
        period: 'Jan 2015 – Jan 2017',
        location: 'Jaguariúna, SP',
        responsibilities: [
          'Developed and maintained COBOL Batch/Online (CICS) projects.',
          'Worked with DB2 databases, VSAM and sequential files.',
          'Used tools like TSO, Endevor, and Micro Focus Enterprise.',
          'Served clients including Caixa Econômica Federal, Banco do Brasil, and Santander.',
        ],
      },
    ];
  }
}
