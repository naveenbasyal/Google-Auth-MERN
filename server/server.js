const express = require("express");
const app = express();
require("./db/conn"); // importing db connection
const routes = require("./routes/route"); // importing routes
const cors = require("cors");
const port = process.env.PORT || 8000; // Port No
// app.use(express.urlencoded());
app.use(cors());
app.use(express.json());
app.use(routes); // Using Routes

app.listen(port, () => {
  console.log(`Server running at port http://localhost:${port}`);
});
