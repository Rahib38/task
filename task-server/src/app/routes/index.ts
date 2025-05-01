import express from "express";
import { AdminRoutes } from "../modules/Admin/admin.routes";
import { AuthRoutes } from "../modules/Auth/auth.routes";
import { TaskRoutes } from "../modules/task/task.routes";
import { userRoutes } from "../modules/User/user.route";
const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/admin",
    route: AdminRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/task",
    route: TaskRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
