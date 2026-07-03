import { useEffect, useState } from "react";
import StatsCards from "../components/Dashboard/StatsCards";
import EquipmentFilters from "../components/Search/EquipmentFilters";
import EquipmentTable from "../components/Equipment/EquipmentTable";
import AddEquipmentModal from "../components/Equipment/AddEquipmentModal";
import {
  getEquipment,
  createEquipment,
  updateEquipment,
  deleteEquipment,
} from "../services/equipmentApi";

import toast from "react-hot-toast";

function Dashboard() {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const [filters, setFilters] = useState({
    search: "",
    type: "",
    status: "",
  });

  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    fetchEquipment(filters);
  }, [filters]);

  const fetchEquipment = async (filters = {}) => {
    try {
      setLoading(true);

      const response = await getEquipment(filters);

      setEquipment(response.data.data);

      setError("");
    } catch (error) {
      console.error("Failed to fetch equipment:", error);
      setError("Unable to load equipment");
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = (item) => {
    console.log("EDIT ITEM:", item);

    setEditItem(item);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleSaveEquipment = async (data, isEditMode) => {
    try {
      if (isEditMode) {
        await updateEquipment(data.id, data);
        toast.success("Equipment updated successfully!");
      } else {
        await createEquipment(data);
        toast.success("Equipment added successfully!");
      }

      setIsModalOpen(false);
      setEditItem(null);
      setIsEditMode(false);

      // Refresh table
      await fetchEquipment(filters);

      //Refresh stats
      setRefreshKey((prev) => prev + 1);
    } catch (error) {
      console.error("Save failed", error);
      toast.error("Failed to save equipment");
    }
  };
  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this equipment?",
      );

      if (!confirmDelete) return;
      await deleteEquipment(id);

      toast.success("Equipment deleted successfully!");

      // Refresh table
      await fetchEquipment(filters);

      // Refresh stats
      setRefreshKey((prev) => prev + 1);
    } catch (error) {
      console.error("Delete failed", error);
      toast.error("Failed to delete equipment");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Dashboard
          </h2>

          <p className="text-gray-600 mt-1">
            Welcome to the SmartLab Equipment Manager.
          </p>
        </div>

        <button
          onClick={() => {
            setEditItem(null);
            setIsEditMode(false);
            setIsModalOpen(true);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition cursor-pointer"
        >
          + Add Equipment
        </button>
      </div>

      {/* Stats */}
      <StatsCards refreshKey={refreshKey} />

      {/* Filters */}
      <EquipmentFilters filters={filters} onFilterChange={handleFilterChange} />

      {/* Table */}
      <EquipmentTable
        equipment={equipment}
        loading={loading}
        error={error}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Modal */}
      <AddEquipmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveEquipment}
        editItem={editItem}
        isEditMode={isEditMode}
      />
    </div>
  );
}

export default Dashboard;
