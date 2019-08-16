var db = require("../models");
var path = require("path");

module.exports = function (app, passport) {
  // Load main login page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/login.html"))

  });

  // Load Signup page
  app.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/signup.html")) 
  });

  // Load search page
  app.get("/search", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/search.html"))
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


  app.get('/collection', isLoggedIn, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/collection.html"));
  });
  // app.get('/user', isLoggedIn, function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/html/user.html"));

  // });
  app.get('/records' , isLoggedIn , function(req,res){
    res.sendFile(path.join(__dirname, "..public/html/records.html"));
  });

  // =====================================
  // LOGOUT ==============================
  // =====================================
  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });
};

// route middleware to make sure
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated()) {
    return next();
  }
  // if they aren't redirect them to the home page
  res.redirect('/');
}