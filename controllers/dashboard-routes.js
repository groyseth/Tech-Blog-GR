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
    res.render('all-posts-admin', {layout: 'dashboard'});
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
      const postData = await Post.findByPk(req.params.id, {
        include: [
            {
                model: User,
            },
            {
                model: Comment,
                include: {
                    model: User,
                }
            },
        ]
    });

        
      // const allPost = postData.map(post=>post.get({ plain: true }));
      // console.log(allPost);
      const allPostings = postData.get({ plain: true });
// const comments = post.comments;
  
      res.render('all-posts-admin', {
        layout:'dashboard',
        allPostings,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;