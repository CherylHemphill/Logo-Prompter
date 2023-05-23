// Require packages needed for this application (inquirer, shapes.js)
const { default: inquirer } = require("inquirer");
const shapes = require('./lib/shapes')

//Prompt questions to generate logo preferences
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters to be displayed on your logo:',
      },
      {
        type: 'input',
        name: 'textColor',
        message:
          'What color would you like your text color to be?',
      },
      {
        type: 'checkbox',
        name: 'shape',
        message: 'Which shape would you like?',
        choices: [
          'Square',
          'Rounded Square',
          'Circle', 
          'Triangle', 
        ],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your shape to be?',
      },
    ]);
  };

 // Function to generate logo.svg file in the examples folder and print "Generated logo.svg" to console 