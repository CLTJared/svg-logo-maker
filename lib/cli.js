// Command Line Interface (CLI)
// This is where the prompts & other outputs to the command line for the user will be built.

// Requirement declarations
const inquirer = require('inquirer');
const logoJS = require('./component.js');

//Functionality for inquirer prompt & then
class CLI {
    //Build our questions
    constructor() {
        this.questions = [
            {
                type: 'input',
                message: 'What are your company initials? (1 to 3 chars)',
                name: 'logo',
                validate: function (test) {
                    if(test.trim().length > 3) { return 'Must be 3 chars or less.'; } return true;
                }
            },
            {
                type: 'input',
                message: 'What text color would you like?',
                name: 'color',
                validate: function (test) {
                    if(test.length < 1) { return 'Must be a valid color.'; } return true;
                }
            },
            {
                type: 'list',
                message: 'Pick a shape?',
                name: 'shape',
                choices: ['Square', 'Circle', 'Triangle']
            },
            {
                type: 'input',
                message: 'What should the shapes color be?',
                name: 'background',
                validate: function (test) {
                    if(test.length < 1) { return 'Must be a valid color.'; } return true;
                }
            }
        ]
      }

    //Run the CLI when the user starts the program
    run() {
      inquirer
        .prompt(this.questions)
        .then((response) => {
            return response;
        })
        .catch((err) => {console.error(err)});
      }
}

module.exports = CLI;