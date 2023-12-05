import { Request, Response } from "express";
import { User } from "../../model";
import { errorResponse, successResponse } from "../../utils";

export const getAllUser = async (req: Request, res: Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const products = await User.find().skip(startIndex).limit(limit);

        successResponse({
            res,
            data: {
                products,
                endIndex,
            },
            message: `Found ${products?.length} Product`,
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};