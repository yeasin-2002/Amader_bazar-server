import { Request, Response } from "express";
import { Product } from "../../model";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const getAllProduct = async (req: Request, res: Response) => {
    try {
        const { limit } = req.body;
        const products = await Product.find({}).limit(limit || 100);
        if (!products) createPrettyError("No Product Found", 404);

        successResponse({
            res,
            data: products,
            message: "successfully got all products ",
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
            errorResponse({ res, message: error.message });
        }
        errorResponse({ res });
    }
};
