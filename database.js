const mongoose = require("mongoose");

async function connectionDB() {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("Database Connected");
  } catch (err) {
    console.log("Error💥:( ", err);
  }
}

module.exports = connectionDB;
