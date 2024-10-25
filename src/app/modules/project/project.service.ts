import { IProject } from "./project.interface";
import Project from "./project.model";

const createProjectIntoDB = async (projectData: IProject) => {
  const project = new Project(projectData);
  return await project.save();
};

const getProjectsFromDB = async () => {
  return await Project.find();
};

const updateProjectIntoDB = async (id: string, projectData: Partial<IProject>) => {
  return await Project.findByIdAndUpdate(id, projectData, { new: true });
};

const deleteProjectFromDB = async (id: string) => {
  return await Project.findByIdAndDelete(id);
};

export const ProjectServices = {
  createProjectIntoDB,
  getProjectsFromDB,
  updateProjectIntoDB,
  deleteProjectFromDB,
};
