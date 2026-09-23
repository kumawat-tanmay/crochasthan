import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = path.resolve("public/images");
const outputDir = path.resolve("public/images/optimized");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter((file) => {
  const ext = path.extname(file).toLowerCase();
  return (ext === ".jpg" || ext === ".jpeg" || ext === ".png") && !file.includes(".webp");
});

console.log(`Found ${files.length} images to compress...`);

let totalOriginalSize = 0;
let totalCompressedSize = 0;

for (let i = 0; i < files.length; i++) {
  const file = files[i];
  const inputFilePath = path.join(inputDir, file);
  const baseName = `crochet_${i + 1}.webp`;
  const outputFilePath = path.join(outputDir, baseName);

  const stat = fs.statSync(inputFilePath);
  totalOriginalSize += stat.size;

  await sharp(inputFilePath)
    .resize({ width: 800, height: 800, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 85, effort: 6 })
    .toFile(outputFilePath);

  const compressedStat = fs.statSync(outputFilePath);
  totalCompressedSize += compressedStat.size;

  console.log(
    `Compressed ${file} (${Math.round(stat.size / 1024)} KB) -> ${baseName} (${Math.round(
      compressedStat.size / 1024
    )} KB)`
  );
}

const originalMB = (totalOriginalSize / (1024 * 1024)).toFixed(2);
const compressedMB = (totalCompressedSize / (1024 * 1024)).toFixed(2);
const savingsPercent = Math.round(
  ((totalOriginalSize - totalCompressedSize) / totalOriginalSize) * 100
);

console.log(`\n==========================================`);
console.log(`Original Total: ${originalMB} MB`);
console.log(`Compressed Total: ${compressedMB} MB`);
console.log(`Storage Savings: ${savingsPercent}% reduced!`);
console.log(`==========================================`);
