const router = require('express').Router();
const withAuth = require('../utils/auth');
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
router.get('/',  function(req, res) {
    if( req.session.logged_In){
    res.render('all-posts-admin', {layout: 'dashboard', loggedIn: req.session.logged_In});
    // loggedIn: req.session.logged_In
    } else{
      res.redirect('/')
    }
});

// router.get('/', async (req, res) => {
//     try {
//       const postData = await Post.findall();
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


// router.get('/', async (req, res) => {
//   try {
//     const postData = await Post.findAll({
//       where: 
//       {
//         user_id: req.session.id
//       }

//     });


    
      
//     const allPost = postData.map(post=>post.get({ plain: true }));
//     console.log(allPost);

//     res.render('all-posts', {
//       layout:'dashboard',
//       allPostings,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;

router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findAll( {
        where : {
          userId: req.session.user_id,
        },
        
        // include: 
        // [
        //     {
        //         model: User,
        //         attributes: 'username'
        //     },
        //     // {
        //         // model: Comment,
            
        // ]
    });
// console.log(postData);
        //single post delete
      const allPost = postData.map(post=>post.get({ plain: true }));
      console.log(allPost);
      // const allPostings = postData.get({ plain: true });
// const comments = post.comments;
  
      res.render('all-posts-admin', {
        layout:'dashboard',
        ...allPost,
        // allPost,
        loggedIn: req.session.logged_In
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;