const app = require("./app");
const config = require("./app/config/index");

const PORT = config.app.port;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
