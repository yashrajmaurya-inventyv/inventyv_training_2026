# Serde JSON Deserialization Example

## Overview
This Rust project demonstrates JSON serialization and deserialization using the `serde_json` crate. It shows how to convert Rust structs to JSON strings and back again.

## Project Structure
```
src/
  main.rs          - Main application code
Cargo.toml         - Project dependencies and metadata
```

## Code Explanation

### Data Structures
The project defines two structs that derive serialization traits:

**User Struct**
- `active: bool` - Boolean flag indicating user status
- `username: String` - User's username
- `email: String` - User's email address
- `sign_in_count: u64` - Number of times the user has signed in
- `person: Person` - Nested Person object containing additional user information

**Person Struct**
- `name: String` - Person's full name

Both structs derive:
- `Serialize` - Enables conversion to JSON
- `Deserialize` - Enables conversion from JSON
- `Debug` - Enables debug printing with `{:?}`

### Main Function Workflow
1. **Create Instance**: Constructs a `User` object with sample data (Virat Kohli)
2. **Serialize**: Converts the User struct to a JSON string using `serde_json::to_string()`
3. **Deserialize**: Converts the JSON string back to a User struct using `serde_json::from_str()`
4. **Display**: Prints the deserialized User object using debug formatting

## Dependencies
- **serde**: Serialization framework for Rust
- **serde_json**: JSON support for serde

## Running the Project
```bash
cargo run
```

## Example Output
```
User { active: true, username: "Virat", email: "virat@gmail.com", sign_in_count: 1, person: Person { name: "Virat Kohli" } }
```

## Key Concepts Demonstrated
- **Serialization**: Converting Rust data structures into JSON format
- **Deserialization**: Parsing JSON strings back into Rust data structures
- **Nested Structures**: How to serialize/deserialize structs that contain other structs
- **Error Handling**: Using `.unwrap()` to handle potential serialization errors

## Learning Points
This example is useful for understanding:
- How to use serde macros (`#[derive(Serialize, Deserialize)]`)
- The round-trip process of serialization and deserialization
- Working with nested data structures in JSON
