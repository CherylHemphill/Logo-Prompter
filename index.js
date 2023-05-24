// Require packages needed for this application (inquirer, shapes.js)
const { default: inquirer } = require("inquirer");
const shapes = require('./lib/shapes');
const fs = require("fs");

//Prompt questions to generate logo preferences
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters to be displayed on your logo:',
        validate: function (input) {
            if (input.length > 3) {
              return "Please enter no more than 3 characters.";
            }
            return true;
          }
      },
      {
        type: 'input',
        name: 'textColor',
        message:'What color would you like your text color to be?',
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
 const generateSVG = (data) => {
    const { text, textColor, shape, shapeColor } = data;
  
    let svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">\n`;
  
    let shapeElement;

  switch (shape) {
    case 'Circle':
      shapeElement = new Circle();
      break;
    case 'Triangle':
      shapeElement = new Triangle();
      break;
    case 'Square':
      shapeElement = new Square();
      break;
    default:
      break;
  }

  shapeElement.setColor(shapeColor);
  svgCode += shapeElement.render();
  
    svgCode += `<text x="150" y="180" text-anchor="middle" fill="${textColor}">${text}</text>\n`;
  
    svgCode += `</svg>`;
  
    return svgCode;
  };
  
  const generateLogo = async () => {
    try {
      const userData = await promptUser();
      const svgCode = generateSVG(userData);
  
      fs.writeFileSync('logo.svg', svgCode);
  
      console.log('Generated logo.svg');
    } catch (error) {
      console.error('Error generating logo:', error);
    }
  };
  
  generateLogo();
  ``