import { ExperienceService } from './experience.service';
export declare class ExperienceController {
    private readonly experienceService;
    constructor(experienceService: ExperienceService);
    getExperiences(): {
        role: string;
        company: string;
        period: string;
        location: string;
        responsibilities: string[];
    }[];
}
