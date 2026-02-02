/*
The program represents an airport system where continuous execution, conditional operations, and finite iterations are combined using Rust’s three loop constructs, with each function handling a clear operational responsibility.
*/

pub fn main() {
    let mut airport_open = true;
    let mut day_count = 0;

    loop {
        println!("Airport is running (day {})", day_count+1);
        run_security_checkpoint();
        day_count+=1;
        if day_count == 2 {
            airport_open = false;
        }
        if !airport_open {
            println!("Airport is closed");
            break;
        }
    }
}

fn run_security_checkpoint() {
    let mut security_open = true;
    let mut rounds = 0;

    while security_open {
        println!("Security Checkpoint Open");
        let passengers = ["Yashraj", "Raj", "Maurya"];
        process_passengers(passengers);
        rounds+=1;
        if rounds == 1 {
            security_open = false;
            println!("Security Checkpoint Closed");
        }
    }
}

fn process_passengers(passengers: [&str; 3]) {
    for passenger in passengers {
        inspect_passenger(passenger);
    }
}

fn inspect_passenger(name: &str) {
    println!("Inspecting Passengers: {}", name);
}
