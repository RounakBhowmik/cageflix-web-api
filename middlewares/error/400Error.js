exports.notFoundErrorHandler = async (req, res, next) => {
    try {
        return res.status(404).send({
            message: "API URL Not Found",
            status: 0,
        });
    } catch (err) {
        const error = new Error(err);
        next(error);
    }
};