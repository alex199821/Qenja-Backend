const config = require("./utils/config");
const app = require("./app");
const http = require("http");
const logger = require("./utils/logger");

const server = http.createServer(app);

console.log(config.PORT);

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
