import { Router } from "express";
import { ProjectRoutes } from "../modules/project/project.routes";
import { SkillRoutes } from "../modules/skill/skill.routes";


const router = Router();

const routers = [
  { path: '/projects', routes: ProjectRoutes },
  { path: '/skills', routes: SkillRoutes},
]

routers.forEach(route => router.use(route.path, route.routes))


export default router;