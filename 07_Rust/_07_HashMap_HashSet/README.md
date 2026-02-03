# Rust HashMap and HashSet Example

This project demonstrates the usage of `HashMap` and `HashSet` from the Rust standard library (`std::collections`). The code in `src/main.rs` showcases various operations on these data structures.

## Code Description

The `main.rs` file contains examples of:

*   Creating a `HashMap` and a `HashSet`.
*   Inserting elements.
*   Cloning the collections.
*   Reserving capacity using `try_reserve`.
*   Filtering elements using `retain`.
*   Extending one collection with another using `extend`.
*   For `HashSet`, it also shows how to `take` a value out of the set.

A `User` struct is defined and used as the key for the `HashMap` and as the value for the `HashSet`. This struct derives `Debug`, `Eq`, `PartialEq`, `Hash`, and `Clone` to be usable in these collections.

## How to Run

1.  Make sure you have Rust and Cargo installed.
2.  Clone this repository (or have the files on your local machine).
3.  Open your terminal in the project's root directory.
4.  Run the following command to build and execute the code:

    ```sh
    cargo run
    ```

You will see the output in your terminal, showing the state of the `HashMap` and `HashSet` after each operation.
