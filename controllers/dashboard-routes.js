const router = require('express').Router();

const { Post } = require("../models");


// router.get('/', (req, res) => {
//     // If the user is already logged in, redirect to the homepage
//     // if (req.session.loggedIn) {
//     //   res.redirect('/');
//     //   return;
//     // }
//     // Otherwise, render the 'login' template
//     res.render('dashboard');
// })
router.get('/', function(req, res) {
    res.render('dashboard', {layout: 'dashboard'});
});

// router.get('/post/:id', async (req, res) => {
//     try {
//       const postData = await User.findOne(req.params.id, {
//         include: [
//           {
//             model: Post,
//             attributes: ['title', 'body'],
//           },
//         ],
//       });
//       const allPost = postData.get({ plain: true });
  
//       res.render('dashboard', {
//         ...allPost,
//         logged_in: req.session.logged_in
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
module.exports = router;