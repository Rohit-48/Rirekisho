import fs from "fs";
import path from "path";

const distDir = path.join(process.cwd(), "dist");

const topLevelToRemove = [
  "dev",
  "index.txt",
  "_not-found",
  "_not-found.txt",
  "_not-found.html",
  "__next._full.txt",
  "__next.__PAGE__.txt",
  "__next._tree.txt",
  "profile-image.png",
];

function walk(dir, callback) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, callback);
    } else {
      callback(fullPath);
    }
  }
}

for (const name of topLevelToRemove) {
  const target = path.join(distDir, name);
  if (!fs.existsSync(target)) continue;
  const stat = fs.statSync(target);
  if (stat.isDirectory()) {
    fs.rmSync(target, { recursive: true, force: true });
  } else {
    fs.unlinkSync(target);
  }
}

walk(distDir, (filePath) => {
  const fileName = path.basename(filePath);
  const relative = path.relative(distDir, filePath);

  if (fileName.endsWith(".txt")) {
    fs.unlinkSync(filePath);
    return;
  }

  if (relative.startsWith("blog/") && fileName === "_not-found.html") {
    fs.unlinkSync(filePath);
  }
});

console.log("Cleaned static export output.");
