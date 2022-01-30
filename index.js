// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./src/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a project name!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a project description!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions for your project (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter a project installation instructions!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage information for your project (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage information for your project!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'contribution',
            message: 'What are the contribution guidelines for your project (Required)',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please enter contribution guidelines for your project!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'test',
            message: 'Provide test instructions for your project (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter test instructions for your project!');
                    return false;
                }
            }
        },

        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project (Required)',
            choices: ['MIT', 'Apache', 'Mozilla', 'GNU', 'none'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please pick a license for your project!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'Enter your Email (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your Email!');
                    return false;
                }
            }
        },

    ])

};

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();