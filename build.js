const { build } = require("esbuild");

const isDev = process.env.NODE_ENV === '"development"';

build({
  define: { "process.env.NODE_ENV": process.env.NODE_ENV },
  target: "es2015",
  platform: "browser",
  entryPoints: ["src/index.tsx"],
  outdir: "public",
  bundle: true,
  minify: !isDev,
  sourcemap: isDev,
}).catch((err) => console.log(`Error: ${JSON.stringify(err)}`));
