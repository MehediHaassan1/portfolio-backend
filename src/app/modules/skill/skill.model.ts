import { model, Schema } from "mongoose";
import { ISkill } from "./skill.interface";

const SkillSchema = new Schema({
  skillName: { type: String},
  skillImage: { type: String},
},
{
  timestamps: true,
});

const Skill = model<ISkill>("Skill", SkillSchema);
export default  Skill;