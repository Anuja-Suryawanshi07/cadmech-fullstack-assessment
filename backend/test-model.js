const equipmentModel = require("./models/equipmentModel");

async function test() {
    try {
        const equipment = await equipmentModel.getAllEquipment();

        console.log("Equipment List");
        console.table(equipment);

        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}
 test();