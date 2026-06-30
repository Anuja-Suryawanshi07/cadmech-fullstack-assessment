const db = require("../db/connection");

// Get all equipment
const getAllEquipment = async (filters = {}) => {
  let query = "SELECT * FROM equipment WHERE 1=1";
  const values = [];

  if (filters.search) {
    query += " AND name LIKE ?";
    values.push(`%${filters.search}%`);
  }

  if (filters.type) {
    query += " AND type = ?";
    values.push(filters.type);
  }

  if (filters.status) {
    query += " AND status = ?";
    values.push(filters.status);
  }

  query += " ORDER BY created_at DESC";

  const [rows] = await db.execute(query, values);

  return rows;
};

// Get equipment by ID
const getEquipmentById = async (id) => {
  const query = "SELECT * FROM equipment WHERE id = ?";

  const [rows] = await db.execute(query, [id]);

  return rows[0];
};

// Create equipment
const createEquipment = async (equipment) => {
  const {
    name,
    type,
    status,
    location,
    serial_number,
    description,
    installed_date,
  } = equipment;

  const query = `
        INSERT INTO equipment
        (name, type, status, location, serial_number, description, installed_date)
        VALUES (?, ?, ?, ?, ?, ?, ?)`;

  const [result] = await db.execute(query, [
    name,
    type,
    status,
    location,
    serial_number,
    description,
    installed_date,
  ]);

  return getEquipmentById(result.insertId);
};

// Update equipment

const updateEquipment = async (id, equipment) => {
  const {
    name,
    type,
    status,
    location,
    serial_number,
    description,
    installed_date,
  } = equipment;

  const query = `
        UPDATE equipment
        SET
            name = ?,
            type = ?,
            status = ?,
            location = ?,
            serial_number = ?,
            description = ?,
            installed_date = ?,
            WHERE id = ?`;

  await db.execute(query, [
    name,
    type,
    status,
    location,
    serial_number,
    description,
    installed_date,
    id,
  ]);

  return getEquipmentById(id);
};

// Delete equipment

const deleteEquipment = async (id) => {
  const query = "DELETE FROM equipment WHERE id = ?";

  const [result] = await db.execute(query, [id]);

  return result.affectedRows;
};

// Dashboard statistics

const getEquipmentStats = async () => {
  const query = `
        SELECT 
            COUNT(*) AS total,
            SUM(status = 'Active') AS active,
            SUM(status = 'Under Maintenance') AS underMaintenance,
            SUM(status = 'Decommissioned') AS decommissioned
        FROM equipment`;

  const [rows] = await db.execute(query);

  return rows[0];
};

module.exports = {
  getAllEquipment,
  getEquipmentById,
  createEquipment,
  updateEquipment,
  deleteEquipment,
  getEquipmentStats,
};
