// src/skills/skills.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class SkillsService {
  getSkills() {
    return {
      technical: [
        'Project Management',
        'Agile Methodologies (Scrum, Kanban, Lean)',
        'ITIL (Incident, Problem, and Change Management)',
        'OKRs (Objectives and Key Results)',
        'Azure DevOps',
        'Jira',
        'Confluence',
        'PHP (Pure and Laravel)',
        'RESTful APIs',
        'COBOL (Batch/Online)',
        'DB2, VSAM, JCL',
        'Micro Focus Enterprise',
      ],
      softSkills: [
        'Team Leadership',
        'Strategic Planning',
        'Stakeholder Communication',
        'Continuous Improvement',
        'Problem Solving',
        'Adaptability',
        'Decision Making',
      ],
      tools: [
        'TSO',
        'Endevor',
        'MFE (Micro Focus Enterprise)',
        'Git',
        'Slack',
        'Notion',
        'Trello',
      ],
    };
  }
}
