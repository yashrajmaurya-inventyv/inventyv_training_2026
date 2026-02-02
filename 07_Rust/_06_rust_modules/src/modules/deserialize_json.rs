use serde::Deserialize;

#[derive(Deserialize)]
struct User {
    active: bool,
    username: String,
    email: String,
    sign_in_count: u64,
    person: Person,
}

#[derive(Deserialize)]
struct Person {
    name: String,
}

pub fn main() {
    let user: User = serde_json::from_str(r#"{"active":true,"username":"yash","email":"yash@gmail.com","sign_in_count":1,"person":{"name":"Yashraj"}}"#).unwrap();
    println!("Name: {}", user.username);
    println!("Active Status: {}", user.active);
    println!("Sign In Count: {}", user.sign_in_count);
    println!("Email: {}", user.email);
    println!("Person NAme: {}", user.person.name);
}
