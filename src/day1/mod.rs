use std::fs;

pub fn run() {
    let file = fs::read_to_string("src/day1/input.txt").expect("Could not read file");

    let lines = file.split('\n').map(|line| -> &str {
        return line;
    });

    for line in lines {
        println!("{}", line);
    }
}
