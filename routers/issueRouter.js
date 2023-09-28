//create router
const express = require('express');
const router = express.Router();

//Importing issue controller
const issueControllers = require("../controllers/issueControllers");


//all routes
router.post('/create/:projectId', issueControllers.createIssue);

//exporting router
module.exports = router;