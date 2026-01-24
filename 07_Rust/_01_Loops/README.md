# Airport Loop System

## Overview
This Rust program demonstrates the three types of loops available in Rust: `loop`, `while`, and `for`. It simulates an airport system where continuous execution, conditional operations, and finite iterations work together.

## Project Structure
```
src/
  main.rs     - Main application code
Cargo.toml    - Project configuration
```

## Code Description

### Main Function
The `main()` function uses an **infinite loop** (`loop`) to simulate the airport's daily operations:
- Initializes `airport_open` as true and `day_count` starting at 0
- Runs security checkpoint operations each day
- Breaks out of the loop when the airport closes (after 2 days)

### Security Checkpoint (`run_security_checkpoint()`)
Uses a **while loop** to manage the security checkpoint operations:
- Keeps the checkpoint open while `security_open` is true
- Processes a batch of passengers
- Closes after 1 round of processing

### Passenger Processing (`process_passengers()`)
Uses a **for loop** to iterate through a fixed array of passengers:
- Takes an array of 3 passenger names
- Calls the inspection function for each passenger

### Passenger Inspection (`inspect_passenger()`)
A simple utility function that:
- Takes a passenger name as a string reference
- Prints inspection details for each passenger

## Key Rust Concepts Demonstrated

| Concept | Implementation |
|---------|-----------------|
| **Loop** | Infinite `loop` for airport daily operations |
| **While** | Conditional loop for security checkpoint rounds |
| **For** | Iteration over fixed array of passengers |
| **Mutability** | `mut` keyword for mutable variables |
| **String References** | `&str` for passenger names |
| **Arrays** | Fixed-size array of passenger names |

## Output Example
```
Airport is running (day 1)
Security Checkpoint Open
Inspecting Passengers: Yashraj
Inspecting Passengers: Raj
Inspecting Passengers: Maurya
Security Checkpoint Closed
Airport is running (day 2)
Security Checkpoint Open
Inspecting Passengers: Yashraj
Inspecting Passengers: Raj
Inspecting Passengers: Maurya
Security Checkpoint Closed
Airport is closed
```

## Building and Running

### Build
```bash
cargo build
```

### Run
```bash
cargo run
```

### Run in Release Mode
```bash
cargo build --release
cargo run --release
```

## Learning Objectives
This program teaches:
- Understanding when to use `loop`, `while`, and `for` constructs
- Breaking out of loops with `break`
- Mutable variable management
- Function decomposition and modularity
- Passing arrays to functions
- String references in Rust
