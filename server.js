const express = require("express");
const Fibonacci = require("./math/Fibonacci");
const cluster = require("cluster");
const totalCPUs = require("os").cpus().length;

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  console.log(`Request handled by worker ${process.pid}`);

  const { number = 0 } = req.query;
  const result = Fibonacci.calculateFibonacci(parseInt(number));

  res.json({
    worker: process.pid,
    result,
  });
});

if (cluster.isPrimary) {
  console.log(`Master ${process.pid} running`);

  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }

  cluster.on("online", (worker) => {
    console.log(`Worker ${worker.process.pid} online`);
  });

  // Restart worker if it exits
  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  app.listen(PORT, () => console.log(`Worker ${process.pid} running`));
}
