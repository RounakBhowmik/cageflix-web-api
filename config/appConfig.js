module.exports = {
    API_CONFIG: {
        API_ROOT_DIRECTORY: process.cwd(),
        API_ENVIROMENT: process.env.API_ENVIROMENT,
        API_NAME: process.env.API_NAME,
        API_OWNER: process.env.API_OWNER,
        API_VERSION: process.env.API_VERSION,
        API_RUNNING_PORT: process.env.API_RUNNING_PORT,
        API_HOST_URL: process.env.API_HOST_URL,
        API_RUNNING_URL: process.env.API_RUNNING_URL,
    },
    DB_CONFIG: {
        DB_URL: process.env.DB_URL,
        DB_USER: process.env.DB_USER,
        DB_PASSWORD: process.env.DB_PASSWORD,
        DB_DATABASE_NAME: process.env.DB_NAME
    },
    // LOGIN_CONFIG: {
    //     ADMIN_LOGIN: {
    //         JWT_SECRET: process.env.ADMIN_LOGIN_JWT_SECRET,
    //         LOGIN_SECRET_KEY: process.env.ADMIN_LOGIN_SECRET_KEY,
    //         JWT_VALIDITY: add_hours(new Date(), 24)
    //     }
    // }

};