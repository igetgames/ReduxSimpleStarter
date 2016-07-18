const Authentication = require('./controllers/authentication');
require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.get('/', requireAuth, (req, res) => {
    res.send({ message: 'Here\'s your hidden content!' });
  });

  app.post('/login', requireLogin, Authentication.login);
  app.post('/signup', Authentication.signup);
};
