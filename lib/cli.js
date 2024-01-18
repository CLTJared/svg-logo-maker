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
                    if(test.trim().length > 3 || test.trim().length < 1) { return 'Must be between 1 and 3 chars'; } return true;
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
            const myShape = response.shape.toString();
            switch (myShape){
                case 'Circle':
                    usrShape = new logoJS.Circle(response.color, response.background, response.logo);
                    break;
                case 'Square':
                    usrShape = new logoJS.Square(response.color, response.background, response.logo);
                    break;
                case 'Triangle':
                    usrShape = new logoJS.Triangle(response.color, response.background, response.logo);
                    break;
                default:
                    usrShape = "Something broke."
                    break;
              }

            return this.writeSVG(usrShape.render());
        })
        .catch((err) => {console.error(err)});
      }

    writeSVG(data) {
        fs.writeFile('./output/logo.svg', data, err => {
            if (err) { console.error(err); }
        })
        console.log('Generated /output/logo.svg');
    }  
}

module.exports = CLI;