const router = require("express").Router();
const imagesCtrl = require("../controller/imageCtrl");
const { isAuth, isAdmin } = require("../middlewares/isAuth");
const { body } = require("express-validator");

router.get("/populer", imagesCtrl.getAllPopImages);

router.get("/logo", imagesCtrl.getAllLogoImages);

router.get("/social", imagesCtrl.getAllSocialImages);

router.get("/brand", imagesCtrl.getAllBrandImages);

router.get("/brand-design", imagesCtrl.getAllBrandDImages);

router.patch(
  "/brand/link/:imgId",
  body("link", "Please enter a valid link").exists().notEmpty().isString(),
  isAuth,
  isAdmin,
  imagesCtrl.updateImageLink
);

router.patch(
  "/brand/category/:imgId",
  body("category", "Please enter a valid category")
    .exists()
    .notEmpty()
    .isString(),
  isAuth,
  isAdmin,
  imagesCtrl.updateBrandCategory
);

router.delete("/populer", isAuth, isAdmin, imagesCtrl.deletePopImage);

router.delete("/logo", isAuth, isAdmin, imagesCtrl.deleteLogoImage);

router.delete("/social", isAuth, isAdmin, imagesCtrl.deleteSocialImage);

router.delete("/brand", isAuth, isAdmin, imagesCtrl.deleteBrandImage);

router.delete("/brand-design", isAuth, isAdmin, imagesCtrl.deleteBrandDImage);

module.exports = router;
