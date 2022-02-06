const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Post, User, Comment } = require('../../models');

router.get('/', async (req, res) => {
    // If the user is already logged in, redirect to the homepage
    // if (req.session.loggedIn) {
    //   res.redirect('/');
    //   return;
    // }
    // Otherwise, render the 'login' template
    // res.render('new-post');
//     const postData = await Post.findByPk(req.params.id, {
//       include: [
//           {
//               model: User,
//           },
//           {
//               model: Comment,
//               include: {
//                   model: User,
//               }
//           },
//       ]
//   });
// console.log(postData);
  // res.status(200).json(postData);

    res.render('new-post', {layout: 'dashboard'});
})
router.get('/', withAuth, function(req, res) {
  
});


router.post('/',  async (req, res) => {
    try {
      const newPost = await Post.create({
        title: req.body.title,
        body: req.body.body,
        user_Id: req.session.user_Id
        
        // ...req.body,
        // user_id: req.session.user_id,
        // postId: req.session.postId
      });
      
        
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });
module.exports = router;