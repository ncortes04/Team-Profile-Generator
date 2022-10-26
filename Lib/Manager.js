const Employee = require("./Employee");

class Engineer extends Employees {
    constructor (id, name, email, officeNumber) {
        super(id, name, email)

        this.officeNumber = officeNumber
    }

    getGithub() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager"
    }
}
module.exports = Manager