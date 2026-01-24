# User Structure - Rust Learning Project

A Rust project demonstrating structs, implementation blocks, ownership, and borrowing concepts through a `User` data structure.

## Overview

This project defines a `User` struct with fields representing user account information and provides methods to get and set these fields safely using Rust's ownership and borrowing principles.

## Project Structure

```
src/
├── main.rs       # User struct definition and implementation
Cargo.toml        # Project manifest
```

## Structs

### Person Struct

```rust
struct Person {
    name: String            // Person's name
}
```

### User Struct

The `User` struct contains five fields, including a nested `Person` struct:

```rust
struct User {
    active: bool,           // Account active status
    username: String,       // User's username
    email: String,          // User's email address
    sign_in_count: u64,     // Number of sign-ins
    person: Person          // Associated person information
}
```

## Methods

### Getters

- **`get_active_status(&self) -> bool`** - Returns the active status
- **`get_username(&self) -> &str`** - Returns a reference to the username (no cloning)
- **`get_email(&self) -> &str`** - Returns a reference to the email (no cloning)
- **`get_sign_in_count(&self) -> u64`** - Returns the sign-in count

### Setters

- **`set_active_status(&mut self, val: bool)`** - Updates the active status
- **`set_username(&mut self, val: String)`** - Updates the username
- **`set_email(&mut self, val: String)`** - Updates the email
- **`set_sign_in_count(&mut self, val: u64)`** - Updates the sign-in count

### Info Methods

- **`get_user_info(&self) -> String`** - Returns formatted user information as a single string
- **`get_user_info_with_args(&self, username: &str, email: &str, sign_in_count: u64, active: bool) -> String`** - Returns formatted info with custom parameters

### Person Methods

- **`get_person_name(&self) -> &str`** - Returns a reference to the person's name
- **`set_person_name(&mut self, val: String)`** - Updates the person's name

## Helper Functions

- **`build_user(active: bool, username: String, email: String, sign_in_count: u64, person: Person) -> User`** - Creates a new User instance with all fields

## Key Concepts

### Ownership
- `String` fields are owned by the `User` struct
- When creating a User, ownership of `String` values is transferred from the caller
- The `build_user()` function demonstrates ownership transfer

### Borrowing
- Getter methods use `&self` (immutable borrow)
- Setter methods use `&mut self` (mutable borrow)
- `get_username()` and `get_email()` return `&str` references instead of cloning to avoid unnecessary memory allocation

### References
- String getters return `&str` references, allowing the caller to read without taking ownership
- Setter parameters accept `String` to take ownership of new values

### Nested Structs
- The `User` struct contains a nested `Person` struct
- Methods can access and modify nested struct fields through the parent struct

## Running the Project

```bash
# Build the project
cargo build

# Run the project
cargo run

# Format the code
cargo fmt
```

## Example Usage

```rust
// Create a user directly with nested Person struct
let user_1 = User {
    active: true,
    username: String::from("Yashraj"),
    email: String::from("yash@gmail.com"),
    sign_in_count: 1,
    person: Person { name: String::from("Yashraj Maurya") }
};

// Create a user using the helper function
let mut user_2 = build_user(
    true,
    String::from("Raj"),
    String::from("raj@gmail.com"),
    1,
    Person { name: String::from("Raj Maurya") }
);

// Use getters to retrieve information
println!("Username: {}", user_1.get_username());
println!("Email: {}", user_1.get_email());
println!("Person Name: {}", user_1.get_person_name());

// Use setters to modify information
user_2.set_username(String::from("Raj Maurya"));
user_2.set_person_name(String::from("Virat Kohli"));

// Get formatted user info
println!("User Info: {}", user_2.get_user_info());
```

## Output

The program demonstrates:
- Accessing struct fields through getter methods
- Displaying formatted user information
- Modifying user data through setter methods
- Using both mutable and immutable references

## Learning Takeaways

✅ **Ownership**: How Rust manages memory through ownership transfer  
✅ **References**: Using `&self` and `&mut self` in methods  
✅ **Borrowing**: Temporary access to data without taking ownership  
✅ **Structs**: Grouping related data into custom types  
✅ **Implementation Blocks**: Attaching methods to structs  

## Notes

- This is an educational project following Rust best practices for ownership and borrowing
- Methods return references (`&str`) rather than cloning `String` values for efficiency
- The `get_user_info_with_args()` method is a demonstration of method parameters and formatting
