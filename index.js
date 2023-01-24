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
        },
        {
            name: 'description',
            message: 'Please enter a description.',
            type: 'input'
        },
        {
            name: 'installation',
            message: 'Please enter installation instructions.',
            type: 'input'
        },
        {
            name: 'usage',
            message: 'Please enter usage information',
            type: 'input'
        },
        {
            name: "license",
            message: "Please select a license for your project:",
            choices: ["Apache", "GNU GPLv3", "MIT"],
            type: "list"
          },
        {
            name: 'contributing',
            message: 'Please enter contribution guidelines',
            type: 'input'
        },
        {
            name: 'tests',
            message: 'Please enter test instructions',
            type: 'input'
        },
        {
            name: 'email',
            message: 'Please enter your email address',
            type: 'input'
        }, 
        {
            name: 'profile',
            message: 'Please enter your GitHub profile address',
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