import { useState } from "react";

function AddEquipmentModal({ isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    status: "Active",
    location: "",
    serial_number: "",
    installed_date: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.type) newErrors.type = "Type is required";
    if (!formData.status) newErrors.status = "Status is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();

    if (!validate()) return;

    onSave(formData);
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
        <h2 className="text-2xl font-bold mb-6">Add Equipment</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Name *</label>
            <input
              className="w-full border rounded p-2"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <label>Type</label>

            <select
              className="w-full border rounded p-2"
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="">Select Type</option>
              <option>CNC Machine</option>
              <option>IoT Sensor</option>
              <option>Automation Trainer</option>
              <option>PLC Module</option>
              <option>Hydraulic System</option>
              <option>Pneumatic System</option>
              <option>Electrical Panel</option>
            </select>

            {errors.type && (
              <p className="text-red-500 text-sm">{errors.type}</p>
            )}
          </div>

          <div>
            <label>Status *</label>
            <select
              className="w-full border rounded p-2"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option>Active</option>
              <option>Under Maintenance</option>
              <option>Decommissioned</option>
            </select>
          </div>

          <div>
            <label>Location</label>

            <input
              className="w-full border rounded p-2"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Serial Number</label>

            <input
              className="w-full border rounded p-2"
              name="serial_number"
              value={formData.serial_number}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Installed Date</label>

            <input
              type="date"
              className="w-full border rounded p-2"
              name="installed_date"
              value={formData.installed_date}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Description</label>

            <textarea
              row={3}
              className="w-full border rounded p-2"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="border px-4 py-2 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEquipmentModal;
