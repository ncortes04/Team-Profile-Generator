const Employee = require("./Employee");

class Manager extends Employee {
    constructor (id, name, email, subq) {
        super(id, name, email)

        this.subq = subq
    }

    getSubq() {
        return this.subq;
    }

    getRole() {
        return "Manager"
    }
}
module.exports = Manager