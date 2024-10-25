import { model, Schema } from "mongoose";
import { ISkill } from "./skill.interface";

const SkillSchema = new Schema({
  skillName: { type: String},
  skillImage: { type: String},
});

const Skill = model<ISkill>("Skill", SkillSchema);
export default  Skill;