#[derive(Debug, Clone, PartialEq)]
struct User {
    active: bool,
    username: String,
    email: String,
    sign_in_count: u64,
    person: Person,
}

#[derive(Debug, Clone, PartialEq)]
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
        self.print_structure(self.get_both_structure());
    }
    fn get_username(&self) -> &str {
        &self.username
    }
    fn set_username(&mut self, val: String) {
        self.username = val;
        self.print_structure(self.get_both_structure());
    }
    fn get_email(&self) -> &str {
        &self.email
    }
    fn set_email(&mut self, val: String) {
        self.email = val;
        self.print_structure(self.get_both_structure());
    }
    fn get_sign_in_count(&self) -> u64 {
        self.sign_in_count
    }
    fn set_sign_in_count(&mut self, val: u64) {
        self.sign_in_count = val;
        self.print_structure(self.get_both_structure());
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
        self.person.name = val;
        self.print_structure(self.get_both_structure());
    }
    fn get_both_structure(&self) -> String {
        format!(
            "Original Structure: {:?} \nReference Structure: {:?}",
            *self, self
        )
    }
    fn print_structure(&self, str: String) {
        println!("{}", str);
    }
}

fn main() {
    let mut user_1 = User {
        active: true,
        username: String::from("Yashraj"),
        email: String::from("yash@gmail.com"),
        sign_in_count: 1,
        person: Person {
            name: String::from("Yashraj Maurya"),
        },
    };
    let user_2 = &mut user_1;
    user_2.set_person_name(String::from("Raj"));
}
