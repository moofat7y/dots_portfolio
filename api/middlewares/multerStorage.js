const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/images"));
  },
  filename: (req, file, cb) => {
    const uniqueId = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueId + ".jpeg");
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb({ message: "Unsuported file format" }, false);
  }
};

const uploadPhoto = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  limits: { fileSize: 2000000 },
});

const populerImgResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      await sharp(file.path)
        .resize(390, 532, {
          fit: "cover",
        })
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/images/populer/${file.filename}`);
      fs.unlinkSync(file.path);
      file.path = `public/images/populer/${file.filename}`;
    })
  );
  next();
};

const logoImgResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      await sharp(file.path)
        .resize(768, 512, {
          fit: "cover",
        })
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/images/logo/${file.filename}`);
      fs.unlinkSync(file.path);
      file.path = `public/images/logo/${file.filename}`;
    })
  );
  next();
};

const socialMediaImgResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      await sharp(file.path)
        .resize(768, 512, {
          fit: "cover",
        })
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/images/social/${file.filename}`);
      fs.unlinkSync(file.path);
      file.path = `public/images/social/${file.filename}`;
    })
  );
  next();
};

const brandImgResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      await sharp(file.path)
        .resize(222, 194, {
          fit: "contain",
          background: { r: 225, g: 255, b: 255, alpha: 0 },
        })
        .toFormat("png")
        .png({ quality: 90 })
        .toFile(`public/images/brand/${file.filename}`);
      fs.unlinkSync(file.path);
      file.path = `public/images/brand/${file.filename}`;
    })
  );
  next();
};

module.exports = {
  uploadPhoto,
  populerImgResize,
  logoImgResize,
  socialMediaImgResize,
  brandImgResize,
};
