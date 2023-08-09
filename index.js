const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const vendorRoutes = require("./routes/vendors");
const orderRoutes = require("./routes/orders");
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.options("*", cors());
const whitelist = ["http://localhost:4201"];
const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.use("/vendors", vendorRoutes);
app.use("/orders", orderRoutes);
app.listen(port, () => {
  console.log(`Server started at port http://localhost:${port}`);
});
