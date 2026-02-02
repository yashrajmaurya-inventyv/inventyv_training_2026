use lazy_static::lazy_static;
use std::sync::Mutex;

enum Request {
    Get { endpoint: String },
    Post { endpoint: String, payload_size: u32 },
    Delete(u32),
}

lazy_static! {
    static ref TOTAL_REQUEST: Mutex<u32> = Mutex::new(0);
    static ref GET_REQUEST: Mutex<u32> = Mutex::new(0);
    static ref POST_REQUEST: Mutex<u32> = Mutex::new(0);
    static ref DELETE_REQUEST: Mutex<u32> = Mutex::new(0);
}

fn handle_request(req: Request) {
    match req {
        Request::Get { endpoint } => {
            let mut counter = GET_REQUEST.lock().unwrap();
            *counter += 1;
            println!("Received Get Request at {endpoint} endpoint");
        }

        Request::Post {
            endpoint,
            payload_size,
        } => {
            let mut counter = POST_REQUEST.lock().unwrap();
            *counter += 1;
            println!(
                "Received Post Request at {endpoint} endpoint with payload size:{payload_size} "
            );
        }

        Request::Delete(id) => {
            let mut counter = DELETE_REQUEST.lock().unwrap();
            *counter += 1;
            println!("Received delete request for this id:{id} ");
        }
    }
    let mut total_counter = TOTAL_REQUEST.lock().unwrap();
    *total_counter += 1;
}

pub fn main() {
    let requests = [
        Request::Get {
            endpoint: String::from("/allproducts"),
        },
        Request::Post {
            endpoint: String::from("/product"),
            payload_size: 8,
        },
        Request::Delete(14),
    ];
    for request in requests {
        handle_request(request);
    }
    let total_req = TOTAL_REQUEST.lock().unwrap();
    let get_req = GET_REQUEST.lock().unwrap();
    let post_req = POST_REQUEST.lock().unwrap();
    let delete_req = DELETE_REQUEST.lock().unwrap();
    println!("Get Request Count: {get_req}");
    println!("Post Request Count: {post_req}");
    println!("Delete Request Count: {delete_req}");
    println!("Total Request Count: {total_req}");
}
