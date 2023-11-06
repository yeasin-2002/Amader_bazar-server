import { Request, Response } from "express";

export const notFound = (req: Request, res: Response) => {
    return res.status(404).json({
        status: "error",
        message: `Route ${req.method} - ${req.originalUrl} not found`,
    });
};


