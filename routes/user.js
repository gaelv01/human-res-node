const express = require("express");
const user = express.Router();
const db = require("../config/database");
const jwt = require("jsonwebtoken");

user.post("/login", async (req, res, next) => {
  const { user_mail, user_password } = req.body;
  const query = `SELECT * FROM user WHERE user_mail = '${user_mail}' AND user_password = '${user_password}';`;
  const rows = await db.query(query);

  if (user_mail && user_password) {
    if (rows.length == 1) {
      const token = jwt.sign(
        {
          user_id: rows[0].user_id,
          user_mail: rows[0].user_mail,
        },
        "debugkey",
        { expiresIn: "1h" }
      );
      return res.status(200).json({ code: 200, message: token });
    } else {
      return res
        .status(200)
        .json({ code: 401, message: "User or password are incorrect." });
    }
  } else {
    return res.status(200).json({ code: 500, message: "Missing fields." });
  }
});

module.exports = user;
