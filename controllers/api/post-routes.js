const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Post, User, Comment } = require('../../models');
// const { beforeFindAfterExpandIncludeAll } = require('../../models/User');

router.get('/', async (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (!req.session.logged_In) {
      res.redirect('/');
      return;
    }
//     // Otherwise, render the 'login' template
//     // res.render('new-post');
//     const postData = await Post.findByPk(req.params.id, {
//       include: [
//           {
//               model: User,

//           },
//           // {
//           //     model: Comment,
//           //     include: {
//           //         model: User,
//           //     }
//           // },
//       ]
//   });
// console.log(postData);
//   res.status(200).json(postData);

    res.render('new-post', {layout: 'dashboard'});
})
// router.get('/', withAuth, function(req, res) {
  
// });


router.post('/',  async (req, res) => {
  console.log(req.body, req.session.user_id);
    try {
      const newPost = await Post.create({
        title: req.body.title,
        body: req.body.body,
        userId: req.session.user_id,
        
        // ...req.body,
        // user_id: req.session.user_id,
        // postId: req.session.postId
      //   include: [
      //     {
      //       model: User,
      //       attributes: ['id'],
      //     },
      //   ],
      // // });
      });
      
      console.log(newPost);
        
      res.status(200).json(newPost);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });
module.exports = router;