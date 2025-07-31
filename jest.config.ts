import type { Config } from "jest";

const config: Config = {
  verbose: true,
  clearMocks: true,
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "mts",
    "cts",
    "tsx",
    "json",
    "node",
  ],
};

export default config;
