const router = require('express').Router();
const { User } = require('../../models');




router.get('/', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.logged_In) {
    res.redirect('/dashboard');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('/login');
});


router.post('/signup', async (req, res) => {
    try {
      const userData = await User.create(req.body);
      console.log(userData);
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_In = true;
  
        res.status(200).json({message: 'Successfully created User', userData});
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect  password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_In = true;
      console.log(req.session);
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_In) {
    req.session.destroy(() => {
      res.json({ message: 'You are now logged OUT!' }).status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;