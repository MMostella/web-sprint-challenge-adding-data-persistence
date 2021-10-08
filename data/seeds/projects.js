exports.seed = function (knex) {
  return knex("resources").insert([
    {
      project_name: "testing 1",
      project_description: "testing project 1",
    },
    {
      project_name: "testing 2",
      project_description: "testing project 2",
    },
  ]);
};
