const mongoose = require('mongoose');
const { DB_CONFIG } = require('./appConfig');

const url = DB_CONFIG.DB_URL;


const db = () => {
    return new Promise((resolve, reject) => {
        mongoose.set("strictQuery", true);
        mongoose.connect(url).then((connection) => {
            resolve(connection);
        }).catch(err => {
            reject(err);
        })
    })
};
module.exports = db;