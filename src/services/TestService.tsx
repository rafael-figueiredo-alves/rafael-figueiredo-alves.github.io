import { iProjects } from "../models/ProjectsModel";

export const TestService = (): Promise<iProjects[]> => {
    return fetch('/data/projects.json')
      .then(response => response.json())
      .then(data => data);
  }