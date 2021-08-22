// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const generateMarkdown = require('./utils/generateMarkdown.js');
//const choices = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = [

      {
        type:'input',
        name:'name',
        message:'What is your name ?'

       },
       {
        type:'input',
        name:'email',
        message:'What is your email address ?'

       },
       {
        type:'input',
        name:'username',
        message:'What is your GitHub username ?'

        },
        {
            type:'input',
            name:'title',
            message:'What is your project title ?'

        },
        {
            type:'input',
            name:'description',
            message:'Please give a detailed description of your project:'
 
        },    
        {
            type:'input',
            name:'installation',
            message:'What are the steps required to install your project ?'
        },
        {
            type:'input',
            name:'usage',
            message:'Please provide instructions and examples for use, include screenshots.'
        },
        {
            type:'input',
            name:'credits',
            message:'Please list your collaborations :'
        },
        {
            type:'list',
            name:'license',
            message:'Which license the application is covered under? ',
            choices:['MIT license','Apache license','GNU license','N/A']
        },
        {
            type:'input',
            name:'badges',
            message:'What are badges do you have for the project ?'
        },
        
        {
            type:'input',
            name:'contributing',
            message:'Who contributed on your project ?'
        },
        {
            type:'input',
            name:'tests',
            message:'Please provide examples on how to run your tests for your project.'
        }

    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
      fs.writeFile(fileName,data,(err) =>{
          console.log(fileName)
          console.log(data)
          if (err) {
              throw err;
          } else {
              console.log('You are successful !');
          }
      })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile('README.md',generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
