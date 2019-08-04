const authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

// set cookie session to false since we're using a token
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({ hi: 'there', email: req.user.email });
  });
  app.post('/signin', requireSignin, authentication.signin);
  app.post('/signup', authentication.signup);
};
