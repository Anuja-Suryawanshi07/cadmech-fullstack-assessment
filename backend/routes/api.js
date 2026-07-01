/**
 * SmartLab Equipment Manager — API Routes
 * CADMech Full Stack Assessment
 *
 * Handles all equipment CRUD operations
 * and dashboard statistics endpoints.
 *
 */

const express = require("express");
const router = express.Router();
const equipmentModel = require("../models/equipmentModel");

// ─── GET /api/equipment ────────────────────────────────────
// List all equipment
// Optional query params: ?search=keyword&type=CNC Machine&status=Active
router.get("/equipment", async (req, res) => {
  try {
    const filters = {
      search: req.query.search,
      type: req.query.type,
      status: req.query.status,
    };

    const data = await equipmentModel.getAllEquipment(filters);

    res.json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    console.error("Error fetching equipment:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch equipment",
    });
  }
});

// // ─── GET /api/equipment/:id ────────────────────────────────
// // Get a single equipment item by ID
router.get("/equipment/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const equipment = await equipmentModel.getEquipmentById(id);

    if (!equipment) {
      return res.status(404).json({
        success: false,
        message: "Equipment not found",
      });
    }

    res.json({
      success: true,
      data: equipment,
    });
  } catch (error) {
    console.error("Error fetching equipment:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// ─── POST /api/equipment ───────────────────────────────────
// Create new equipment
// Required fields: name, type, status
// Optional fields: location, serial_number, description, installed_date
router.post("/equipment", async (req, res) => {
  try {
    const {
      name,
      type,
      status,
      location,
      serial_number,
      description,
      installed_date,
    } = req.body;

    // Validate required fields
    if (!name || !type || !status) {
      return res.status(400).json({
        success: false,
        message: "name, type, and status are required fields",
      });
    }

    const newEquipment = await equipmentModel.createEquipment(req.body);

    res.status(201).json({
      success: true,
      message: "Equipment created successfully.",
      data: newEquipment,
    });
  } catch (error) {
    console.error("Error creating equipment:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// ─── PUT /api/equipment/:id ────────────────────────────────
// Update an existing equipment item
router.put("/equipment/:id", async (req, res) => {
  try {
    const id = req.params.id;

    // Check if equipment exists
    const existingEquipment = await equipmentModel.getEquipmentById(id);

    if (!existingEquipment) {
      return res.status(404).json({
        success: false,
        message: "Equipment not found.",
      });
    }

    const {
      name,
      type,
      status,
      location,
      serial_number,
      description,
      installed_date,
    } = req.body;

    // Validate required fields
    if (!name || !type || !status) {
      return res.status(400).json({
        success: false,
        message: "Name, type and status are required.",
      });
    }

    const updatedEquipment = await equipmentModel.updateEquipment(id, req.body);

    res.json({
      success: true,
      message: "Equipment updated successfully.",
      data: updatedEquipment,
    });
  } catch (error) {
    console.error("Error updating equipment:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

 // ─── DELETE /api/equipment/:id ─────────────────────────────
 // Delete an equipment item
router.delete('/equipment/:id', async (req, res) => {
  try {
    const id = req.params.id;

    // Check if equipment exists
    const existingEquipment = await equipmentModel.getEquipmentById(id);

    if (!existingEquipment) {
      return res.status(404).json({
        success: false,
        message: "Equipment not found.",
      });
    }

    await equipmentModel.deleteEquipment(id);

    res.status(200).json({
      success: true,
      message: "Equipment deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting equipment:", error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

    

// ─── GET /api/stats ────────────────────────────────────────
// Get dashboard statistics
// Should return: total count, active count, maintenance count, decommissioned count
router.get('/stats', async (req, res) => {
  try {
    
    const stats = await equipmentModel.getEquipmentStats();

    res.json({
      success: true,
      data: stats,
    });

  } catch (error) {
    console.error("Error fetching statistics:", error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
