const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter value of n: ', (input) => {
    for (let i = 1; i <= input; i++) {
        output = "";
        for (let j = 1; j <= input; j++) {
            min_val = i < j ? i : j;
            min_val = min_val < input - i + 1 ? min_val : input - i + 1;
            min_val = min_val < input - j + 1 ? min_val : input - j + 1;
            output += min_val + " "
        }
        console.log(output);
    }
    rl.close()
})