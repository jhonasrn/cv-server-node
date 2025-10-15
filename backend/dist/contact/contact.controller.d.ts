import { ContactService } from './contact.service';
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
    sendMessage(body: {
        name: string;
        email: string;
        subject: string;
        content: string;
    }): {
        status: string;
        message: string;
        data: {
            name: string;
            email: string;
            subject: string;
            content: string;
        };
    };
}
