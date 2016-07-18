const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

const tokenForUser = user =>
  jwt.encode({ sub: user.id, iat: new Date().getTime() }, config.secret);

exports.login = (req, res, next) => {
  res.json({ token: tokenForUser(req.user) });
}

exports.signup = function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'Both email and password must be specified' });
  }

  User.findOne({ email: email }, function (err, existingUser) {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      return res.status(422).send({ error: 'Email address already in use' });
    }

    const user = new User({
      email,
      password
    });

    user.save(err => {
      if (err) {
        return next(err);
      }

      res.json({ token: tokenForUser(user) });
    });
  });
}
