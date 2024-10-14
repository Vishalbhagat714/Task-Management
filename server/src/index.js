const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = require("./app");

dotenv.config({ path: "./.env" });

const startServer = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port: ${process.env.PORT || 8000}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

startServer();
