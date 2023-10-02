// import models
const Projects = require('../models/projectSchema');

// creating project controller
module.exports.create = async (req, res) => {
    //create project and redirect back
    try {
        await Projects.create(req.body)
        res.redirect('/')
    } catch (error) {
        console.log("Error white creating project controller", error);
    }
}


