"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillsService = void 0;
const common_1 = require("@nestjs/common");
let SkillsService = class SkillsService {
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
};
exports.SkillsService = SkillsService;
exports.SkillsService = SkillsService = __decorate([
    (0, common_1.Injectable)()
], SkillsService);
//# sourceMappingURL=skills.service.js.map