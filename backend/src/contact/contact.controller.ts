// src/contact/contact.controller.ts

import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  sendMessage(@Body() body: { name: string; email: string; subject: string; content: string }) {
    return this.contactService.sendMessage(body);
  }
}
