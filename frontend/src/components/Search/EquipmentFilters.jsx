function EquipmentFilters({ filters, onFilterChange }) {
  return (
    <div className="mt-8 mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <input
        type="text"
        name="search"
        placeholder="Search by equipment name..."
        value={filters.search}
        onChange={onFilterChange}
        className="border rounded-lg px-4 py-2"
      />

      <select
        name="type"
        value={filters.type}
        onChange={onFilterChange}
        className="border rounded-lg px-4 py-2"
      >
        <option value="">All Types</option>
        <option value="CNC Machine">CNC Machine</option>
        <option value="IoT Sensor">IoT Sensor</option>
        <option value="Automation Trainer">Automation Trainer</option>
        <option value="PLC Module">PLC Module</option>
        <option value="Hydraulic System">Hydraulic System</option>
        <option value="Pneumatic System">Pneumatic System</option>
        <option value="Electrical Panel">Electrical Panel</option>
      </select>

      <select 
        name="status"
        value={filters.status}
        onChange={onFilterChange}
        className="border rounded-lg px-4 py-2"
       >
        <option value="">All Status</option>
        <option value="Active">Active</option>
        <option value="Under Maintenance">Under Maintenance</option>
        <option value="Decommissioned">Decommissioned</option>
      </select> 
    </div>
  );
}

export default EquipmentFilters;
