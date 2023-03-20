const mode = process.env.NODE_ENV || "local";
const config = require("../login/config.json")[mode];

module.exports = config;