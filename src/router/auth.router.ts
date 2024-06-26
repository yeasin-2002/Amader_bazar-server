import express from "express";
import multer from "multer";
import {
    changePassword,
    confirmForgotPassword,
    confirmRegistration,
    confirmResetPassword,
    deleteAccount,
    forgotPassword,
    logIn,
    newJWT_Token,
    registration,
    resetPassword,
} from "../controller/auth.controller";
import { CreateDiskStorage, isTokenVerify } from "../middlewares";
export const authRoute = express.Router();
const upload = multer({ storage: CreateDiskStorage("pendingUser") });

// log in
authRoute.post("/register", upload.single("avatar"), registration);
authRoute.post("/confirm-registration", confirmRegistration);
authRoute.post("/login", logIn);

authRoute.patch("/reset-password", resetPassword);
authRoute.patch("/confirm-reset-password", confirmResetPassword);
authRoute.get("/new-jwt-token", newJWT_Token);

// settings
authRoute.put("/change-password", isTokenVerify, changePassword);
authRoute.delete("/delete-account", isTokenVerify, deleteAccount);

//! Uncompleted
authRoute.post("/forgot-password", forgotPassword);
authRoute.post("/confirm-forgot-password", confirmForgotPassword);
