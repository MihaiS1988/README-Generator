//Global require's//
const inquirer = require('inquirer');
const generateData = require('./assets/generateData');
const fs = require('fs');

//Arrays of questions for user//
const questions = [
    //Project name//
    {
    type: 'input',
    name: 'title',
    message: 'What is the tile of the project? (Required)',
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
    message: 'Please provide a description of your project (Required)',
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
    message: 'Please provide installation instructions for your project (Required)',
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
    message: 'Please provide usage instructions for your project (Required)',
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
    message: 'What is your GitHub username? (Required)',
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
    message: 'What is your e-mail address? (Required)',
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
    
    // Function to write README file//
    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => {
            if (err)
                throw err;
            console.log('Success! Information transferred to the README!')
        });
    };

    // Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateData(userInput));
    });
};

// Function call to initialize app
init();