var db = require('../db');

//INSERT INTO table_name (column1, column2, column3, ...) VALUES (value1,value2, value3, ...);
// a function which can be used to insert a message into the database

module.exports = {
  messages: {
    get: function (callback) {
      var sql = 'select messages.id, messages.MessageText, messages.RoomName, users.UserName from messages left outer join users on  (messages.id_Users = users.id) order by messages.id desc';
      db.query(sql, (err, result) => {
        callback(err, result);
      });
    }, // a function which produces all the messages
    post: function (params, callback) {
      var sql = 'INSERT INTO messages (MessageText, id_Users, RoomName) Values ("hi", 1, "dogroom")';
      console.log('Connected!');
      db.query(sql, params, (err, result) => {
        callback(err, result);
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var sql = 'SELECT * FROM users';
      db.query(sql, (err, result) => {
        callback(err, result);
      });
    },
    post: function (callback) {
      var sql = 'INSERT INTO users (username) value (?)';
      db.query(sql, (err, result) => {
        callback(err, result);
      });
    }
  }
};

/*
  connection.query(query)


  con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
});
*/