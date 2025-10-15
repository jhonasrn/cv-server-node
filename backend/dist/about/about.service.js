"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutService = void 0;
const common_1 = require("@nestjs/common");
let AboutService = class AboutService {
    getProfile() {
        return {
            fullName: 'Jhonas Raimundo do Nascimento',
            title: 'IT Project Manager | IT Governance | Agile Projects | PMO',
            location: 'Jaguariúna, SP, Brazil',
            availability: 'Available for hybrid, remote, or on-site work',
            phone: '+55 99999999',
            email: 'jhonas.rn@gmail.com',
            linkedin: 'https://linkedin.com/in/jhonas-nascimento',
            summary: 'Technology professional with 9 years of experience in software and IT projects, working from development to project management. Skilled in critical and high-availability systems, leading multidisciplinary teams, and coordinating initiatives for stability, performance, and scalability. Strong background in incident, problem, and change management (ITIL), agile methodologies (Scrum, Kanban, Lean), and practical experience applying OKRs for strategic alignment.',
            languages: [
                { language: 'Portuguese', level: 'Native' },
                {
                    language: 'English',
                    level: 'Intermediate',
                    note: 'International experience through an intensive English course in Ireland for 8 months (Oct 2024 – Jun 2025)',
                },
            ],
        };
    }
};
exports.AboutService = AboutService;
exports.AboutService = AboutService = __decorate([
    (0, common_1.Injectable)()
], AboutService);
//# sourceMappingURL=about.service.js.map