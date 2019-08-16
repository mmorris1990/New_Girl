var db = require("../models");
module.exports = function (app) {
  // Find all Records and return them to the user with res.json
  app.get("/api/records", function (req, res) {
    db.sequelize.query("select Username, Artist, Album, Year, WillingToTrade from Records r inner join Users u on u.id = r.UserId")
      .then(function (dbRecord) {
        res.json(dbRecord);
      });
  });

  // Find all Records by Artist and return them to the user with res.json
  app.get("/api/records/artist/:artist", function (req, res) {
    db.sequelize.query("select Username, Artist, Album, Year, WillingToTrade from Records r inner join Users u on u.id = r.UserId Where Artist=" + req.params.artist)
      .then(function (dbRecord) {
        res.json(dbRecord);
      });
  });

  // Find all Records by Album and return them to the user with res.json
  app.get("/api/records/album/:album", function (req, res) {
    db.sequelize.query("select Username, Artist, Album, Year, WillingToTrade from Records r inner join Users u on u.id = r.UserId Where Album=" + req.params.album)
      .then(function (dbRecord) {
        res.json(dbRecord);
      });
  });

  // Get all record information by User
  app.get("/api/User/id/:id", function (req, res) {
    db.sequelize.query("select Username, Artist, Album, Year, WillingToTrade from Users u inner join Records r on u.id = r.UserId Where u.id=" + req.params.id).
      then(function (data) {
        res.json(data);
      });
  });

  // Get Albums that are willing to trade with userId
  app.get("/api/WillingToTrade", function (req, res) {
    db.sequelize.query("select Username, Artist, Album, Year, WillingToTrade from Records r inner join Users u on u.id = r.UserId Where WillingToTrade=1").
      then(function (data) {
        res.json(data);
      });
  });

  // Post Record to Record collection
  app.post("/api/addRecord", function (req, res) {
    console.log(req.body)
    db.Record.create(req.body).then(function (dbRecord) {
      res.json(dbRecord);
    });
  });
  
  //Delete Album
  app.delete("/api/records/delete/:id", function (req, res) {
    db.Record.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbRecord) {
      res.json(dbRecord);
    });
  });
};
