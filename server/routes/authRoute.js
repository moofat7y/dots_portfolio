const router = require("express").Router();
const { body } = require("express-validator");
const User = require("../models/userModel");
const authCtrl = require("../controller/authCtrl");
const { isAuth, isAdmin } = require("../middlewares/isAuth");
router.put(
  "/signup",
  [
    body("username", "username must be at least 3 chracter length")
      .trim()
      .isAlpha()
      .isLength({ min: 3, max: 10 }),
    body("email")
      .trim()
      .isEmail()
      .withMessage("Please enter a valid email")
      .custom(async (value, { req }) => {
        const isEmailExistBefore = await User.findOne({ email: value });
        if (isEmailExistBefore) {
          return Promise.reject(`مستخدم من قبل ${value}`);
        }
      }),
    body(
      "password",
      "Password should be combination of one uppercase , one lower case, one special char, one digit and min 6 , max 20 char long"
    )
      .trim()
      .isLength({ min: 6 })
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/),
  ],
  authCtrl.signUp
);

router.post(
  "/admin-signin",
  [
    body("emailorusername", "please enter your email or username")
      .exists()
      .notEmpty()
      .trim(),
    body("password", "Please enter your password").exists().notEmpty().trim(),
  ],
  authCtrl.adminSignIn
);

router.get("/status", isAuth, authCtrl.getStatus);

router.get("/admin-refresh", authCtrl.updateAdminAccessToken);

// admin Logout
router.get("/admin-logout", authCtrl.adminLogout);

module.exports = router;
