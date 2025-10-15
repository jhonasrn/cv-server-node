import { SkillsService } from './skills.service';
export declare class SkillsController {
    private readonly skillsService;
    constructor(skillsService: SkillsService);
    getSkills(): {
        technical: string[];
        softSkills: string[];
        tools: string[];
    };
}
