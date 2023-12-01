import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

export async function getInput(callMetaUrl) {
  const __dirname = path.dirname(fileURLToPath(callMetaUrl));
  const content = await fs.readFile(path.join(__dirname, "input.txt"), "utf8");
  return content.split("\n").filter(Boolean);
}
