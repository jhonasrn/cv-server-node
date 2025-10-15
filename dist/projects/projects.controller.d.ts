import { ProjectsService } from './projects.service';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    getProjects(): Promise<any[]>;
}
