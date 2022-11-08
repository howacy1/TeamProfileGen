const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

function Profile() {
    this.employeeArr = [];
    this.employee;
}

Profile.prototype.initializePrompt = function() {
    inquirer
        .prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the Team Manager's name?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the Team Manager's Email?"
        },
        {
            type: 'text',
            name: 'id',
            message: "What is the Team Manager's ID Number?"
        },
        {
            type: 'text',
            name: 'office',
            message: "What is the Team Manager's Office Number?"
        }
    ])
        .then(({ name, email, id, office }) => {
            this.employee = new Manager(name, email, id, office);
            this.employee.role = this.employee.getRole();
            this.employeeArr.push(this.employee);
            this.secondPrompt();
        })
};

Profile.prototype.secondPrompt = function() {
    inquirer
        .prompt({
            type: 'list',
            message: 'Add More Team Members',
            name: 'add',
            choices: ['Add Engineer', 'Add Intern', 'Finish Team']
        })
        .then(({ add }) => {
            if (add === 'Add Engineer') {
                this.engineerPrompt();
            } else if (add === 'Add Intern') {
                this.internPrompt();
            } else {
                this.writePage();
            }
        })
};

Profile.prototype.engineerPrompt = function() {
    inquirer
    .prompt([
    {
        type: 'text',
        name: 'name',
        message: "What is the Engineer's name?"
    },
    {
        type: 'text',
        name: 'email',
        message: "What is the Engineer's Email?"
    },
    {
        type: 'text',
        name: 'id',
        message: "What is the Engineer's ID Number?"
    },
    {
        type: 'text',
        name: 'github',
        message: "What is the Engineer's GitHub Username?"
    }
])
    .then(({ name, email, id, github }) => {
        this.employee = new Engineer(name, email, id, github);
        this.employee.role = this.employee.getRole();
        this.employeeArr.push(this.employee);
        this.secondPrompt();
    })
}

Profile.prototype.internPrompt = function() {
    inquirer
    .prompt([
    {
        type: 'text',
        name: 'name',
        message: "What is the Intern's name?"
    },
    {
        type: 'text',
        name: 'email',
        message: "What is the Intern's Email?"
    },
    {
        type: 'text',
        name: 'id',
        message: "What is the Intern's ID Number?"
    },
    {
        type: 'text',
        name: 'school',
        message: "What is the Intern's School?"
    }
])
    .then(({ name, email, id, school }) => {
        this.employee = new Intern(name, email, id, school);
        this.employee.role = this.employee.getRole();
        this.employeeArr.push(this.employee);
        this.secondPrompt();
    })
};

Profile.prototype.writePage = function() {
    const pageHTML = generateHTML(this.employeeArr);
    fs.writeFile('./dist/index.html', pageHTML, err => {
        if(err) throw err;
    });
};

new Profile().initializePrompt();