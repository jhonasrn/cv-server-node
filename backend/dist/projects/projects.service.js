"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
let ProjectsService = class ProjectsService {
    async getProjects() {
        try {
            const reposResponse = await axios_1.default.get('https://api.github.com/users/jhonasrn/repos');
            const repos = reposResponse.data;
            const projects = await Promise.all(repos.map(async (repo) => {
                const [topicsRes, readmeRes] = await Promise.all([
                    axios_1.default.get(`https://api.github.com/repos/jhonasrn/${repo.name}/topics`, {
                        headers: { Accept: 'application/vnd.github.mercy-preview+json' },
                    }),
                    axios_1.default.get(`https://api.github.com/repos/jhonasrn/${repo.name}/readme`, {
                        headers: { Accept: 'application/vnd.github.v3.raw' },
                    }),
                ]);
                return {
                    name: repo.name,
                    description: repo.description || 'No description provided.',
                    technologies: topicsRes.data.names || [],
                    readme: readmeRes.data || 'No README found.',
                };
            }));
            return projects;
        }
        catch (error) {
            console.error('Error fetching GitHub data:', error.message);
            return [
                {
                    name: 'GitHub Projects',
                    description: 'Unable to fetch projects from GitHub.',
                    technologies: [],
                    readme: '',
                },
            ];
        }
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)()
], ProjectsService);
//# sourceMappingURL=projects.service.js.map