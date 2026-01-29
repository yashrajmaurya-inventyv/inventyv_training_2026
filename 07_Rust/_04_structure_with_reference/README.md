# Rust Structure with Reference

This is a training project demonstrating how to work with Rust structs using mutable references and method implementations.

## Overview

This project showcases the use of Rust's struct system with:
- **Struct definitions** with multiple fields and nested structs
- **Mutable references** for modifying struct data
- **Method implementations** for getter and setter operations
- **Reference-based access patterns** to shared data

## Code Structure

### Structs

#### `User`
Represents a user account with the following fields:
- `active: bool` - Account active status
- `username: String` - User's username
- `email: String` - User's email address
- `sign_in_count: u64` - Number of times the user has signed in
- `person: Person` - Nested Person struct containing user details

#### `Person`
A nested struct containing personal information:
- `name: String` - Full name of the person

### Methods

The `User` struct provides the following methods:

#### Getters & Setters
- `get_active_status()` / `set_active_status()` - Manage account active status (prints structure on update)
- `get_username()` / `set_username()` - Manage username (prints structure on update)
- `get_email()` / `set_email()` - Manage email (prints structure on update)
- `get_sign_in_count()` / `set_sign_in_count()` - Manage sign-in count (prints structure on update)
- `get_person_name()` / `set_person_name()` - Manage person's name (prints structure on update)

#### Information Methods
- `get_user_info()` - Returns formatted user information string
- `get_user_info_with_args()` - Returns formatted user information with custom parameters
- `print_both_structure()` - Returns formatted string showing both original and reference structure representation
- `print_structure(str: String)` - Prints the provided string to console

## Key Concepts Demonstrated

### Mutable References
```rust
let mut user_1 = User { /* ... */ };
let user_2 = &mut user_1;        // Mutable reference to user_1
user_2.set_person_name(String::from("Raj"));  // Modify through reference
```
The code demonstrates how a mutable reference allows modification of the original struct. When a setter method is called through the reference, it automatically prints the current state of the structure. Both the reference and original variable reference the same data in memory - changes made through the reference are immediately reflected in the original.

### Automatic Structure Printing
All setter methods include a call to `print_both_structure()`, which:
- Shows the current state of the struct
- Displays both the original and reference representation (they are the same object)
- Uses the debug format `{:?}` for formatted output

### Derive Traits
- `Debug` - Enables debug printing with `{:?}` format specifier
- `Clone` - Allows cloning of struct instances
- `PartialEq` - Enables equality comparison between instances

## Running the Project

```bash
cargo run
```

### Expected Output
```
Original Structure: User { active: true, username: "Yashraj", email: "yash@gmail.com", sign_in_count: 1, person: Person { name: "Yashraj Maurya" } } 
Reference Structure: User { active: true, username: "Yashraj", email: "yash@gmail.com", sign_in_count: 1, person: Person { name: "Raj" } }
```

The setter methods automatically print the structure state after modification, showing both the original and reference representation.

## Key Takeaways

1. **Mutable References** - Allows modification through a reference without taking ownership
2. **Method Binding** - Methods can take `&self` (immutable), `&mut self` (mutable), or `self` (consuming ownership)
3. **Nested Structs** - Structs can contain other structs as fields
4. **Borrowing Rules** - One mutable reference at a time ensures memory safety
