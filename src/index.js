const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "../.env") });

const express = require("express");

const { cors } = require("./middlewares/app");
const authRouter = require("./routes/auth.router.js");
const kelasRouter = require("./routes/kelas.router");
const mataPelajaranRouter = require("./routes/mata_pelajaran.router");
const babRouter = require("./routes/bab.router");
const subBabRouter = require("./routes/sub_bab.router");
const materialRouter = require("./routes/material.router");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors);

if (!process.env.JWT_SECRET) {
  console.error(
    "JWT_SECRET is not provided, fill it with random string or generate it using 'openssl rand -base64 32'"
  );
  process.exit(1);
}

app.use("/api/auth", authRouter);
app.use("/api/kelas", kelasRouter);
app.use("/api/mata-pelajaran", mataPelajaranRouter);
app.use("/api/bab", babRouter);
app.use("/api/sub-bab", subBabRouter);
app.use("/api/material", materialRouter);

app.listen(process.env.SERVER_PORT || 3000, () => {
  console.log("Server Running");
});
