import * as bcrypt from "bcrypt";
import { User, UserRole } from "../../../generated/prisma";
import prisma from "../../../shared/prisma";

const createUser = async (data: Partial<User>) => {

  if(!data.name || !data.email || !data.password){
    throw new Error("required fileds missing")
  }

  const hashedPassword: string = await bcrypt.hash(data?.password as string, 12 );

  const userData = {
    name: data.name,
    email: data.email,
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
