import { AboutService } from './about.service';
export declare class AboutController {
    private readonly aboutService;
    constructor(aboutService: AboutService);
    getProfile(): {
        fullName: string;
        title: string;
        location: string;
        availability: string;
        phone: string;
        email: string;
        linkedin: string;
        summary: string;
        languages: ({
            language: string;
            level: string;
            note?: undefined;
        } | {
            language: string;
            level: string;
            note: string;
        })[];
    };
}
