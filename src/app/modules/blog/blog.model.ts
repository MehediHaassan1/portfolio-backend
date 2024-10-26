import { model, Schema } from "mongoose";

const BlogSchema = new Schema({
  title: { type: String },
  content: { type: String },
  thumbnail: { type: String },
  category: { type: String },
}, {
  timestamps: true,
})

const Blog = model('Blog', BlogSchema);

export default Blog;