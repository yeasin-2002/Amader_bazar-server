import jwt from "jsonwebtoken";
import { jwtSecretKey } from "./exportEnv.js";

export const generateJWT = ({
    data = {},
    key = jwtSecretKey,
    option = { expiresIn: `30d` },
}) => {
    return jwt.sign(data, key, option);
};
