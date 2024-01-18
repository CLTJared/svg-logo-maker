// Command Line Interface (CLI)
// This is where the prompts & other outputs to the command line for the user will be built.

// Requirement declarations
const inquirer = require('inquirer');
const logoJS = require('./shapes.js');
const fs = require('fs');

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
                    if(test.trim().length > 3 || test.trim().length < 0) { return 'Must be between 1 and 3 chars'; } return true;
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
            let usrShape = '';
            switch (response.shape){
                case 'circle':
                    usrShape = new logoJS.Circle(response.color, response.background, response.text);
                case 'square':
                    usrShape = new logoJS.Square(response.color, response.background, response.text);
                case 'triangle':
                    usrShape = new logoJS.Triangle(response.color, response.background, response.text);
                default:
                    usrShape = 'Something went wrong.'
              }

            return this.writeSVG(usrShape.render());
        })
        .catch((err) => {console.error(err)});
      }

    writeSVG(data) {
        fs.writeFile('/output/logo.svg', content, err => {
            if (err) { console.error(err); }
        })
    }  
}

module.exports = CLI;