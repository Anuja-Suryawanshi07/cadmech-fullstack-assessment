import { useEffect, useState } from "react";
import StatsCards from "../components/Dashboard/StatsCards";
import EquipmentFilters from "../components/Search/EquipmentFilters";
import EquipmentTable from "../components/Equipment/EquipmentTable";
import AddEquipmentModal from "../components/Equipment/AddEquipmentModal";
import { getEquipment } from "../services/equipmentApi";
import { createEquipment } from "../services/equipmentApi";

function Dashboard() {
    const [equipment, setEquipment] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [filters, setFilters] = useState({
        search: "",
        type: "",
        status: "",
    });

    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
        fetchEquipment(filters);
    },[filters]);

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

    const handleSaveEquipment = async (equipmentData) => {
        try {
            const response = await createEquipment(equipmentData);

            console.log(response.data);

            setIsModalOpen(false);

             fetchEquipment(filters);
        } catch (error) {
            console.error("Failed to create equipment", error);
        }
    };
    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Dashboard
            </h2>
            <p className="text-gray-600">
                Welcome to the SmartLab Equipment Manager.
            </p>

            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
            >
                + Add Equipment
            </button>
            <StatsCards />

            <EquipmentFilters 
                filters={filters}
                onFilterChange={handleFilterChange}
            />    
            <EquipmentTable 
                equipment={equipment}
                loading={loading}
                error={error}
                refreshKey={refreshKey}
            />

            <AddEquipmentModal
                isOpen={isModalOpen}
                onClose={() =>setIsModalOpen(false)}
                onSave={handleSaveEquipment}
            />    
        </div>
    );
}

export default Dashboard;