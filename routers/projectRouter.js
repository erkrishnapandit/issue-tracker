//create router
const express = require('express');
const router = express.Router();

//Importing project controller
const projectControllers = require("../controllers/projectControllers");


//all routes
router.post('/create', projectControllers.create);

//export router
module.exports = router;