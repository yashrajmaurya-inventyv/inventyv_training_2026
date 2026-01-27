# Serialize JSON Example

## Overview
This Rust project demonstrates how to serialize Rust structs into JSON format using the `serde` and `serde_json` libraries.

## Code Description

The program defines two structs:
- **`User`**: Represents a user with the following fields:
  - `active: bool` - Whether the user is active
  - `username: String` - The user's username
  - `email: String` - The user's email address
  - `sign_in_count: u64` - Number of times the user has signed in
  - `person: Person` - A nested `Person` struct containing additional information

- **`Person`**: Represents a person with:
  - `name: String` - The person's name

## How It Works

1. Both structs are decorated with the `#[derive(Serialize)]` attribute, which automatically generates the code needed to serialize them to JSON.
2. In the `main()` function, a `User` instance is created with sample data.
3. The `serde_json::to_string()` function converts the `User` struct into a JSON string.
4. The resulting JSON is printed to the console.

## Example Output

```json
{"active":true,"username":"yash","email":"yash@gmail.com","sign_in_count":1,"person":{"name":"Yashraj"}}
```

## Dependencies

- **serde**: A framework for serializing and deserializing Rust data structures
- **serde_json**: JSON support for serde

These dependencies are configured in `Cargo.toml`.

## Running the Program

To run this example:

```bash
cargo run
```

This will compile and execute the program, displaying the serialized JSON output.

## Learning Outcomes

This example demonstrates:
- How to use the `#[derive(Serialize)]` macro for automatic serialization
- How to work with nested structs in JSON serialization
- How to convert Rust structs to JSON strings using `serde_json`
