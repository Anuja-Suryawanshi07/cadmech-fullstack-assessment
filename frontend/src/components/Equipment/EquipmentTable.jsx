import { useEffect, useState } from "react";

function EquipmentTable({ equipment, loading, error, refreshKey }) {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";

      case "Under Maintenance":
        return "bg-yellow-100 text-yellow-700";

      case "Decommissioned":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };
  if (loading) {
    return <p className="mt-6">Loading equipment...</p>;
  }

  if (error) {
    return <p className="text-red-500 mt-6">{error}</p>;
  }

  return (
    <div className="mt-8 bg-white rounded-lg shadow overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Location</th>
            <th className="p-3 text-left">Serial Number</th>
            <th className="p-3 text-left">Installed Date</th>
          </tr>
        </thead>
        <tbody>
          {equipment.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="p-3">{item.name}</td>
              <td className="p-3">{item.type}</td>
              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(item.status)}`}
                >
                  {item.status}
                </span>
              </td>
              <td className="p-3">{item.location}</td>
              <td className="p-3">{item.serial_number}</td>
              <td className="p-3">{item.installed_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EquipmentTable;
