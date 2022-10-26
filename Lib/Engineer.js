const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (id, name, email, subq) {
        super(id, name, email)

        this.subq = subq
    }

    getSubq() {
        return this.subq;
    }

        getRole() {
        return "Engineer"
    }
}
module.exports = Engineer