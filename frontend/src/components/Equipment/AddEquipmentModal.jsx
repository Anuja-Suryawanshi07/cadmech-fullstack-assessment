import { useEffect, useState } from "react";

function AddEquipmentModal({ isOpen, onClose, onSave, editItem, isEditMode }) {
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

  useEffect(() => {
    if (isEditMode && editItem) {
      setFormData({
      id: editItem.id,
      name: editItem.name || "",
      type: editItem.type || "",
      status: editItem.status || "Active",
      location: editItem.location || "",
      serial_number: editItem.serial_number || "",
      installed_date: editItem.installed_date || "",
      description: editItem.description || "",
    });
    }
  }, [editItem, isEditMode]);

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: "",
        type: "",
        status: "Active",
        location: "",
        serial_number: "",
        installed_date: "",
        description: "",
      });
    }
  }, [isOpen]);

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
    console.log("VALIDATION:", isValid);
    if (!validate()) return;
    console.log("Submitting formData:", formData);
    onSave(formData, isEditMode);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
        <h2 className="text-2xl font-bold mb-6">{isEditMode ? "Edit Equipment" : "Add Equipment"}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Name *</label>
            <input
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Serial Number</label>

            <input
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              name="serial_number"
              value={formData.serial_number}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Installed Date</label>

            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              name="installed_date"
              value={formData.installed_date}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Description</label>

            <textarea
              row={3}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer transition"
            >
              {isEditMode ? "Update Equipment" : "Save Equipment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEquipmentModal;
