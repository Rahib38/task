import express from "express";
import { auth } from "../../middleware/auth";
import { userController } from "./user.controller";
import { UserRole } from "../../../generated/prisma";

const router = express.Router();

router.post("/", userController.createUser);

export const userRoutes = router;
