#! /usr/bin/env node

import inquirer from "inquirer";

const  answers:{
    Sentence:string
}=await inquirer.prompt([{
    type:"input",
    name:"Sentence",
    message:"Enter a sentence you want for count words"
    

}])
const words=answers.Sentence.trim().split(" ")
console.log(`You have ${words.length} words in your sentence`)

