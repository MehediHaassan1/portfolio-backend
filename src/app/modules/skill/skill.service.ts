import { ISkill } from "./skill.interface";
import Skill from "./skill.model";

// Create a new skill
const createSkillIntoDB = async (data: ISkill) => {
  const skill = new Skill(data);
  return await skill.save();
};

// Get all skills
const getAllSkillsFromDB = async () => {
  return await Skill.find();
};

// Update a skill by ID
const updateSkillIntoDB = async (id: string, data: Partial<ISkill>) => {
  return await Skill.findByIdAndUpdate(id, data, { new: true });
};

// Delete a skill by ID
const deleteSkillFromDB = async (id: string) => {
  return await Skill.findByIdAndDelete(id);
};


export const SkillServices = {
  createSkillIntoDB,
  getAllSkillsFromDB,
  updateSkillIntoDB,
  deleteSkillFromDB,
}