import bcryptjs from "bcryptjs";
import { Request, Response } from "express";
import { userJWT } from "../../lib";
import { User } from "../../model";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const logIn = async (req: Request, res: Response) => {
    try {
        const { email, password, phone } = req.body;
        const theUser = await User.findOne({
            $or: [{ email }, { phone: phone }],
        });
        if (!theUser) {
            return errorResponse({
                res,
                statusCode: 404,
                message: "User not found",
            });
        }

        const checkPass = await bcryptjs.compare(password, theUser.password);
        if (!checkPass) createPrettyError(404, "Wrong password");
        const token = userJWT({
            id: theUser._id,
            name: theUser.name,
            email: theUser.email,
            number: theUser.phone,
        });

        successResponse({ res, data: token, message: "User logged in" });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.name + "::" + error.message);
            errorResponse({ res, message: error.message });
        } else {
            errorResponse({ res, message: "Something went wrong" });
        }
    }
};
