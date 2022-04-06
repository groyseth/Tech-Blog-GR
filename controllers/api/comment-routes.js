const router = require('express').Router();
// const withAuth = require('../../utils/auth');
const { Post,User, Comment } = require('../../models');
const withAuth = require('../../utils/auth')
// router.get('/', (req, res) => {
//     // If the user is already logged in, redirect to the homepage
//     if (req.session.logged_In) {
//       res.redirect('/');
//       return;
//     }
//     // Otherwise, render the 'login' template
//     res.render('single-post');
// })
// router.get('/', withAuth, function(req, res) {
//   res.render('single-post', {layout: 'dashboard'});
// });
router.post('/', withAuth, async (req, res) => {
  try {
    const commentPost = await Comment.create({
      body: req.body.body,
      userId: req.session.user_id,
      postId: req.body.postId
      
      // ...req.body,
      // user_id: req.session.user_id,
      // postId: req.session.postId
      // include: [
      //   {
      //     model: User,
      //     attributes: ['username'],
      //   },
      // ],
    // });
    });
    
    console.log(commentPost);
      
    res.status(200).json(commentPost);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// router.post('/',  async (req, res) => {
//     try {
//       const comment = await Comment.create({
//         ...req.body,
//   //       include: [
//   //         {
//   //           model: User,
//   //           attributes: ["username", "userId"],

//   //       // userid: req.session.userid,
        
//   //       }];
//   //   }),
//   // },
//       })
//       console.log(comment);
        
//       res.status(200).json(comment);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });


module.exports = router;
