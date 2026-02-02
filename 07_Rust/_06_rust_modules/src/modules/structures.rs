struct User {
    active: bool,
    username: String,
    email: String,
    sign_in_count: u64,
    person: Person,
}

struct Person {
    name: String,
}

#[allow(dead_code)]
impl User {
    fn get_active_status(&self) -> bool {
        self.active
    }
    fn set_active_status(&mut self, val: bool) {
        self.active = val;
    }
    fn get_username(&self) -> &str {
        &self.username
    }
    fn set_username(&mut self, val: String) {
        self.username = val;
    }
    fn get_email(&self) -> &str {
        &self.email
    }
    fn set_email(&mut self, val: String) {
        self.email = val;
    }
    fn get_sign_in_count(&self) -> u64 {
        self.sign_in_count
    }
    fn set_sign_in_count(&mut self, val: u64) {
        self.sign_in_count = val;
    }
    fn get_user_info(&self) -> String {
        format!(
            "username: {}, email: {}, active status {}, sign in count: {}",
            self.username, self.email, self.active, self.sign_in_count
        )
    }
    fn get_user_info_with_args(
        &self,
        username: &str,
        email: &str,
        sign_in_count: u64,
        active: bool,
    ) -> String {
        format!(
            "username: {}, email: {}, active status {}, sign in count: {}",
            username, email, active, sign_in_count
        )
    }
    fn get_person_name(&self) -> &str {
        &self.person.name
    }
    fn set_person_name(&mut self, val: String) {
        self.person.name = val
    }
}

pub fn main() {
    let user_1 = User {
        active: true,
        username: String::from("Yashraj"),
        email: String::from("yash@gmail.com"),
        sign_in_count: 1,
        person: Person {
            name: String::from("Yashraj Maurya"),
        },
    };
    let mut user_2 = build_user(
        true,
        String::from("Raj"),
        String::from("raj@gmail.com"),
        1,
        Person {
            name: String::from("Raj Maurya"),
        },
    );

    println!("Username: {}", user_1.get_username());
    println!("Email: {}", user_1.get_email());
    println!("Active Status: {}", user_1.get_active_status());
    println!("Sign in Count: {}", user_1.get_sign_in_count());
    println!("User 2 Info: {}", user_2.get_user_info());
    println!(
        "{}",
        user_1.get_user_info_with_args(
            &user_1.username,
            &user_1.email,
            user_1.sign_in_count,
            user_1.active
        )
    );
    user_2.set_username(String::from("Raj Maurya"));
    println!("user_2 Username: {}", user_2.get_username());
    println!("Person's name: {}", user_1.get_person_name());
    user_2.set_person_name(String::from("Virat Kohli"));
    println!("Person 2 name: {}", user_2.get_person_name());
}

fn build_user(
    active: bool,
    username: String,
    email: String,
    sign_in_count: u64,
    person: Person,
) -> User {
    User {
        active,
        username,
        email,
        sign_in_count,
        person,
    }
}
