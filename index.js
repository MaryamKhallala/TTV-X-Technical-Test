
const express = require("express");
const cors = require("cors");
const env = require('dotenv');
const app = express();
var bodyParser = require('body-parser');

env.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())


require("./routes/candidate.route")(app);


const PORT = process.env.APP_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
