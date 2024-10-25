import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SkillServices } from "./skill.service";

const createSkill = catchAsync(async(req,res) => {
  const skill = await SkillServices.createSkillIntoDB(req.body);
  
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Skill created successfully",
    data: skill,
  })
})

const getAllSkills = catchAsync(async(req,res) => {
  const skills = await SkillServices.getAllSkillsFromDB();
  
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Skill retrieved successfully",
    data: skills,
  })
})

const updateSkill = catchAsync(async(req,res) => {
  const skills = await SkillServices.updateSkillIntoDB(req.params.id, req.body);
  
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Skill updated successfully",
    data: skills,
  })
})

const deleteSkill = catchAsync(async(req,res) => {
  const skills = await SkillServices.deleteSkillFromDB(req.params.id);
  
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Skill deleted successfully",
    data: skills,
  })
})


export const SkillControllers = {
  createSkill,
  getAllSkills,
  updateSkill,
  deleteSkill,
}