const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  const mainToken = req.headers.token;
  if (mainToken) {
    const token = req.headers.token.split(" ")[1];
    if (token) {
      jwt.verify(token, process.env.ACCESSTOKEN_SECRET, (err, data) => {
        if (err) res.status(400).json("Invalid token");

        req.user = data;
        next();
      });
    } else {
      res.status(400).json("The token provided is not valid");
    }
  } else {
    res.status(400).json("No token provided");
  }
};

module.exports = verify;
