function generateLicenseBadges(data) {
    const licenses = data.license;
    let licensePath = '';

    switch(licenses) {
        case "Apache": 
            licensePath = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
        break;
        case "GNU GPLv3":
            licensePath = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
        break;
        case "MIT":
            licensePath = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
        break;
        
    } return licensePath

}

function generateMarkdown(data) {
    const title = data.title
    const description = data.description
    const installation = data.installation
    const usage = data.usage
    const license = generateLicenseBadges(data)
    const contributing = data.contributing
    const tests = data.tests
    const email = data.email
    const profile = data.profile

    return `
# ${title}

## ${license}

## Table of Contents: 

- [Description](#description) 
- [Installation](#installation) 
- [Usage](#usage) 
- [Contributing](#contributing) 
- [Credits](#credits) 
- [Tests](#tests) 
- [License](#license) 
- [Questions](#questions)


## Description
${description} 
## Installation
${installation}
## Usage
${usage}
## Contributing 
${contributing}
## Tests
${tests}
## License
This project is covered under the ${license} license.
## Questions
Any questions please email me - ${email} \n
My GitHub Link is - https://github.com/${profile}
    `
}
module.exports = generateMarkdown;

