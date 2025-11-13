import chalk from "chalk";
import figlet from "figlet";
import prompts from "prompts";

const log = console.log;

// Chalk colors
const blue = chalk.blue;
const blueBright = chalk.blueBright;
const redBright = chalk.redBright;
const yellowBright = chalk.yellowBright;

async function doStuff() {
  const text = await figlet.text("TWO SUM CLI");
  console.log(blueBright(text));
}

async function start() {
  await doStuff();

  log(blue("Welcome to the Two No. Sum Calculator!"));

  const question = [
    {
      type: "number",
      name: "num1",
      message: "Enter the first Number: ",
      validate: (value) =>
        isNaN(value) ? `Please enter a valid number.` : true,
    },
    {
      type: "number",
      name: "num2",
      message: "Enter the Second Number: ",
      validate: (value) =>
        isNaN(value) ? `Please enter a valid number.` : true,
    },
    {
      oncancel: () => {
        log(redBright("Input cancelled. Exiting..."));
        process.exit(1);
      },
    },
  ];

  const args = await prompts(question);

  const { num1, num2 } = args;

  if (isNaN(num1) || isNaN(num2)) {
    log(redBright("Please provide two numbers as arguments."));
    process.exit(1);
  }

  return { num1, num2 };
}

const { num1, num2 } = await start();

if (num1 === "" || num2 === "") {
  log(redBright("Please provide two numbers as arguments."));
  process.exit(1);
}

log(
  `The sum of ${yellowBright(num1)} and ${yellowBright(num2)} is : ${blueBright(
    num1 + num2
  )}.`
);
