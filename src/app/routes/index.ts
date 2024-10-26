import { Router } from "express";
import { ProjectRoutes } from "../modules/project/project.routes";
import { SkillRoutes } from "../modules/skill/skill.routes";
import { BlogRoutes } from "../modules/blog/blog.routes";


const router = Router();

const routers = [
  { path: '/projects', routes: ProjectRoutes },
  { path: '/skills', routes: SkillRoutes},
  { path: '/blogs', routes: BlogRoutes},
]

routers.forEach(route => router.use(route.path, route.routes))


export default router;