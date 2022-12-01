const { Router } = require("express");
const { readHardware, createHardware, deleteHardware, vista_crear, updateHardware } = require("../controllers/hardware");

const router = Router();

router.get("/", readHardware);
router.post("/create", createHardware);
router.get("/crear", vista_crear)
router.get("/delete/:id", deleteHardware)
router.post("/update", updateHardware)


module.exports = router;