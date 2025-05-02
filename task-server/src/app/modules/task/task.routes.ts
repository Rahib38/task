import express from "express";
import { UserRole } from "../../../generated/prisma";
import { auth } from "../../middleware/auth";
import { taskController } from "./task.controller";
const router = express.Router();

router.post(
  "/",
  auth(UserRole.ADMIN, UserRole.USER),
  taskController.createTask
);

router.get(
  "/",
 
  taskController.getTaskAllFromDB
);

router.get(
  "/:id",
  auth(UserRole.ADMIN, UserRole.USER),
  taskController.getByIdFromDB
);

router.patch(
  "/:id",
  auth(UserRole.ADMIN, UserRole.USER),
  taskController.updateIntoDB
);

router.delete(
  "/:id",
  auth(UserRole.ADMIN, UserRole.USER),
  taskController.deleteIntoDB
);

export const TaskRoutes = router;
