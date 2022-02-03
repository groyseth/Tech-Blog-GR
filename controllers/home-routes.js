const router = require('express').Router();
const { Post, Comment, User } = require('../models');


  router.get('/', async (req, res) => {
  
  try {
    const postData = await Post.findAll(
  
    );

    const posts = postData.map((homePost) =>
      homePost.get({ plain: true })
    );

    res.render('all-posts', {
      posts,
      
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/dashboard');
//     return;
//   }

//   res.render('login');
// });


// // Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }
  // Otherwise, render the 'login' template
  res.render('login');
});


router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }
  // Otherwise, render the 'login' template
  res.render('signup');
});
module.exports = router;

