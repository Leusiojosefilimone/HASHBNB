import download from "image-downloader";
import mime from "mime-types";
import {URL} from "url";

export const downloadImage = async (link, destination) => {
  const mimeType = mime.lookup('jpg');
  const contentType = mime.contentType(mimeType);
  const extension = mime.extension(contentType);
  const filename = `${Date.now()}.${extension}`;
  const fullPath = `${destination}${filename}`

  const options = { url: link, dest: fullPath, };

  try {
   await download.image(options);
    console.log("Saved to", filename);
    return filename;

  } catch (error) {
    console.error("deu error",error);
  }
};
