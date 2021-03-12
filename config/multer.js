const { modelNames } = require("mongoose");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, callback) => callback(null, __dirname + '/../public/images'),
    filename: (req, file, callback) => callback(null, file.fielename + '-' + Date.now() + '.jgp')
});

const upload = multer({storage});

module.exports = upload;