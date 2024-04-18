import fs from "fs";
import path from "path";

export async function GET() {
  const imageDirectory = path.join(process.cwd(), "public", "gallery");
  const imageFiles = fs.readdirSync(imageDirectory);
  const images = imageFiles.map((file: string, i: number) => ({
    alt: `Imagae ${i}`,
    src: `/gallery/${file}`,
  }));
  return Response.json(images);
}
