import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ProjectsService {
  async getProjects() {
    try {
      const reposResponse = await axios.get('https://api.github.com/users/jhonasrn/repos');
      const repos = reposResponse.data;

      const projects = await Promise.all(
        repos.map(async (repo) => {
          const [topicsRes, readmeRes] = await Promise.all([
            axios.get(`https://api.github.com/repos/jhonasrn/${repo.name}/topics`, {
              headers: { Accept: 'application/vnd.github.mercy-preview+json' },
            }),
            axios.get(`https://api.github.com/repos/jhonasrn/${repo.name}/readme`, {
              headers: { Accept: 'application/vnd.github.v3.raw' },
            }),
          ]);

          return {
            name: repo.name,
            description: repo.description || 'No description provided.',
            technologies: topicsRes.data.names || [],
            readme: readmeRes.data || 'No README found.',
          };
        })
      );

      return projects;
    } catch (error) {
      console.error('Error fetching GitHub data:', error.message);
      return [
        {
          name: 'GitHub Projects',
          description: 'Unable to fetch projects from GitHub.',
          technologies: [],
          readme: '',
        },
      ];
    }
  }
}
