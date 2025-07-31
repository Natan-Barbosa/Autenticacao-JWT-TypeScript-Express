import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["./src/index.ts"],
  bundle: true,
  format: "cjs",
  platform: "node",
  target: ["node18"],
  outfile: "dist/out.cjs",
});
