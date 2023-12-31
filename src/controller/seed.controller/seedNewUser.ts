import { Request, Response } from "express";
import { demoUser } from "../../data/demo/user";
import { User } from "../../model";
import { createPrettyError } from "../../utils";
import { errorResponse, successResponse } from "../../utils/responseHandler";

export const seedNewUser = async (req: Request, res: Response) => {
    try {
        console.log("Seed User");
        const newUsers = await User.insertMany(demoUser);
        console.log(newUsers);
        if (!newUsers) createPrettyError(404, "Failed to create Demo Data");
        return successResponse({
            res,
            message: "Created Demo Data",
            data: newUsers,
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res, message: error.message });
    }
};
