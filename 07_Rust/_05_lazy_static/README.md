# Rust Request Handler with Synchronization

This project demonstrates handling different types of HTTP-like requests (GET, POST, DELETE) in Rust, using global counters to track request counts. It utilizes `lazy_static` for initializing static variables and showcases two synchronization approaches: `Mutex` and `RwLock`.

## Overview

The project consists of two main files in the `src/` directory, each implementing the same request handling logic but with different synchronization primitives for the global counters.

### main.rs

This file uses `Mutex` to protect the global counters. `Mutex` provides exclusive access to the data, ensuring that only one thread can modify the counters at a time.

- **Key Components:**
  - `Request` enum: Defines the types of requests (Get, Post, Delete).
  - Global counters: `TOTAL_REQUEST`, `GET_REQUEST`, `POST_REQUEST`, `DELETE_REQUEST` initialized with `lazy_static`.
  - `handle_request` function: Processes each request, increments the appropriate counter, and prints a message.
  - `main` function: Creates sample requests, processes them, and prints the final counts.

- **Synchronization:** Uses `Mutex::lock()` to acquire exclusive access before modifying counters.

### rwlock.rs

This file implements request handling using `RwLock` for synchronization. `RwLock` (Read-Write Lock) allows multiple threads to read the data simultaneously while ensuring exclusive access for writes, making it suitable for read-heavy workloads.

- **Key Components:**
  - `Request` enum: Defines the types of requests (Get, Post, Delete).
  - Global counters: `TOTAL_REQUEST`, `GET_REQUEST`, `POST_REQUEST`, `DELETE_REQUEST` initialized with `lazy_static`.
  - `handle_request` function: Processes each request, increments the appropriate counter using write access, and prints a message.
  - `main` function: Creates sample requests, processes them, and prints the final counts using read access.

- **Synchronization:** Uses `RwLock::write()` to acquire write access for modifying counters and `RwLock::read()` for reading the final counts, allowing potential for concurrent reads.

## Running the Project

To run this project, ensure you have Rust installed. Then, use Cargo to build and run:

1. **Run main.rs:**
   ```
   cargo run --bin main
   ```

2. **Run rwlock.rs:**
   ```
   cargo run --bin rwlock
   ```

Note: You may need to configure your `Cargo.toml` to have separate binaries if not already set up. The project demonstrates basic concurrency concepts and can be extended for multi-threaded scenarios.
