const express = require("express");
const Projects = require("./model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const projects = await Projects.getProjects();
    const booleanProjects = projects.map((project) => {
      if (project.project_completed === 0 || !project.project_completed) {
        return { ...project, project_completed: false };
      } else {
        return { ...project, project_completed: true };
      }
    });
    res.status(200).json(booleanProjects);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newProject = await Projects.postProject(req.body);
    if (newProject[0].project_completed === 0) {
      res.status(201).json({ ...newProject[0], project_completed: false });
    } else {
      res.status(201).json({ ...newProject[0], project_completed: true });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
