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
  if (license === '') {
    return ''
  } else {
    return (`
        This project is license under the ${license}.
    `
    )
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

  ![alt text](./assets/images/Screenshot-proreadme.png)
  
  ## Badges

  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

  ${data.badges}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## License

  ${renderLicenseSection(`${data.license}`)}

  ${renderLicenseBadge(`${data.license}`)}

   If you have any question about license ,please visit to ${renderLicenseLink(`${data.license}`)}.

  ## Questions

  If you have any questions ,please check the link : https://github.com/${data.username}/UT06-2021-BG-Challenge9 

  If you have any additional questions , please Email to me by ${data.email}.

`;
}

module.exports = generateMarkdown;
