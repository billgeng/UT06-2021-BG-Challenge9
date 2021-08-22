// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.badges == '') {
    return data.badges = '';
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (data.license == '') {
    return data.license = '';
  } else {
  return this.license = data.license
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
   if (data.license == '') {
     return data.license = '';
   } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}


  ## Description 

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [Contributing](#contributing) 

  * [Test](#tests) 

  * [License](#license) 

  * [Questions](#questions) 

  
  ## Installation

  ${data.installation}

  ## Usage 

  ${data.usage}

  ![alt text](./assets/images/screenshot.png)

  
  ## Badges

  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

  ${data.badges}

  

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## License

   This project is licensed by ${data.license} .

  ## Questions

  If you have any questions ,please check the link : https://github.com/${data.username}/UT06-2021-BG-Challenge9 

  If you have any additional questions , please Email to me by ${data.email}.

`;
}

module.exports = generateMarkdown;
