import { Request, Response } from "express";
import { userService } from "./user.service";
import sendResponse from "../../../shared/sendResponse";
import status from "http-status";

const createUser = async (req:Request, res:Response)=>{
  
        const result = await userService.createUser(req.body)
        // res.send(result)
        sendResponse(res, {
            statusCode: status.OK,
            success: true,
            message: "user create successfully..!",
            data: result
          });
    // console.log(req.body)
}
export const userController = {
    createUser
}