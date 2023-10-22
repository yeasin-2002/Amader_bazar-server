const express = require(`express`);
const seedRouter = express.Router();

const { seedUsers } = require(`../controller/UserControllers`);
const { seedUsersValidationSchema } = require(`../validationSchema`);
const { validationRunner, decryptToken, isAdmin } = require(`../middleware`);

seedRouter.post(`/`, seedUsers);
seedRouter.post(
    `/validate`,
    seedUsersValidationSchema,
    validationRunner,
    (req, res) => {
        res.json({ status: `success`, message: `seeded` });
    },
);

seedRouter.get(`/token-verify`, decryptToken, isAdmin, (req, res) => {
    res.json({ status: `success`, message: `seeded` });
});

module.exports = seedRouter;