var db = require("../models");
var path = require("path")

module.exports = function (app, passport) {
  // Load index page
  app.get("/", function (req, res) {
<<<<<<< HEAD
      res.sendFile(path.join(__dirname, "../public/html/login.html"))
=======
    db.Example.findAll({}).then(function (dbExamples) {
      res.sendFile(path.join(__dirname, "../public/html/login.html"));
>>>>>>> 4ada8833d4a6dda166165274626f952c0f86ea91
    });

  app.get("/signup", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/html/signup.html"))
    });


  // process the signup form
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/', // redirect to the secure profile section
    failureRedirect: '/signup', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));

  // process the login form
  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/search', // redirect to the secure profile section
    failureRedirect: '/', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }),
    function (req, res) {
      console.log("hello");

      if (req.body.remember) {
        req.session.cookie.maxAge = 1000 * 60 * 3;
      } else {
        req.session.cookie.expires = false;
      }
      res.redirect('/calendar');
    });

  app.get('/calendar', isLoggedIn, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/search.html"))
  });

  // =====================================
  // LOGOUT ==============================
  // =====================================
  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

  // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
      successRedirect: '/', // redirect to the secure profile section
      failureRedirect: '/signup', // redirect back to the signup page if there is an error
      failureFlash: true // allow flash messages
    }));

  // process the login form
  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/search', // redirect to the secure profile section
    failureRedirect: '/', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }),
    function (req, res) {
      console.log("hello");

      if (req.body.remember) {
        req.session.cookie.maxAge = 1000 * 60 * 3;
      } else {
        req.session.cookie.expires = false;
      }
      res.redirect('/search');
    });


  // Load example page and pass in an example by id
<<<<<<< HEAD
//   app.get("/example/:id", function (req, res) {
//     db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
//       res.render("example", {
//         example: dbExample
//       });
//     });
//   });


=======
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });
>>>>>>> 4ada8833d4a6dda166165274626f952c0f86ea91
};

// route middleware to make sure
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}
