// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const generateMarkdown = require('./utils/generateMarkdown.js');

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
        name:'github',
        message:'What is your GitHub username ?'

        },
        {
            type:'input',
            name:'title',
            message:'What is title of your project ?'

        },
        {
            type:'input',
            name:'description',
            message:'Please give a detailed description of your project:'
 
        },    
        {
            type:'confirm',
            name:'Table of Contents',
            message:'Do you need a Table of Contents ?'

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
            type:'input',
            name:'license',
            message:'Which license do you use for your project ? '
        },
        {
            type:'input',
            name:'badges',
            message:'What are badges do you have for the project ?'
        },
        {
            type:'input',
            name:'features',
            message:'What are the features of your project?'
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
        },

    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
      
}

// TODO: Create a function to initialize app
function init() {
    fs.writeFile (,writeToFile());
}

// Function call to initialize app
init();
