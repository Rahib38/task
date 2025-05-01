import { Server } from "http";
import app from "./app";
import config from "./config";

const port = 3002;

async function main() {
  const server: Server = app.listen(port, () => {
    console.log("Server is running on port", port);
  });
}
main()