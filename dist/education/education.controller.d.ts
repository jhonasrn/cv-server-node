import { EducationService } from './education.service';
export declare class EducationController {
    private readonly educationService;
    constructor(educationService: EducationService);
    getEducation(): {
        degree: string;
        institution: string;
        location: string;
        period: string;
    }[];
}
