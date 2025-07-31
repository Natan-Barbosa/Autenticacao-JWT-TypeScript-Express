import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const rootPath = path.dirname(__filename);

export { rootPath };
