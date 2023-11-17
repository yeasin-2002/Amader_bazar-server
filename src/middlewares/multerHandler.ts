import multer from "multer";

import path from "path";
import { imgSubFolder } from "../types";
import { generateOTP } from "../utils";

export const CreateDiskStorage = (relativeFolderPath: imgSubFolder) => {
    return multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(process.cwd(), `uploads/${relativeFolderPath}`));
        },
        filename: function (req, file, cb) {
            const slugName =
                file.originalname.split(" ").join("-").toLowerCase() ||
                file.originalname;
            const id = generateOTP();
            const GeneratedFileName = `${id}-${slugName}`;

            cb(null, GeneratedFileName);
        },
    });
};

// export const upload = multer({ storage: CreateDiskStorage() });
// export const SendSingleImg = (imgUrlFromReq: string, imgPath: string) => {
//     const local = path.join(
//         process.cwd(),
//         `uploads/users/${imgPath}`,
//         imgUrlFromReq
//     );
//     if (!fs.existsSync(local)) return createPrettyError(404, "Image not found");
//     return local;
// };
