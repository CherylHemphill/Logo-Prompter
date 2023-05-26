// Require packages needed for this application (inquirer, shapes.js)
const inquirer = require("inquirer");
const { Square, RoundedSquare, Circle, Triangle } = require('./lib/shapes');
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
        type: 'list',
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
    console.log('Data:', data); // Debugging line
    const { text, textColor, shape, shapeColor } = data;
    console.log('Shape:', shape); // Debugging line
    console.log('Shape Color:', shapeColor); // Debugging line


    
    let svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">\n`;
  
    let shapeElement;
    let textX, textY;

    switch (shape) {
      case 'Square':
        shapeElement = new Square();
        textX = 115; // Adjust for square center x-coordinate
        textY = 120; // Adjust for square center y-coordinate
        break;
      case 'Rounded Square':
        shapeElement = new RoundedSquare();
        textX = 100; // Adjust for rounded square center x-coordinate
        textY = 120; // Adjust for rounded square center y-coordinate
        break;
      case 'Circle':
        shapeElement = new Circle();
        textX = 120; // Adjust for circle center x-coordinate
        textY = 125; // Adjust for circle center y-coordinate
        break;
      case 'Triangle':
        shapeElement = new Triangle();
        textX = 150; // Adjust using custom logic for triangle
        textY = 165; // Adjust using custom logic for triangle
        break;
      default:
        throw new Error('Sorry. Something went wrong with your shape.');
    }

  shapeElement.setColor(shapeColor);
  svgCode += shapeElement.render();
  
     svgCode += `<text x="${textX}" y="${textY}" text-anchor="middle" fill="${textColor}" font-size="60">${text}</text>\n`;
    
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