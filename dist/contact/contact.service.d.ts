export declare class ContactService {
    sendMessage(message: {
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
