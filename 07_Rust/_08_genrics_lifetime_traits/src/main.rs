use std::collections::HashMap;
use std::fmt;

trait DisplayItem {
    fn display(&self) -> String;
}
struct Inventory<T: DisplayItem + Clone> {
    items: HashMap<String, T>,
}

enum InventoryError {
    DuplicateIDs,
    InvalidIDs,
}

impl fmt::Display for InventoryError {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match *self {
            InventoryError::DuplicateIDs => write!(f, "Duplicate ID"),
            InventoryError::InvalidIDs => write!(f, "Invalid ID"),
        }
    }
}

impl DisplayItem for String {
    fn display(&self) -> String {
        self.clone()
    }
}

impl<T> DisplayItem for Inventory<T>
where
    T: DisplayItem + Clone,
{
    fn display(&self) -> String {
        self.display_all()
    }
}

impl<T> Inventory<T>
where
    T: DisplayItem + Clone,
{
    fn add_item(&mut self, id: String, item: T) -> Result<(), InventoryError> {
        if self.items.contains_key(&id) {
            return Err(InventoryError::DuplicateIDs);
        }
        if id.trim().is_empty() {
            return Err(InventoryError::InvalidIDs);
        }
        self.items.insert(id, item);
        Ok(())
    }
    fn display_all(&self) -> String {
        let mut output = String::new();
        for (id, item) in &self.items {
            // push_str is generally more efficient than += for Strings
            output.push_str(&format!("ID: {}, Item: {}\n", id, item.display()));
        }
        output
    }
}

fn main() {
    let mut items: HashMap<String, String> = HashMap::new();
    items.insert(String::from("1"), String::from("Mobiles"));
    items.insert(String::from("2"), String::from("Tablets"));
    items.insert(String::from("3"), String::from("Laptops"));

    let mut structure: Inventory<String> = Inventory { items: items };

    println!("{}", structure.display());

    match structure.add_item(String::from("4"), String::from("Earbuds")) {
        Ok(()) => println!("Item Added"),
        Err(e) => println!("Error: {e}"),
    }

    println!("{}", structure.display());

    match structure.add_item(String::from("2"), String::from("Earbuds")) {
        Ok(()) => println!("Item Added"),
        Err(e) => println!("Error: {e}"),
    }

    match structure.add_item(String::from(""), String::from("Power banks")) {
        Ok(()) => println!("Item Added"),
        Err(e) => println!("Error: {e}"),
    }
}
