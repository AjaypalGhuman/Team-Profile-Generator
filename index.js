const inquirer = require('inquirer');
const renderPage = require('./src/template');
const createFile = require('./src/create-file');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employeeArr = [];

const init = () => { managerPrompt() }

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
        employeeArr.push(answers);
        return employeesPrompt();
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
        employeeArr.push(answers);
        return employeesPrompt();
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
        employeeArr.push(answers);
        return employeesPrompt();
    })
};

const employeesPrompt = () => {
    inquirer.prompt([{

        type: 'list',
        name: 'typeOfEmployee',
        message: "What kind of team member would you like to add?",
        choices: [
            {name: 'Engineer', value: "addEngineerPosition"},
            {name: 'Intern', value: "addInternPosition"},
            {name: 'FINISHED', value: "finished"}
        ]
    }])
    // send questions based off of what option was selected
    .then( answer => {
        
        if (answer.typeOfEmployee === 'addEngineerPosition') { engineerPrompt(); };
        if (answer.typeOfEmployee === 'addInternPosition') { internPrompt(); };
        if (answer.typeOfEmployee === 'finished') {
            
            // help generate html file
            let html = renderPage(employeeArr)
            console.log('...');
            // creates the actual html file
            createFile(html);
        }
    })
};

init();
