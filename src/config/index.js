const path = require('path');

const env = process.env.NODE_ENV || 'development';
require('dotenv').config({ path: path.join(__dirname, `./../../.env.${ env }`) });

const config = {
    port: process.env.TIENDASG_SERVER_PORT,
    database: {
        protocol: process.env.TIENDASG_DATABASE_PROTOCOL,
        url: process.env.TIENDASG_DATABASE_URL,
        username: process.env.TIENDASG_DATABASE_USERNAME,
        password: process.env.TIENDASG_DATABASE_PASSWORD,
    }
};

module.exports = config;