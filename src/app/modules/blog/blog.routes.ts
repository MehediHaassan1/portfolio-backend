import { Router } from "express";
import { BlogControllers } from "./blog.controller";

const router = Router();

router.post('/', BlogControllers.createBlog);
router.get('/', BlogControllers.getBlogs);
router.put('/:id', BlogControllers.updateBlog);
router.delete('/:id', BlogControllers.deleteBlog);


export const BlogRoutes = router;