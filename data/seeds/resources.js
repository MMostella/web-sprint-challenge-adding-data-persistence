exports.seed = function (knex) {
  return knex("resources").insert([
    {
      resource_name: "testing 1",
      resource_description: "testing project 1",
    },
    {
      resource_name: "testing 2",
      resource_description: "testing resource 2",
    },
  ]);
};
