const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getPatients);
//When we go to this route, we're going to call this function.
router.post("/", controller.addPatients);
router.get("/:id", controller.getPatientsById);
router.put("/:id", controller.updatePatient);
router.delete("/:id", controller.removePatient);

module.exports = router;
