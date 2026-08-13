import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";
import download from "image-downloader";
import mime from "mime-types";
import { URL } from "url";
import multer from "multer";
import { __dirname } from "../../server.js";

const { CLOUDINARY_API_SECRET, CLOUDINARY_API_KEY, CLOUDINARY_CLOUD_NAME } =
  process.env;
const getFileExtension = (url) => {
  const mimeType = mime.lookup(url);
  const contentType = mime.contentType(mimeType);
  const extension = mime.extension(contentType);
  return extension;
};

export const multerUpload = () => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `${__dirname}/tmp/`);
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() +"-"+Math.round(Math.random() * 1e9)
      const extension = getFileExtension(file.originalname);
      cb(null, `${file.fieldname}-${uniqueSuffix}.${extension}`);
    },
  });
  return multer({ storage });
};

export const cloudinaryUpload = async function (filename) {
  // Configuration
  cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY, // Click 'View API Keys' above to copy your API key
    api_secret: CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
  });

  
  const url = cloudinary.uploader.upload(
    `${__dirname}/tmp/${filename}`,
    { folder: "hashbnb" },
    (error, result) => {
      if (error) {
        console.error("Error uploading image to Cloudinary:", error);
        throw new Error("Failed to upload image");
      }
      console.log("Image uploaded successfully to Cloudinary:", result);
      // Return the secure URL of the uploaded image
    },
  );
  return url;
};

export const downloadImage = async (link) => {

  const extension = getFileExtension("jpg");
  const filename = `${Date.now()}.${extension}`;
  const destination = `${__dirname}/tmp/`;
  const fullPath = `${destination}${filename}`;

  const options = { url: link, dest: fullPath };

  try {
    await download.image(options);
    console.log("Saved to", filename);
    return filename;
  } catch (error) {
    console.error("deu error", error);
  }
};
