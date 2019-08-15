var db = require("../models");

module.exports = function(app) {
<<<<<<< HEAD
  // Get all examples
  app.get("/api/scheduler", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/scheduler", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/scheduler/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
=======
  // Post Record to Record collection
  app.post("/api/addRecord", function(req, res) {
    console.log(req.body)
    db.Records.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });
  //Delete Album
  app.delete("/api/records/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
>>>>>>> 4ada8833d4a6dda166165274626f952c0f86ea91
    });
  });
};