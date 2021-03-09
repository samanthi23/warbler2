require("dotenv").load();
var jwt = require("jsonwebtoken");

exports.loginRequired = function(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
      if (decoded) {
        next();
      } else {
        return next({ status: 401, message: "Please Log In First" });
      }
    });
  } catch (e) {
    return next({ status: 401, message: "Please Log In First" });
  }
};
// where are we actually going to use this middleware



exports.ensureCorrectUser = function(req, res, next) {
  // try to get the token
  try {
    const token = req.headers.authorization.split(" ")[1];
    // SECRET_KEY is for encoded and decoded the token
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
     // if decoded if there is a token
     // and if inside the token the id and payload is the same as whatever is coming in the url
      if (decoded && decoded.id === req.params.id) {
       // then allow user to move on
       // then return next()
        return next();
      } else {
        
        // what happens if you don't have the right id
        return next({ status: 401, message: "Unauthorized" });
      }
    });
  } catch (e) {
    return next({ status: 401, message: "Unauthorized" });
  }
};
