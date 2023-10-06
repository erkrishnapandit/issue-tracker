// Importing project model from projectSchema
const Projects = require('../models/projectSchema');

// Creating home controller
exports.home = async function (req, res) {
  try {
    const projects = await Projects.find({});
    res.render('home', { projects: projects });
  } catch (error) {
    console.log("Error in finding projects from database", error);
  }
}

// creating project controller
exports.createProjectPage = function (req, res) {
  res.render('createProject');
}

// Creating details page controller
module.exports.details = async (req, res) => {

  try {
    const id = req.params.projectId;
    const project = await Projects.findById(id).populate('issues');//populate, fill issue array with document related to dave id of issue

    // find authors
    console.log(project, project?.issues);
    const issues = project?.issues;
    const authors = [];
    for (let i = 0; i < issues?.length; i++) {
      if (!authors.includes(issues[i].author)) {
        authors.push(issues[i].author);
      }
    }

    return res.render('details', {
      project: project,
      issues: issues,
      authors
    });

    // Error handling
  } catch (error) {
    console.log("Error while creating details page controller", error);
  }

}


