const fs = require("fs");
// const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
function prompts() {
    inquirer.prompt([
        {
            name: 'repo',
            message: 'Please enter your GitHub repo name',
            type: 'input',
        },
        {
            name: 'title',
            message: 'What is the title of your README file?',
            type: 'input'
        },
        {
            name: 'description',
            message: 'Please enter a description.',
            type: 'input',
            default : "Your time should be focused on creating something amazing. A project that solves a problem and helps others.You shouldn't be doing the same tasks over and over like creating a README from scratch. You should implement DRY principles to the rest of your life :smile",
            
        },
        {
            name: 'technology',
            message: 'Please choose the technologies used.',
            choices: ['Bootstrap', 'CSS3', 'HTML5', 'JavaScript', 'JQuery', 'Node.js'],
            type: 'checkbox'
        },
        {
            name: 'installation',
            message: 'Please enter installation instructions.',
            type: 'input',
            default : 'npm install'
        },
        {
            name: 'usage',
            message: 'Please enter a directory path to your file usage information',
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
            type: 'input',
            
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
            message: 'Please enter your GitHub profile name',
            type: 'input'
            
        }
    ]) 
    .then((answers) => {
        writeToFile('README.md', generateMarkdown(answers))
        
    })
}

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => (err ? console.error(err) : console.log(`Your README file has been successfully generated.`)))
 }

// function to initialize program
 function init() {
    prompts()
 }

// function call to initialize program
init();