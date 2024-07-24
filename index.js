#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([{
        type: "input",
        name: "Sentence",
        message: "Enter a sentence you want for count words"
    }]);
const words = answers.Sentence.split(" ");
console.log(`You have ${words.length} words in your sentence`);
