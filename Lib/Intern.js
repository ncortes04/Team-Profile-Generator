const Employee = require("./Employee");

class Intern extends Employees {
    constructor (id, name, email, github) {
        super(id, name, email)

        this.github = github
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Intern"
    }
}
module.exports = Intern