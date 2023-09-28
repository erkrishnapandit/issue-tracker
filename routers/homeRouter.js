//creating router
const express = require('express');
const router = express.Router();

//Importing home controller
const homeControllers = require("../controllers/homeControllers");
//Importing details controller
const detailsControllers = require("../controllers/detailsControllers");



//all routes
router.get('/', homeControllers.home);
router.get('/create-project', homeControllers.createProjectPage);
router.use('/create-project', require('./projectRouter'));

router.get('/details/:projectId', homeControllers.details);
router.get('/create-issue', detailsControllers.createIssuePage);
router.use('/details', require("./detailsRouter"));

//export router
module.exports = router;