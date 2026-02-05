# Node Backend Scaling Demo

A Node.js + Express demo project showcasing backend scalability concepts using
Node Cluster, CPU-bound tasks, and load testing.

This project demonstrates how to:

- Use Node.js Cluster to leverage multiple CPU cores
- Automatically restart workers on crash
- Handle CPU-intensive workloads (Fibonacci example)
- Distribute requests across worker processes
- Load test APIs using `loadtest`
- Measure latency and throughput

---

## Features

- Express REST API
- Node Cluster (multi-process)
- Worker auto-restart on exit
- Fibonacci endpoint (CPU-bound task)
- Request logging with worker PID
- Load testing with `loadtest`

---

## Tech Stack

- Node.js
- Express
- Cluster module
- Loadtest

---

## API

### GET /

Calculate Fibonacci number.

#### Query Params
