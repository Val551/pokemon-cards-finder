import "dotenv/config";
import { createServer } from "./server";

const port = Number(process.env.PORT ?? 3000);
const frontendOrigin = process.env.FRONTEND_ORIGIN ?? "http://localhost:5173";

const app = createServer(frontendOrigin);

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
