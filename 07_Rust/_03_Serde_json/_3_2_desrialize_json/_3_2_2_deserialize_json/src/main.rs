use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
struct User {
    active: bool,
    username: String,
    email: String,
    sign_in_count: u64,
    person: Person,
}

#[derive(Deserialize, Serialize, Debug)]
struct Person {
    name: String,
}

fn main() {
    let user = User {
        active: true,
        username: String::from("Virat"),
        email: String::from("virat@gmail.com"),
        sign_in_count: 1,
        person: Person { name: String::from("Virat Kohli") }
    };

    let json_string = serde_json::to_string(&user).unwrap();

    let per: User = serde_json::from_str(&json_string).unwrap();

    println!("{:?}", per);
}
