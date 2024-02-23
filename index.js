import inquirer from 'inquirer';
import chalk from 'chalk';
let convertion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1,
    },
    "GBP": {
        "USD": 1.121,
        "PKR": 271.79,
        "GBP": 1,
    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1,
    }
};
async function main() {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "from",
            choices: ["PKR", 'USD', 'GBP'],
            message: "Select Your Currency?\n"
        },
        {
            type: "list",
            name: "to",
            choices: ["PKR", 'USD', 'GBP'],
            message: "Select Your  conversion Currency?\n"
        },
        {
            type: "number",
            name: "amount",
            message: "Enter Your  conversion amount?\n"
        }
    ]);
    const { from, to, amount } = answers;
    if (from && to && amount) {
        let result = convertion[from][to] * amount;
        console.log(chalk.green(`Your Conversion from ${chalk.bold(from)} to ${chalk.bold(to)} is: ${chalk.bold(result)}`));
    }
    else {
        console.log(chalk.red('Invalid Inputs'));
    }
}
main();
