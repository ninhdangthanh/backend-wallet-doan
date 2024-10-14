import express from "express";
import {
    createActivity,
    getAllActivities,
    getActivityById,
    updateActivity,
    deleteActivity,
} from "../controllers/activity.controller.js"; // Update the path as needed

const router = express.Router();

router.post("", createActivity); // Create a new activity
router.get("", getAllActivities); // Get all activities
router.get("/:id", getActivityById); // Get an activity by ID
router.put("/:id", updateActivity); // Update an activity by ID
router.delete("/:id", deleteActivity); // Delete an activity by ID

export default router;
