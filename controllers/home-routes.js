const router = require('express').Router();
const { Post, Comment } = require('../models');

// GET all galleries for homepage
// router.get('/', async (req, res) => {
  router.get('/', async (req, res) => {
  //   try {
  //     // console.log(res);
  //   res.render('all-posts', {
       
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json(err);
  //   }
  // });
  try {
    const postData = await Post.findAll(
      // include: [
      //   {
      //     model: Painting,
      //     attributes: ['filename', 'description'],
      //   },
      // ],
    );

    const posts = postData.map((homePost) =>
      homePost.get({ plain: true })
    );

    res.render('all-posts', {
      posts,
      // loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // GET one gallery
// router.get('/gallery/:id', async (req, res) => {
//   try {
//     const dbGalleryData = await Gallery.findByPk(req.params.id, {
//       include: [
//         {
//           model: Painting,
//           attributes: [
//             'id',
//             'title',
//             'artist',
//             'exhibition_date',
//             'filename',
//             'description',
//           ],
//         },
//       ],
//     });

//     const gallery = dbGalleryData.get({ plain: true });
//     // Send over the 'loggedIn' session variable to the 'gallery' template
//     res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // GET one painting
// router.get('/painting/:id', async (req, res) => {
//   try {
//     const dbPaintingData = await Painting.findByPk(req.params.id);

//     const painting = dbPaintingData.get({ plain: true });
//     // Send over the 'loggedIn' session variable to the 'homepage' template
//     res.render('painting', { painting, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // Login route
// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect to the homepage
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }
//   // Otherwise, render the 'login' template
//   res.render('login');
// });

module.exports = router;

