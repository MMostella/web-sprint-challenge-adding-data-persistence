exports.seed = function (knex) {
  return knex("tasks").insert([
    {
      task_description: "testing project 1",
      task_notes: "testing notes",
      task_completed: "false",
    },
    {
      task_description: "testing project 2",
      task_notes: "testing notes",
      task_completed: "false",
    },
  ]);
};
