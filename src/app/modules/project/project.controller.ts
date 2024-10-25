import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { IProject } from "./project.interface";
import { ProjectServices } from "./project.service";


const createProject = catchAsync(async (req, res) => {
  const project: IProject = await ProjectServices.createProjectIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Project created successfully',
    data: project,
  }) 
})

const getProjects = catchAsync(async (req, res) => {

  const projects: IProject[] = await ProjectServices.getProjectsFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project retrieved successfully',
    data: projects,
  }) 
})

const updateProject = catchAsync(async (req, res) => {

  const result = await ProjectServices.updateProjectIntoDB(req.params.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project updated successfully',
    data: result,
  }) 
})

const deleteProject = catchAsync(async (req, res) => {

  const result = await ProjectServices.deleteProjectFromDB(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project deleted successfully',
    data: result,
  }) 
})

export const ProjectControllers = {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
}