const Employee = require('./employeeClass')


class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;

        super(name, id, email);
    }
}



module.exports = Manager;