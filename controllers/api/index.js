const router = require('express').Router();
const userRoutes = require('./user-routes');
// const commentRoute = require('./comment-routes');
const postRoute = require('./post-routes');

router.use('/users', userRoutes);
// router.use('/comment', commentRoute);
router.use('/post', postRoute);

module.exports = router;