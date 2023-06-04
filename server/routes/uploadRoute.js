const router = require("express").Router();
const { isAuth, isAdmin } = require("../middlewares/isAuth");
const {
  uploadPhoto,
  populerImgResize,
  logoImgResize,
  socialMediaImgResize,
  brandImgResize,
} = require("../middlewares/multerStorage");
const uploadCtrl = require("../controller/uploadCtrl");

router.put(
  "/populer",
  isAuth,
  isAdmin,
  uploadPhoto.array("images", 10),
  populerImgResize,
  uploadCtrl.uploadPopuler
);

router.put(
  "/logo",
  isAuth,
  isAdmin,
  uploadPhoto.array("images", 10),
  logoImgResize,
  uploadCtrl.uploadLogo
);

router.put(
  "/social",
  isAuth,
  isAdmin,
  uploadPhoto.array("images", 10),
  socialMediaImgResize,
  uploadCtrl.uploadSocial
);

router.put(
  "/brand",
  isAuth,
  isAdmin,
  uploadPhoto.array("images", 10),
  brandImgResize,
  uploadCtrl.uploadBrand
);

router.put(
  "/brand",
  isAuth,
  isAdmin,
  uploadPhoto.array("images", 10),
  brandImgResize,
  uploadCtrl.uploadBrand
);

router.put(
  "/brand-design",
  isAuth,
  isAdmin,
  uploadPhoto.array("images", 10),
  socialMediaImgResize,
  uploadCtrl.uploadBrandD
);
module.exports = router;
