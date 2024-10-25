import { Router } from "express";
import { ProjectRoutes } from "../modules/project/project.routes";


const router = Router();

const routers = [
  { path: '/projects', routes: ProjectRoutes },
]

routers.forEach(route => router.use(route.path, route.routes))


export default router;