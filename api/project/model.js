const db = require("../../data/dbConfig");

function getProjects() {
  return db("projects");
}

function getById(project_id) {
  return db("projects").where("project_id", project_id);
}

async function postProject(project) {
  const [project_id] = await db("projects").insert(project);
  return getById(project_id);
}

module.exports = {
  getProjects,
  postProject,
};
