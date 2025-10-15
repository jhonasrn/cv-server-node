// src/contact/contact.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactService {
  sendMessage(message: {
    name: string;
    email: string;
    subject: string;
    content: string;
  }) {
    // Simulação de envio — aqui você pode integrar com email, banco ou webhook futuramente
    return {
      status: 'success',
      message: 'Your message has been received. Thank you!',
      data: message,
    };
  }
}
