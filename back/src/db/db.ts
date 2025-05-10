import { DataSource } from "typeorm";

import config from "../config";

export const AppDataSource = new DataSource({
  type: "mongodb",
  url: config.db_url || "mongodb://root:password@localhost:27017/challenge",
  entities: [`${__dirname}/../entities/**/*{.ts,.js}`],
  logging: true,
  logger: "advanced-console",
});
