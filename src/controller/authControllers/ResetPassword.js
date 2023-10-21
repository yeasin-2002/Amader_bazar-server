const {
    errorResponse,
    successResponse,
} = require("../../utils/ResponseHandler");

const resetPassword = async (req, res) => {
    try {
        successResponse(
            res,
            "This feature is not yet implemented. skipped for now",
        );
    } catch (error) {
        console.log(error.message);
        errorResponse(res, error.message);
    }
};
module.exports = resetPassword;
