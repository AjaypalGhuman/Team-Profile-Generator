const inquirer = require('inquirer');
const renderPage = require('./src/template');
const createFile = require('./src/create-file');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employeeArr = [];

const managerPrompt = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the manager's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number?"
        }
    ]).then(( answers ) => {
        answers = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employeesArr.push(answers);
        return employeePrompt();
    })
};