import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutModule } from './about/about.module';
import { ExperienceModule } from './experience/experience.module';
import { SkillsModule } from './skills/skills.module';
import { ContactModule } from './contact/contact.module';
import { EducationModule } from './education/education.module';
import { ProjectsModule } from './projects/projects.module';
import { SettingsModule } from './settings/settings.module';

@Module({
  imports: [AboutModule, ExperienceModule, SkillsModule, ContactModule, EducationModule, ProjectsModule, SettingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
