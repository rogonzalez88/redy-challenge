export default {
  env: process.env.NODE_ENV ?? "development",
  port: process.env.PORT ? parseInt(process.env.PORT) : 4000,
  db_url:
    process.env.MONGO_URI ||
    "mongodb://root:password@localhost:27017/challenge?authSource=admin",
};
