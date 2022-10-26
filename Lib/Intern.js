const Employee = require("./Employee");

class Intern extends Employee {
    constructor (id, name, email, subq) {
        super(id, name, email)

        this.subq = subq
    }

    getSubq() {
        return this.subq;
    }

    getRole() {
        return "Intern"
    }
}
module.exports = Intern