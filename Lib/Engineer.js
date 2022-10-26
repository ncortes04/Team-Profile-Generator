const Employee = require("./Employee");

class Engineer extends Employees {
    constructor (id, name, email, github) {
        super(id, name, email)

        this.github = github
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer"
    }
}
module.exports = Engineer