use std::collections::{HashMap, HashSet};

#[derive(Debug, Eq, PartialEq, Hash, Clone)]
struct User {
    name: String,
    password: String,
}

fn main() {
    //HashMap
    let mut hash: HashMap<User, String> = HashMap::new();
    hash.insert(
        User {
            name: String::from("Alice"),
            password: String::from("password123"),
        },
        String::from("Admin"),
    );
    println!("Original HashMap: {hash:#?}");
    
    //Clone Function
    let h2 = hash.clone();
    println!("Clone HashMap: {h2:#?}");

    //try_reserve function
    match hash.try_reserve(1) {
        Ok(()) => {
            hash.insert(
                User {
                    name: String::from("Bob"),
                    password: String::from("Bob123"),
                },
                String::from("User"),
            );
        }
        Err(err) => {
            println!("Failed to reserve capacity: {:?}", err);
        }
    };
    println!("After Try Reserve: {hash:#?}");

    //Retain Function
    hash.retain(|_key, value| *value == String::from("Admin"));
    println!("Filtered(retain) HashMap: {hash:?}");

    //Extend Function
    let hash2 = HashMap::from([(
        User {
            name: String::from("Yashraj"),
            password: String::from("yash"),
        },
        String::from("Owner"),
    )]);
    hash.extend(hash2);
    println!("After Extend: {hash:#?}");


    //HashSet
    let mut hash_set:HashSet<User> = HashSet::new();
    hash_set.insert(User{
        name: String::from("Martin"),
        password: String::from("martin123")
    });
    hash_set.insert(User{
        name: String::from("Virat"),
        password: String::from("virat123")
    });
    println!("Original HashSet: {hash_set:#?}");

    //clone fun
    let mut hash_set_2 = hash_set.clone();
    println!("Clone HashSet: {hash_set_2:#?}");

    //try_reserve function
    match hash_set.try_reserve(1) {
        Ok(()) => {
            hash_set.insert(User { name: String::from("ABD"), password: String::from("abd123") });
        },
        Err(err) => {
            eprintln!("Error Occured: {err}")
        }
    }
    println!("After Try Reserve: {hash_set:#?}");

    //Retain Function
    hash_set_2.retain(|_key| {
        _key == &User {name: String::from("Martin"), password: String::from("martin123")}
    });
    println!("After Retain: {hash_set_2:?}");

    //Extend Fun
    let hash_set_3 = HashSet::from([
        User{
            name: String::from("Kevin"),
            password: String::from("kevin123")
        }
    ]);
    hash_set.extend(hash_set_3);
    println!("After Extend: {hash_set:#?}");

    //Take Function
    match hash_set.take(&User { name: String::from("Virat"), password: String::from("virat123") }) {
        Some(val) => {
            println!("The value we get is: {val:#?}")
        }
        None => {
            println!("We get Nothing")
        }
    }
}
