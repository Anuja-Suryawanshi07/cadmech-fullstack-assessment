import { useEffect, useState } from "react";

function EquipmentTable({
  equipment,
  loading,
  error,
  onEdit,
  onDelete,
}) {
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
    <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-[900px] w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">
                Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">
                Type
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">
                Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">
                Location
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">
                Serial Number
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">
                Installed Date
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {equipment.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="text-center py-10 text-gray-500"
                >
                  No equipment found.
                </td>
              </tr>
            ) : (
              equipment.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    {item.name}
                  </td>

                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    {item.type}
                  </td>

                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    {item.location || "-"}
                  </td>

                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    {item.serial_number || "-"}
                  </td>

                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    {item.installed_date || "-"}
                  </td>

                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <div className="flex gap-2">
                      <button
                        onClick={() => onEdit(item)}
                        className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded-md text-sm transition cursor-pointer"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => onDelete(item.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm transition cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EquipmentTable;
