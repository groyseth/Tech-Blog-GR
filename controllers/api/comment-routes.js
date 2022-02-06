const router = require('express').Router();
// const withAuth = require('../../utils/auth');
const { Post,User, Comment } = require('../../models');

router.get('/', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.logged_In) {
      res.redirect('/');
      return;
    }
    // Otherwise, render the 'login' template
    res.render('single-post');
})
// router.get('/', withAuth, function(req, res) {
//   res.render('single-post', {layout: 'dashboard'});
// });


router.post('/',  async (req, res) => {
    try {
      const comment = await Comment.create({
        ...req.body,
  //       include: [
  //         {
  //           model: User,
  //           attributes: ["username", "userId"],

  //       // userid: req.session.userid,
        
  //       }];
  //   }),
  // },
      })
      // console.log(comment);
        
      res.status(200).json(comment);
    } catch (err) {
      res.status(400).json(err);
    }
  });
module.exports = router;
