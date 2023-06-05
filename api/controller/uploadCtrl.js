const PopImages = require("../models/populerModel");
const LogoImages = require("../models/logoModel");
const SocialImages = require("../models/socialModel");
const BrandImages = require("../models/brandModel");
const BrandDImages = require("../models/brandDModel");
const { uploadImg } = require("../utils/cloudinary");
const fs = require("fs");

exports.uploadPopuler = async (req, res, next) => {
  const files = req.files;
  try {
    if (!files) {
      const error = new Error("Theres is no images to upload");
      error.statusCode = 403;
      throw error;
    }
    const uploader = (file) => uploadImg(file, "populer");
    const urls = [];
    for (const file of files) {
      const { secure_url, public_id } = await uploader(file.path);
      const newImg = await PopImages.create({ public_id, secure_url });
      urls.unshift(newImg);
      fs.unlinkSync(file.path);
    }

    res.status(201).json(urls);
  } catch (error) {
    next(error);
  }
};

exports.uploadLogo = async (req, res, next) => {
  const files = req.files;
  try {
    if (!files) {
      const error = new Error("Theres is no images to upload");
      error.statusCode = 403;
      throw error;
    }
    const uploader = (file) => uploadImg(file, "logo");
    const urls = [];
    for (const file of files) {
      const { secure_url, public_id } = await uploader(file.path);
      const newImg = await LogoImages.create({ public_id, secure_url });
      urls.push(newImg);
      fs.unlinkSync(file.path);
    }

    res.status(201).json(urls);
  } catch (error) {
    next(error);
  }
};

exports.uploadSocial = async (req, res, next) => {
  const files = req.files;
  try {
    if (!files) {
      const error = new Error("Theres is no images to upload");
      error.statusCode = 403;
      throw error;
    }
    const uploader = (file) => uploadImg(file, "social");
    const urls = [];
    for (const file of files) {
      const { secure_url, public_id } = await uploader(file.path);
      const newImg = await SocialImages.create({ public_id, secure_url });
      urls.push(newImg);
      fs.unlinkSync(file.path);
    }

    res.status(201).json(urls);
  } catch (error) {
    next(error);
  }
};

exports.uploadBrand = async (req, res, next) => {
  const files = req.files;
  try {
    if (!files) {
      const error = new Error("Theres is no images to upload");
      error.statusCode = 403;
      throw error;
    }
    const uploader = (file) => uploadImg(file, "brand");
    const urls = [];
    for (const file of files) {
      const { secure_url, public_id } = await uploader(file.path);
      const newImg = await BrandImages.create({ public_id, secure_url });
      urls.push(newImg);
      fs.unlinkSync(file.path);
    }

    res.status(201).json(urls);
  } catch (error) {
    next(error);
  }
};

exports.uploadBrandD = async (req, res, next) => {
  const files = req.files;
  try {
    if (!files) {
      const error = new Error("Theres is no images to upload");
      error.statusCode = 403;
      throw error;
    }
    const uploader = (file) => uploadImg(file, "brand-design");
    const urls = [];
    for (const file of files) {
      const { secure_url, public_id } = await uploader(file.path);
      const newImg = await BrandDImages.create({ public_id, secure_url });
      urls.push(newImg);
      fs.unlinkSync(file.path);
    }

    res.status(201).json(urls);
  } catch (error) {
    next(error);
  }
};
