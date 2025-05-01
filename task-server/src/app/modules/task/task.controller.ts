import { NextFunction, Request, RequestHandler, Response } from "express";
import status from "http-status";
import { catchAsync } from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { taskFilterAbleFields } from "./task.constant";
import { taskService } from "./task.service";

const createTask = async (req: Request, res: Response) => {
  const result = await taskService.createTask(req.body);
  // res.send(result)
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "task create successfully..!",
    data: result,
  });
  // console.log(req.body)
};

const getTaskAllFromDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    // console.log(req.query);

    const filters = pick(req.query, taskFilterAbleFields);
    const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    console.log(options);
    const result = await taskService.getTaskAllFromDB(filters, options);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "task data fetched!",
      meta: result.meta,
      data: result.data,
    });
  }
);

const getByIdFromDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await taskService.getByIdFromDB(id);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "task data fetched by id!",
      data: result,
    });
  }
);

const updateIntoDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    console.log("id", id);
    console.log("data", req.body);

    const result = await taskService.updateIntoDB(id, req.body);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Admin data updated!",

      data: result,
    });
  }
);
const deleteIntoDB: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    console.log("id", id);
    console.log("data", req.body);

    const result = await taskService.deleteFromDB(id);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Admin data deleted!",

      data: result,
    });
  }
);

export const taskController = {
  createTask,
  getTaskAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteIntoDB,
};
