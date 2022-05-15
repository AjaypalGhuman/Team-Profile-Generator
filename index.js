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

const engineerPrompt = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the engineer's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the engineer's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the engineer's github user name?"
        }
    ]).then(( answers ) => {
        answers = new Engineer(answers.name, answers.id, answers.email, answers.github)
        employeesArr.push(answers);
        return employeePrompt();
    })
};

const internPrompt = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the intern's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the intern's email?"
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school?"
        }
    ]).then(( answers ) => {
        answers = new Intern(answers.name, answers.id, answers.email, answers.school)
        employeesArr.push(answers);
        return employeePrompt();
    })
};