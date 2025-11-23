import { defineConfig, env } from "prisma/config";
// Source - https://stackoverflow.com/a
// Posted by Amrita Pathak, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-13, License - CC BY-SA 4.0

import "dotenv/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
