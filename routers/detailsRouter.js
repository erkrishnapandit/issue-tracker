//create router
const express = require('express');
const router = express.Router();

//Importing details controller
const detailsControllers = require("../controllers/detailsControllers");

//all routes
router.post('/search-by-title/:projectId', detailsControllers.searchByTitleOrLabel);
router.post('/search-by-author/:projectId', detailsControllers.searchByAuthor);
router.get('/clear-filter/:projectId', detailsControllers.clearFilter);

router.get('/create-issue/:projectId', detailsControllers.createIssuePage);
router.use('/create-issue', require('./issueRouter'));

//exporting router
module.exports = router;