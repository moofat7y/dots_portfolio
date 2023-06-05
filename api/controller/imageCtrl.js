const PopImages = require("../models/populerModel");
const LogoImages = require("../models/logoModel");
const SocialImages = require("../models/socialModel");
const BrandImages = require("../models/brandModel");
const BrandDImages = require("../models/brandDModel");

const { deleteImgFromCloud } = require("../utils/cloudinary");
const { validationResult } = require("express-validator");

exports.getAllPopImages = async (req, res, next) => {
  try {
    let images = PopImages.find();
    if (req.query.sort) {
      images = images.sort(req.query.sort);
    } else {
      images = images.sort("-createdAt");
    }

    // Pagination
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    const imagesCount = await PopImages.countDocuments();

    if (req.query.page) {
      if (skip >= imagesCount) {
        const error = new Error(
          "You are reached the maxmium number of products"
        );
        error.statusCode = 422;
        throw error;
      }
    }
    images = images.skip(skip).limit(limit);
    const allImages = await images;
    res.status(200).json({ images: allImages, count: imagesCount });
  } catch (error) {
    next(error);
  }
};

exports.getAllLogoImages = async (req, res, next) => {
  try {
    let images = LogoImages.find();
    if (req.query.sort) {
      images = images.sort(req.query.sort);
    } else {
      images = images.sort("-createdAt");
    }

    // Pagination
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    const imagesCount = await LogoImages.countDocuments();

    if (req.query.page) {
      if (skip >= imagesCount) {
        const error = new Error(
          "You are reached the maxmium number of products"
        );
        error.statusCode = 422;
        throw error;
      }
    }
    images = images.skip(skip).limit(limit);
    const allImages = await images;
    res.status(200).json({ images: allImages, count: imagesCount });
  } catch (error) {
    next(error);
  }
};

exports.getAllSocialImages = async (req, res, next) => {
  try {
    let images = SocialImages.find();
    if (req.query.sort) {
      images = images.sort(req.query.sort);
    } else {
      images = images.sort("-createdAt");
    }

    // Pagination
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    const imagesCount = await SocialImages.countDocuments();

    if (req.query.page) {
      if (skip >= imagesCount) {
        const error = new Error(
          "You are reached the maxmium number of products"
        );
        error.statusCode = 422;
        throw error;
      }
    }
    images = images.skip(skip).limit(limit);
    const allImages = await images;
    res.status(200).json({ images: allImages, count: imagesCount });
  } catch (error) {
    next(error);
  }
};

exports.getAllBrandImages = async (req, res, next) => {
  try {
    let images = BrandImages.find();
    if (req.query.sort) {
      images = images.sort(req.query.sort);
    } else {
      images = images.sort("-createdAt");
    }

    // Pagination
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    const imagesCount = await BrandImages.countDocuments();

    if (req.query.page) {
      if (skip >= imagesCount) {
        const error = new Error(
          "You are reached the maxmium number of products"
        );
        error.statusCode = 422;
        throw error;
      }
    }
    images = images.skip(skip).limit(limit);
    const allImages = await images;
    res.status(200).json({ images: allImages, count: imagesCount });
  } catch (error) {
    next(error);
  }
};

exports.getAllBrandDImages = async (req, res, next) => {
  let queryObj = { ...req.query };
  // Filter
  const execludeFields = ["page", "sort", "limit", "fields", "search"];
  execludeFields.forEach((it) => delete queryObj[it]);
  const strQuery = JSON.stringify(queryObj);
  queryObj = JSON.parse(
    strQuery.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`)
  );

  try {
    let images = BrandDImages.find(queryObj);
    if (req.query.sort) {
      images = images.sort(req.query.sort);
    } else {
      images = images.sort("-createdAt");
    }

    // Pagination
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    const imagesCount = await BrandDImages.countDocuments();

    if (req.query.page) {
      if (skip >= imagesCount) {
        const error = new Error(
          "You are reached the maxmium number of products"
        );
        error.statusCode = 422;
        throw error;
      }
    }
    images = images.skip(skip).limit(limit);
    const allImages = await images;
    res.status(200).json({ images: allImages, count: imagesCount });
  } catch (error) {
    next(error);
  }
};

exports.deletePopImage = async (req, res, next) => {
  const imgId = req.query.imageId;
  try {
    if (!imgId) {
      const error = new Error("No selected image to delete");
      error.statusCode = 403;
      throw error;
    }
    await PopImages.deleteOne({ public_id: imgId });
    await deleteImgFromCloud(imgId);

    res.status(200).json({ message: "Image deleted" });
  } catch (error) {
    next(error);
  }
};

exports.deleteLogoImage = async (req, res, next) => {
  const imgId = req.query.imageId;

  try {
    if (!imgId) {
      const error = new Error("No selected image to delete");
      error.statusCode = 403;
      throw error;
    }
    await LogoImages.deleteOne({ public_id: imgId });
    await deleteImgFromCloud(imgId);

    res.status(200).json({ message: "Image deleted" });
  } catch (error) {
    next(error);
  }
};

exports.deleteSocialImage = async (req, res, next) => {
  const imgId = req.query.imageId;

  try {
    if (!imgId) {
      const error = new Error("No selected image to delete");
      error.statusCode = 403;
      throw error;
    }
    await SocialImages.deleteOne({ public_id: imgId });
    await deleteImgFromCloud(imgId);

    res.status(200).json({ message: "Image deleted" });
  } catch (error) {
    next(error);
  }
};

exports.updateImageLink = async (req, res, next) => {
  const imgId = req.params.imgId;
  const { link } = req.body;
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      const error = new Error(errors.array()[0].msg);
      error.statusCode = 403;
      throw error;
    }
    const newImage = await BrandImages.findByIdAndUpdate(
      imgId,
      { link },
      { new: true }
    );

    res.status(200).json(newImage);
  } catch (error) {
    next(error);
  }
};

exports.updateBrandCategory = async (req, res, next) => {
  const imgId = req.params.imgId;
  const { category } = req.body;
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      const error = new Error(errors.array()[0].msg);
      error.statusCode = 403;
      throw error;
    }
    const newImage = await BrandDImages.findByIdAndUpdate(
      imgId,
      { category },
      { new: true }
    );

    res.status(200).json(newImage);
  } catch (error) {
    next(error);
  }
};

exports.deleteBrandImage = async (req, res, next) => {
  const imgId = req.query.imageId;

  try {
    if (!imgId) {
      const error = new Error("No selected image to delete");
      error.statusCode = 403;
      throw error;
    }
    await BrandImages.deleteOne({ public_id: imgId });
    await deleteImgFromCloud(imgId);

    res.status(200).json({ message: "Image deleted" });
  } catch (error) {
    next(error);
  }
};

exports.deleteBrandDImage = async (req, res, next) => {
  const imgId = req.query.imageId;

  try {
    if (!imgId) {
      const error = new Error("No selected image to delete");
      error.statusCode = 403;
      throw error;
    }
    await BrandDImages.deleteOne({ public_id: imgId });
    await deleteImgFromCloud(imgId);

    res.status(200).json({ message: "Image deleted" });
  } catch (error) {
    next(error);
  }
};
