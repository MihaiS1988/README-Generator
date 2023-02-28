// function to generate markdown for README
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
  
  module.exports = generateData;