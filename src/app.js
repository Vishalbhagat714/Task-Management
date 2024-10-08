const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Import routes
// const authRoutes = require("./routes/auth.routes");
// const tenantRoutes = require("./routes/tenant.route");
// const landlordRoutes = require("./routes/landlord.route");
// const certificateRoutes = require("./routes/certificate.route");
// const paymentRoutes = require("./routes/payment.routes");

// Use routes
// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/tenant", tenantRoutes);
// app.use("/api/v1/landlord", landlordRoutes);
// app.use("/api/v1/certificate", certificateRoutes);
// app.use("/api/v1/payments", paymentRoutes);

// Test route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Task Management Web Application.",
    description: "This is Task Management Wel Application.",
  });
});
app.get("*", (req, res) => {
  res.redirect(`${process.env.FRONTEND_URL}/error-404`);
});

module.exports = app;
