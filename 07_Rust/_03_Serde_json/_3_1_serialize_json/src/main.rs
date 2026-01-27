use serde::Serialize;

#[derive(Serialize)]
struct User {
    active: bool,
    username: String,
    email: String,
    sign_in_count: u64,
    person: Person,
}

#[derive(Serialize)]
struct Person {
    name: String,
}

fn main() {
    let user_1 = User {
        active: true,
        username: String::from("yash"),
        email: String::from("yash@gmail.com"),
        sign_in_count: 1,
        person: Person { name: String::from("Yashraj") }
    };

    let json_string = serde_json::to_string(&user_1).unwrap();
    println!("{}", json_string);
}
