import prisma from "../../../shared/prisma";
import { Task } from "./../../../generated/prisma/index.d";
const createTask = async (payload: Partial<Task>) => {

    if(!payload.title || !payload.userId){
        throw new Error("required field missing")
    }

  const userData = {
    title: payload.title,
    description: payload.description,
    deadline: payload.deadline ? new Date(payload.deadline) : null,
    priority: payload.priority,
    user: {
      connect: { id:payload.userId },
    },
  };

  const result =await prisma.task.create({
    data:userData
  })
  return result
};

export const taskService={
    createTask
}