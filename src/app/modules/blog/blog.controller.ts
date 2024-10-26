import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "./blog.service";



const createBlog = catchAsync(async (req, res) => {
  const blog = await BlogServices.createBlogIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Blog created successfully',
    data: blog,
  }) 
})

const getBlogs = catchAsync(async (req, res) => {

  const blogs = await BlogServices.getBlogsFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog retrieved successfully',
    data: blogs,
  }) 
})

const updateBlog = catchAsync(async (req, res) => {

  const result = await BlogServices.updateBlogIntoDB(req.params.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog updated successfully',
    data: result,
  }) 
})

const deleteBlog = catchAsync(async (req, res) => {

  const result = await BlogServices.deleteBlogFromDB(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog deleted successfully',
    data: result,
  }) 
})

export const BlogControllers = {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
}