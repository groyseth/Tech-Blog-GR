const router = require('express').Router();
const { Post, Comment, User } = require('../models');
// const withAuth = require('../utils/auth');






router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const postInfo = postData.map((allInPosts) =>
      allInPosts.get({ plain: true })
    );
    console.log(postInfo);
    res.render('all-posts', {
      postInfo,

      loggedIn: req.session.logged_In,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//   router.get('/', async (req, res) => {
  
//     try {
//       // Get all projects and JOIN with user data
//       const postData = await Post.findAll();
//     //   const postData = await Post.findByPk(req.params.id, {
//     //     include: {
//     //         model: User,
//     //     }
//     // });
    
//       //   include: [
//       //     {
//       //       model: User,
//       //       attributes: ['username'],
//       //     },
//       //   ],
//       // });

//     const posts = postData.map((homePost) =>
//       homePost.get({ plain: true })
//     );

//     res.render('all-posts', {
//       posts,
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: 
      {
        id: req.params.id
      }

    });
      
    const allPost = postData.get({ plain: true });
    // const allPost = postData.get({ plain: true });
    // console.log(allPost);

    res.render('single-post', {
      // layout:'main',
      // ...allPost,
      post: allPost,
      loggedIn: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// router.get('/',  async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Post }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('dashboard', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
  // res.redirect('/signup');
});


router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.logged_In) {
    res.redirect('/dashboard');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('signup');
});


module.exports = router;

