//Global require//
const inquirer = require('inquirer');
const fs = require('fs');

//Arrays of questions for user//
const questions = [
    //Project name//
    {
    type: 'input',
    name: 'title',
    message: 'What is the tile of the project?',
    validate: tileInput => {
        if (tileInput) {
            return true;
        } else{
            console.log('You need to enter a title to continue');
            return false;
        }
    }
    },

//Description of project//
   {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project',
    validate: tileInput => {
        if (tileInput) {
            return true;
        } else{
            console.log('You need to provide a project description');
            return false;
        }
    }
    },

    //Licence choices//
    {    
    type: 'checkbox',
    name: 'licensing',
    message: 'Which license would you like to use for your project? (use up/down arrow to select)',
    choices: ['MIT', 'Mozilla', 'Apache', 'BDS'],
    validate: tileInput => {
        if (tileInput) {
            return true;
        } else{
            console.log('You need to choose one from the list');
            return false;
        }
    }
    },
    
    //Installation instructions// 
    {    
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your project',
    validate: tileInput => {
        if (tileInput) {
         return true;
        } else{
         console.log('You need to provide installation instructions');
         return false;
         }
        }
        },

    //Usage instructions//
        {    
    type: 'input',
     name: 'usage',
    message: 'Please provide usage instructions for your project',
    validate: tileInput => {
        if (tileInput) {
        return true;
        } else{
        console.log('You need to provide usage instruction');
         return false;
        }
     }
    },

    //Github username//
     {    
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
    validate: tileInput => {
        if (tileInput) {
         return true;
        } else{
         console.log('You need to provide a github username');
         return false;
        }
        }
        },

    //E-mail address//
    {    
    type: 'input',
    name: 'email',
    message: 'Please provide an e-mail address?',   
    validate: tileInput => {
        if (tileInput) {
        return true;
        } else{
        console.log('You need to provide an e-mail address');
        return false;
        }
    }
    }
]

// function to generate the data for README//
function generateData(data) {
    return `# ${data.title}
    ## Licensing:
    [![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)
    ## Table of Contents 
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contact Links](#contact-Links)
    ## Description:
    ${data.description}
    ## Installation:
    ${data.installation}
    ## Usage:
    ${data.usage}
    ## License:
    ${data.licensing}
    ## Contact Links:
    - Github: [${data.github}](https://github.com/${data.github});
    - Email: ${data.email} `;
  }
    
    // Function to write README file//
    function writeInsideFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => {
            if (err) {
                console.log(err);
            } else
            console.log('Success! Information added to the README!')
        });
    };

    // Function to initialize the app//
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeTheFile("README.md", generateData(userInput));
    });
};

// Function call to initialize app
init();
