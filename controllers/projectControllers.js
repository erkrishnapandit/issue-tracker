// import models
const Projects = require('../models/projectSchema');

// creating project controller
module.exports.create = (req, res) => {
    //create project and redirect back
    Projects.create(req.body, (err, createProject) => {
        if (err) {
            console.log("Error white creating project controller", err);
            return;
        }
    })
    res.redirect('/');
}


