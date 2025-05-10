import app from "./app";
import config from "./config";
import { AppDataSource as db } from "./db/db";

app.listen(config.port, async () => {
  await db.initialize();
  console.log(`Listening: http://localhost:${config.port}`);
});

process.on("SIGINT", () => {
  db.destroy();
  console.log("database client Disconnected.");
  process.exit(0);
});
