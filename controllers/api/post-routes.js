const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Post } = require('../../models');

// router.get('/', (req, res) => {
//     // If the user is already logged in, redirect to the homepage
//     // if (req.session.loggedIn) {
//     //   res.redirect('/');
//     //   return;
//     // }
//     // Otherwise, render the 'login' template
//     res.render('new-post');
// })
router.get('/', withAuth, function(req, res) {
  res.render('new-post', {layout: 'dashboard'});
});


router.post('/',  async (req, res) => {
    try {
      const newPost = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      
        
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });
module.exports = router;