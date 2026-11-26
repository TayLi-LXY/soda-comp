// 后处理脚本：修复 Next 静态导出对 `/index/*` 路由的路径重复问题。
//
// 原因：Next 的 normalizePagePath 会把任何以 `/index` 开头的路由再额外
// 前缀一个 `/index`（因为 `/index` 被保留给站点根 `/`），导致
// 路由 `/index/main` 被导出到 `out/index/index/main.html`。
//
// 这里把 `out/index/index/` 的内容递归合并回 `out/index/`，
// 从而让页面在 URL `/index/main` 下正确访问。
import { promises as fs } from "node:fs";
import path from "node:path";

const outDir = path.resolve(process.cwd(), "out");
const doubledDir = path.join(outDir, "index", "index");
const targetDir = path.join(outDir, "index");

async function mergeDir(from, to) {
  const entries = await fs.readdir(from, { withFileTypes: true });
  for (const entry of entries) {
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);
    if (entry.isDirectory()) {
      await fs.mkdir(dest, { recursive: true });
      await mergeDir(src, dest);
    } else {
      await fs.rename(src, dest);
    }
  }
}

async function main() {
  try {
    await fs.access(doubledDir);
  } catch {
    console.log("[flatten-index-export] 未发现 out/index/index，跳过");
    return;
  }
  await mergeDir(doubledDir, targetDir);
  await fs.rm(doubledDir, { recursive: true, force: true });
  console.log("[flatten-index-export] 已将 out/index/index/* 合并到 out/index/");
}

main().catch((err) => {
  console.error("[flatten-index-export] 失败:", err);
  process.exit(1);
});
