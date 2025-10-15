import { useEffect, useState } from 'react';
import api from '../services/api';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  readme: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    api.get('/projects').then((res) => setProjects(res.data));
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      {projects.map((proj) => (
        <div key={proj.name}>
          <h3>{proj.name}</h3>
          <p>{proj.description}</p>
          <ul>
            {proj.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <pre>{proj.readme}</pre>
        </div>
      ))}
    </div>
  );
}
