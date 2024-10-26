import { Schema, model, Document } from 'mongoose';
import { IProject } from './project.interface';

const ProjectSchema = new Schema<IProject>({
  title: { type: String },
  description: { type: String },
  thumbnail: { type: String },
  liveLink: { type: String },
}, {
  timestamps: true,
});

const Project = model<IProject>('Project', ProjectSchema);
export default Project;
