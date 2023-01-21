const fs = require("fs");
// const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
function prompts() {
    inquirer.prompt([
        {
            name: 'title',
            message: 'What is the title of your README file?',
            type: 'input'
        }
    ]) 
    .then((answers) => {
        writeToFile('README.md', generateMarkdown(answers))
        
    })
}

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => (err ? console.error(err) : console.log('Success!')))
 }

// function to initialize program
 function init() {
    prompts()
 }


// function call to initialize program
init();