"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationService = void 0;
const common_1 = require("@nestjs/common");
let EducationService = class EducationService {
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
};
exports.EducationService = EducationService;
exports.EducationService = EducationService = __decorate([
    (0, common_1.Injectable)()
], EducationService);
//# sourceMappingURL=education.service.js.map