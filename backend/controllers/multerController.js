import multer from "multer";
import path from "path";
//cb means callbackfunction
const multerImageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const imageName = Date.now() + path.extname(file.originalname);
    req.barCode = imageName;
    // Set the filename to be unique (you can use other strategies)
    cb(null, imageName);
  },
});

const multerImageFilter = (req, file, cb) => {
  // for checking the file type is desired or not..
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Not An Image, please upload an iamge!.."), false);
  }
};

const uploadImage = multer({
  storage: multerImageStorage,
  fileFilter: multerImageFilter,
  limits: { fileSize: Infinity },
});
`   `;
// export const uploadBarCode = uploadImage.single("barCode");
export const uploadBarCode = (req, res, next) => {
  uploadImage.single("barCode")(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    next();
  });
};
