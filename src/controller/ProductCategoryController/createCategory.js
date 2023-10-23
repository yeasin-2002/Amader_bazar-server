const { ProductCategory } = require("$model");
const { successResponse, errorResponse } = require("$utils/ResponseHandler");

const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const prettierSlug = name.split(" ").join("-").toLowerCase();
        const data = await ProductCategory.create({
            name,
            icon: req.file.filename,
            slug: prettierSlug,
        });

        await successResponse(res, {
            data,
            message: "Successfully created category",
        });
    } catch (error) {
        console.log(error.message);
        errorResponse(res, { message: error.message });
    }
};
module.exports = createCategory;
