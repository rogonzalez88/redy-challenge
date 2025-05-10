import path from "node:path";
import morgan from "morgan";

import { createExpressServer } from "routing-controllers";

// create express app
const app = createExpressServer({
  cors: true,
  controllers: [path.join(__dirname + "/controllers/*.ts")],
  middlewares: [path.join(__dirname + "/middlewares/*.ts")],
});

// apply middlewares
app.use(morgan("dev"));

export default app;
