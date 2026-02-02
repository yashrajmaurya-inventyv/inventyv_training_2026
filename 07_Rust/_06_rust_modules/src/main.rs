mod modules;

fn main() {
    println!("Loops: ");
    modules::loops::main();
    println!("--------------------------------------------------------------------------------------");
    println!("Structures: ");
    modules::structures::main();
    println!("--------------------------------------------------------------------------------------");
    println!("Serialize JSON: ");
    modules::serialize_json::main();
    println!("--------------------------------------------------------------------------------------");
    println!("Deserialize JSON: ");
    modules::deserialize_json::main();
    println!("--------------------------------------------------------------------------------------");
    println!("Structure With Reference");
    modules::struct_with_ref::main();
    println!("--------------------------------------------------------------------------------------");
    println!("Lazy Static: ");
    modules::lazy_static::main();
}
