const {
    EQUIPMENT_TYPES,
    EQUIPMENT_STATUSES,
} = require("../utils/constants");

    const validateEquipment = (req, res, next) => {
        const { name, type, status } = req.body;

        if (!name || !type || !status) {
            return res.status(400).json({
                success: false,
                message: "Name, type and status are required."
            });
        }
        
        if (!EQUIPMENT_TYPES.includes(type)) {
            return res.status(400).json({
                success: false,
                message: "Invalid equipment type.",
            });
        }

        if (!EQUIPMENT_STATUSES.includes(status)) {
            return res.status(400).json({
                success: false,
                message: "Invalid equipment status.",
            });
        }

        next();
    };

    const validateId = (req, res, next) => {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid equipment ID.",
            });
        }
        next();
    };

    module.exports = {
        validateEquipment,
        validateId,
    };