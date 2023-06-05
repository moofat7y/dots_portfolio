const express = require("express");
const env = require("dotenv").config();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const dbConnect = require("./config/dbconnect");
const cors = require("cors");

const authRoute = require("./routes/authRoute");
const uploadRoute = require("./routes/uploadRoute");
const imageRoute = require("./routes/imagesRoute");

const app = express();

const PORT = process.env.PORT || 8080;

// Connect to DB
dbConnect();

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://dots-portfolio-admin.vercel.app",
    "https://dots-portfolio-moofat7y.vercel.app",
  ],
  credentials: true,
};
app.use(cors({ credentials: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/upload", uploadRoute);
app.use("/api/image", imageRoute);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const errMessage = error.message;
  const stack = error.stack;

  res.status(status).json({ message: errMessage, stack });
});

app.listen(8080, () => {
  console.log(`Server is runing on port ${PORT}`);
});
