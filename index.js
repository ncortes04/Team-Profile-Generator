const inquirer = require('inquirer');
const fs = require('fs');

const questions  = [
    {
      type: 'input',
      message: 'What is you team members name?',
      name: 'name',
    },
    {
        type: 'list',
        message: 'What is your team members role?',
        choices: ["Intern", "Engineer", "Manager"],
        name: 'role'
      },
      {
        type: 'input',
        message: 'What is you team members ID?',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is you team members Email Address?',
        name: 'email',
      }
]
.then