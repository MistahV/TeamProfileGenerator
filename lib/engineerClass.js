const Employee = require('./employeeClass')


class Engineer extends Employee {
    constructor(github) {
        this.github = github

        this.getGithub = () => {

        };

        super(name, id, email);
    }
}



module.exports = Engineer;