const { API_CONFIG } = require("../../config/appConfig");
const { getErrorDetails } = require("../../utils/error");
const ServerErrorModel = require('../../models/serverError');

exports.logErrors = async (err, req, res, next) => {
    try {
        const error = getErrorDetails(err);
        console.log("====== Error From " + API_CONFIG.API_NAME + " =======");
        console.log("Error Details: ", error.errorText);
        console.log("Error File Name: ", error.errorFile);
        console.log("Error Line Number: ", error.errorLine);
        console.log("Error Time: ", error.errorTime);
        console.error(err.stack);
        next(error);
        const errorContent = new ServerErrorModel({
            url: API_CONFIG.API_RUNNING_URL + req.url,
            method: req.method,
            err_details: error.errorText,
            err_file_name: error.errorFile,
            err_line_no: error.errorLine,
            err_time: error.errorTime,
            server_env: API_CONFIG.API_ENVIROMENT.toLowerCase()
        });
        await errorContent.save();
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Internal Server Error",
            error: err,
            status: 0,
        });
    }
};
exports.errorHandler = async (err, req, res, next) => {
    try {
        return res.status(500).send({
            message: "Internal Server Error",
            status: 0,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Internal Server Error",
            error: err,
            status: 0,
        });
    }
};
