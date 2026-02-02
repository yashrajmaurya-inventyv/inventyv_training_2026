# Rust Modules: A Demonstration

This project, `_06_rust_modules`, is a collection of Rust code examples designed to illustrate various concepts and features of the language. Each distinct concept is organized into its own self-contained module.

## Modules

The `src/modules` directory contains the following examples:

-   **`loops`**: Demonstrates different types of loops available in Rust (`for`, `while`, etc.).
-   **`structures`**: Shows how to define and use structs.
-   **`serialize_json`**: An example of serializing Rust structs into JSON strings using the `serde_json` crate.
-   **`deserialize_json`**: An example of deserializing JSON data into Rust structs.
-   **`struct_with_ref`**: Illustrates how to work with structs that hold references, including lifetime annotations.
-   **`lazy_static`**: Shows the use of the `lazy_static` crate to create globally accessible data that is initialized at runtime.

## How to Run

1.  Ensure you have Rust and Cargo installed.
2.  Clone the repository and navigate to the project folder.
3.  To build and run all the module examples sequentially, execute the following command:

    ```bash
    cargo run
    ```

    Each module's output will be printed to the console, preceded by a descriptive title.

## Dependencies

This project utilizes the following external crates:

-   `serde`: A powerful framework for serializing and deserializing Rust data structures.
-   `serde_json`: Provides JSON support for the Serde framework.
-   `lazy_static`: A macro for declaring lazily evaluated static variables in Rust.
