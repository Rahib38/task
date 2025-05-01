import * as bcrypt from "bcrypt";
import { UserRole } from "../../../generated/prisma";
import prisma from "../../../shared/prisma";

const createUser = async (data: any) => {
  const hashedPassword: string = await bcrypt.hash(data.password, 12);

  const userData = {
    name: data.user.name,
    email: data.user.email,
    password: hashedPassword,
    role: UserRole.USER,
  };

  const createdUserData = await prisma.user.create({
    data: userData,
  });

  return createdUserData;
};

export const userService = {
  createUser,
};
