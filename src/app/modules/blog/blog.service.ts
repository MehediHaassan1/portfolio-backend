import { IBlog } from "./blog.interface";
import Blog from "./blog.model";

const createBlogIntoDB = async (BlogData: IBlog) => {
  const blog = new Blog(BlogData);
  return await blog.save();
};

const getBlogsFromDB = async () => {
  return await Blog.find();
};

const updateBlogIntoDB = async (id: string, BlogData: Partial<IBlog>) => {
  return await Blog.findByIdAndUpdate(id, BlogData, { new: true });
};

const deleteBlogFromDB = async (id: string) => {
  return await Blog.findByIdAndDelete(id);
};

export const BlogServices = {
  createBlogIntoDB,
  getBlogsFromDB,
  updateBlogIntoDB,
  deleteBlogFromDB,
};
