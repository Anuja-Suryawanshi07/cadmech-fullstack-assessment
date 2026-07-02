import axios from "axios";

const api = axios.create({
  baseURL: "/api",  
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