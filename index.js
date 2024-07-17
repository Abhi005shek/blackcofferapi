const express = require("express");
const { config } = require("dotenv");
const connectionDB = require("./database");
const mongoose = require("mongoose");
const Data = require("./dataModel");

config({
  path: "./config.env",
});
const app = express();
connectionDB();

app.get("/api/v1/data", async (req, res) => {
  try {
    const data = await Data.find();

    res.status(200).json({
      status: "success",
      total: data.length,
      data,
    });
  } catch (err) {
    res.status(200).json({
      status: "error",
      message: err.message,
    });
  }
});

console.log(process.env.PORT);
app.listen(process.env.PORT, () => console.log("Server Started"));
