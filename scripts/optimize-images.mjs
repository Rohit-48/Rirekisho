import sharp from "sharp";
import path from "path";

const root = process.cwd();
const source = path.join(root, "public/profile-image.png");

await sharp(source)
  .resize(160, 160, { fit: "cover", position: "center" })
  .png({ quality: 90 })
  .toFile(path.join(root, "public/profile.png"));

await sharp(source)
  .resize(180, 180, { fit: "cover", position: "center" })
  .png({ quality: 90 })
  .toFile(path.join(root, "app/icon.png"));

console.log("Optimized images.");
