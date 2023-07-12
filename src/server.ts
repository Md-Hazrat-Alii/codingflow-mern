import app from "./app";
import env from "./utility/validateEnv";
import mongoose from "mongoose";

const port = env.PORT;
const mongoConnectionString = env.MONGO_CONNECTION_STRING;

mongoose
  .connect(mongoConnectionString)
  .then(() => {
    console.log("Mongoose connected");
    app.listen(port, () => {
      console.log("Server running on port: " + port);
    });
  })

  .catch(console.error);
