// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  this.license = license;
  let licenseType = this.license;
  let chooseLic = '';
  if(licenseType === 'MIT license') {
    chooseLic = '![License:MIT](https://img.shields.io/badge/License-MIT-brightgreen)';
  } else if (licenseType === '') {
    chooseLic = '';
    
  }
  return chooseLic;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  this.license = license;
  let licenseType = this.license;
  let LicLink = '';
  if(licenseType === 'MIT license') {
    LicLink = 'https://opensource.org/licenses/MIT'
  } else if (licenseType === '') {
    LicLink = '';
    
  }
  return LicLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

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

  ${renderLicenseBadge(`${data.license}`)}

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
