import { useEffect, useState } from "react";
import { getStats } from "../../services/equipmentApi"
function StatsCards({ refreshKey }) {
    const [stats, setStats] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchStats();
    }, [refreshKey]);

    const fetchStats = async () => {
        try {
            const response = await getStats();

            setStats(response.data.data);
        } catch (error) {
            console.error("Failed to fetch stats:", error);
            setError("Unable to load statistics");
        }
    };
    

    if (error) {
        return (
            <p className="text-red-500">
                {error}
            </p>
        );
    }

    if (!stats) {
        return (
            <p>
                Loading statistics...
            </p>
        );
    }

    const cards = [
        {
            title: "Total Equipment",
            value: stats.total,
        },
        {
            title: "Active",
            value: stats.active
        },
        {
            title: "Under Maintenance",
            value: stats.underMaintenance,
        },
        {
            title: "Decommissioned",
            value: stats.decommissioned,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">

            {cards.map((card) =>(
                <div 
                    key={card.title}
                    className="bg-white rounded-lg shadow p-6"
                >
                    <h3 className="text-gray-600 text-sm">
                        {card.title}
                    </h3>   

                    <p className="text-3xl font-bold mt-2">
                        {card.value}    
                    </p> 
                </div>    
            ))}
        </div>
    );
}

export default StatsCards;