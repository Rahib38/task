import { paginationHelper } from "../../../helpers/paginationHelper";
import prisma from "../../../shared/prisma";
import { IPaginationOptions } from "../../interface/pagination";
import { Prisma, Task } from "./../../../generated/prisma/index.d";
import { taskSearchAbleFields } from "./task.constant";
import { CreateTaskPayload } from "./task.interface";
const createTask = async (payload: Partial<Task>) => {
  if (!payload.title || !payload.userId) {
    throw new Error("required field missing");
  }

  const userData = {
    title: payload.title,
    description: payload.description,
    deadline: payload.deadline ? new Date(payload.deadline) : null,
    priority: payload.priority,
    user: {
      connect: { id: payload.userId },
    },
  };

  const result = await prisma.task.create({
    data: userData,
  });
  return result;
};

const getTaskAllFromDB = async (
  params: CreateTaskPayload,
  options: IPaginationOptions
) => {
  const andCondions: Prisma.TaskWhereInput[] = [];

  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;
  console.log(filterData);

  if (params.searchTerm) {
    andCondions.push({
      OR: taskSearchAbleFields.map((field) => ({
        [field]: {
          contains: params.searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andCondions.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  andCondions.push({
    status: "PENDING",
  });

  // console.dir(andCondions,{depth:"inifinity"})

  const whereConditions: Prisma.TaskWhereInput = { AND: andCondions };
  const result = await prisma.task.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.SortOrder
        ? {
            [options.sortBy]: options.SortOrder,
          }
        : {
            createdAt: "desc",
          },
  });

  const total = await prisma.task.count({
    where: whereConditions,
  });
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getByIdFromDB = async (id: string): Promise<Task | null> => {
  const result = await prisma.task.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateIntoDB = async (
  id: string,
  data: Partial<Task>
): Promise<Task | null> => {
  const isExist = await prisma.task.findUnique({
    where: {
      id,
    },
  });

  if (!isExist) {
    throw new Error("User not found!");
  }

  const result = await prisma.task.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const isExists = await prisma.task.findUnique({
    where: {
      id,
    },
  });

  if (!isExists) {
    throw new Error("User Already deleted");
  }

  const result = await prisma.$transaction(async (transactionClient) => {
    const adminDeletedData = await transactionClient.task.delete({
      where: {
        id,
      },
    });

    return adminDeletedData;
  });
  return result;
  console.log("delete!", id);
};

export const taskService = {
  createTask,
  getByIdFromDB,
  getTaskAllFromDB,
  updateIntoDB,
  deleteFromDB,
};
