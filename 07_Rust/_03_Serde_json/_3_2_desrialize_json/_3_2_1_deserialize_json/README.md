# Deserialize JSON with Serde

## Overview
This Rust project demonstrates how to deserialize JSON data into Rust structs using the `serde_json` library. It shows the process of converting a JSON string into typed Rust data structures with nested objects.

## Project Structure
- `Cargo.toml` - Project configuration with serde dependencies
- `src/main.rs` - Main source file containing the deserialization logic

## Key Concepts

### Data Structures
The project defines two structs that match the JSON schema:

- **User** - Represents a user with the following fields:
  - `active: bool` - Whether the user is active
  - `username: String` - The user's username
  - `email: String` - The user's email address
  - `sign_in_count: u64` - Number of times the user has signed in
  - `person: Person` - Nested object containing personal information

- **Person** - Represents personal information:
  - `name: String` - The person's full name

### Deserialization Process
The `#[derive(Deserialize)]` macro from the `serde` crate automatically generates code to deserialize JSON data into these structs. This eliminates the need for manual parsing.

## Running the Project

```bash
cargo run
```

## Output
The program deserializes a JSON string and prints the extracted user information:
```
Name: yash
Active Status: true
Sign In Count: 1
Email: yash@gmail.com
Person NAme: Yashraj
```

## JSON Format
The input JSON string has the following structure:
```json
{
  "active": true,
  "username": "yash",
  "email": "yash@gmail.com",
  "sign_in_count": 1,
  "person": {
    "name": "Yashraj"
  }
}
```

## Dependencies
- `serde` - Serialization/deserialization framework
- `serde_json` - JSON support for serde

## Learning Points
- Using `#[derive(Deserialize)]` to enable JSON deserialization
- Working with nested structures in JSON
- Converting JSON strings directly into typed Rust data structures using `serde_json::from_str()`
- Handling the `Result` type with `.unwrap()` for error handling
