// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
  
  [![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)
  
  ## Description:
  ${data.description}

  ## Table Of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Additional Questions](#additional-questions)

  ## Installation:
  ${data.installation}
 
  ## Usage:
  ${data.usage}

  ## License:
  This repository is licensed under ${data.license}

  ## Contribution:
  ${data.contribution}

  ## Tests:
  ${data.test}

  ## For any additional questions:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}

`;
}

module.exports = generateMarkdown;
