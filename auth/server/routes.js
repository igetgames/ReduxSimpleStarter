module.exports = function (app) {
  app.get('/', function (req, res, next) {
    res.send(['fun', 'in', 'the', 'sun']);
  });
}
