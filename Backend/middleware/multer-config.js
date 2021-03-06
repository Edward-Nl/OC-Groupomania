// Creation du Middleware Multer, pour la gestion et sauvegarde d'images
const multer = require("multer");

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../Backend/images/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-bezkoder-${file.originalname}`);
  },
});

var uploadFile = multer({ 
  storage: storage, 
  fileFilter: imageFilter,
  limits: {fieldSize: 4000000} });
module.exports = uploadFile;