import express from "express";
import adminRoutes from "./admin/admin.js";

const router = express.Router();

router.use("/api/admin", adminRoutes);
export default router;
