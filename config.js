const mode = process.env.NODE_ENV || "local";
const config = require("./config.json")[mode];

module.exports = config;