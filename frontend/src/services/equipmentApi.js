import axios from "axios";

//1. Check for production environment variables, fall back to localhost for local development.
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"; 

const api = axios.create({
//2. Appended /api so it maps perfectly to backend endpoints. 
  baseURL: `${BASE_URL}/api`,  
});

// GET all equipment
export const getEquipment = (params = {}) => {
    return api.get("/equipment", {
        params,
    });
};

// GET equipment by ID
export const getEquipmentById = (id) => {
    return api.get(`/equipment/${id}`);
};

//CREATE equipment
export const createEquipment = (data) => {
    return api.post("/equipment", data);
};

// UPDATE equipment
export const updateEquipment = (id, data) => {
    return api.put(`/equipment/${id}`, data);
};

//DELETE equipment
export const deleteEquipment = (id) => {
    return api.delete(`/equipment/${id}`);
};

// GET dashboard statistics
export const getStats = () => {
    return api.get("/stats");
};

export default api;