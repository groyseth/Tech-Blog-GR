const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

  router.get('/', async (req, res) => {
  
    try {
      // Get all projects and JOIN with user data
      const postData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });

    const posts = postData.map((homePost) =>
      homePost.get({ plain: true })
    );

    res.render('all-posts', {
      posts,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.title, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    const allPost = postData.get({ plain: true });

    res.render('all-posts', {
      ...allPost,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});


// router.get('/signup', (req, res) => {
//   // If the user is already logged in, redirect to the homepage
//   // if (req.session.loggedIn) {
//   //   res.redirect('/');
//   //   return;
//   // }
//   // Otherwise, render the 'login' template
//   res.render('signup');
// });
module.exports = router;

