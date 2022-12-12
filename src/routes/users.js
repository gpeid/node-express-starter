var path = require("path");

const userRoutes = (app, fs) => {
  // variables
  var dataPath = path.join(__dirname, "..", "data", "users.json");
  console.log(dataPath);
  // READ
  app.get("/users", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};

module.exports = userRoutes;
