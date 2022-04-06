// Middleware to check if user is logged in using req.session
const withAuth = (req, res, next) => {
  // If user is not logged in, redirect to login page
  // else continue to next middleware
  if (!req.session.logged_In) {
    alert("You must be logged in!")
   return res.redirect('/');
  } else {
    next();
  }
};




module.exports = withAuth;
