import StatsCards from "../components/Dashboard/StatsCards";
import EquipmentTable from "../components/Equipment/EquipmentTable";

function Dashboard() {
    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Dashboard
            </h2>
            <p className="text-gray-600">
                Welcome to the SmartLab Equipment Manager.
            </p>

            <StatsCards />
            <EquipmentTable />

        </div>
    );
}

export default Dashboard;