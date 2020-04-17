var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //contact model to get all messages
      models.messages.get((err, result) => {
        if (err) {
          console.log(err);
          throw err;
        }
        console.log('res', result);
        res.json(result);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var params = [red.body.message, req.body.UserName, req.body.RoomName];
      model.messages.post(params, (err, result) => {
        if (err) {
          throw err;
        }
        res.sendStatus(201);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) {
          console.log(err);
          throw err;
        }
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.UserName];
      models.users.post(params, function(err, results) {
        if (err) {
          console.log(err);
          throw err;
        }
        res.sendStatus(201); //statusCode = request successfully fulfilled
      });
    }
  }
};

/*

*/