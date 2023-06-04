const {
  generateRefreshToken,
  generateAccessToken,
} = require("../config/jwtTokens");
const User = require("../models/userModel");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      const error = new Error(errors.array()[0].msg);
      error.statusCode = 403;
      throw error;
    }
    await User.create({ username, email, password });

    res.status(201).json({
      message: "Thanks! your account has been successfuly created.",
    });
  } catch (error) {
    next(error);
  }
};

// admin signin
exports.adminSignIn = async (req, res, next) => {
  const { emailorusername, password } = req.body;
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      const error = new Error(errors.array()[0].msg);
      error.statusCode = 422;
      throw error;
    }
    let regex = new RegExp(emailorusername, "i");
    const user = await User.findOne({
      $and: [
        {
          $or: [{ username: regex }, { email: regex }],
        },
      ],
    });
    if (!user) {
      const error = new Error(
        `${emailorusername} does not have an account. Try a different email or sign up.`
      );
      error.statusCode = 404;
      throw error;
    }

    if (user.role !== "admin") {
      const error = new Error("You are not admin.");
      error.statusCode = 403;
      throw error;
    }

    const isPasswordMatch = await user.isPasswordMatch(password);
    if (!isPasswordMatch) {
      const error = new Error("Password is incorrect");
      error.statusCode = 403;
      throw error;
    }

    const refreshToken = generateRefreshToken(user._id);
    const accessToken = generateAccessToken(user._id);

    res.cookie("refreshToken", refreshToken, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      secure: true,
      httpOnly: false,
      sameSite: "None",
    });

    await User.findByIdAndUpdate(user._id, { refreshToken });

    res
      .status(200)
      .json({ message: `Welcome back ${user.username}`, token: accessToken });
  } catch (error) {
    next(error);
  }
};

// Get status
exports.getStatus = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).select(
      "-password -refreshToken"
    );

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Handle admin refresh token
exports.updateAdminAccessToken = async (req, res, next) => {
  const { refreshToken } = req.cookies;

  try {
    if (!refreshToken) {
      const error = new Error("You are not authonticated");
      error.statusCode = 417;
      throw error;
    }
    const user = await User.findOne({ refreshToken });
    if (!user) {
      res.clearCookie("refreshToken", {
        secure: true,
        httpOnly: false,
        sameSite: "None",
      });
      const error = new Error("This user may be deleted");
      error.statusCode = 417;
      throw error;
    }

    const decodedToken = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN,
      {},
      (err, decodedToken) => {
        if (err) {
          res.clearCookie("refreshToken", {
            secure: true,
            httpOnly: false,
            sameSite: "None",
          });
          const error = new Error(err.message);
          error.stack = err.stack;
          error.statusCode = 417;
          throw error;
        }
        return decodedToken;
      }
    );

    const accessToken = generateAccessToken(decodedToken.id);

    res.status(200).json({ accessToken });
  } catch (error) {
    next(error);
  }
};

exports.adminLogout = async (req, res, next) => {
  const { refreshToken } = req.cookies;
  try {
    if (!refreshToken) {
      const error = new Error("No refresh token in cookies");
      error.statusCode = 417;
      throw error;
    }
    const user = await User.findOne({ refreshToken });
    if (!user) {
      res.clearCookie("refreshToken", {
        secure: true,
        httpOnly: false,
        sameSite: "None",
      });
      const error = new Error("Forbidden");
      error.statusCode = 417;
      throw error;
    }
    user.refreshToken = "";
    await user.save();
    res.clearCookie("refreshToken", {
      secure: true,
      httpOnly: false,
      sameSite: "None",
    });
    res.sendStatus(204);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
