const mongoose = require('mongoose');

const errorSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    method: {
        type: String,
        required: true
    },
    err_details: {
        type: String,
        required: true
    },
    err_file_name: {
        type: String,
        required: true
    },
    err_line_no: {
        type: String,
        required: true
    },
    err_time: {
        type: String,
        required: true
    },
    server_env: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('col_server_error_logs', errorSchema);