const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const createMember  = [
    {
      type: 'input',
      message: 'What is you team members name?',
      name: 'name',
    },
    {
        type: 'list',
        message: 'What is your team members role?',
        choices: ["Intern", "Engineer", "Manager"],
        name: 'role'
      },
      {
        type: 'input',
        message: 'What is you team members ID?',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is you team members Email Address?',
        name: 'email',
      }
]
function add() {
inquirer
.prompt(createMember)
.then(function ({ role, name, id, email}) {

    let positionQ
    var questions = ["Enter your interns school name", "Enter your managers office number", "Enter your engineers github username"]
     if (role == "Intern"){
        positionQ = questions[0]

    } else if (role = "Manager") {
        positionQ = questions[1]
    } else {
        positionQ = questions[2]
    }
    const roleSubQuestions = [
        {
            type: 'input',
            message: `${positionQ}`,
            name: 'subq',
          },
          {
              type: 'list',
              message: 'Would you like to add another member',
              choices: ["Yes", "No"],
              name: 'addMember'
            },
    ]
 
        inquirer
        .prompt(roleSubQuestions)
        .then(function({addMember, subq}) {
            let addedEmployee;
            if (role === "Engineer") {
                addedEmployee = new Engineer(id, name, email, subq);
            } else if (role === "Intern") {
                addedEmployee = new Intern(id, name, email, subq);
            } else {
                addedEmployee = new Manager(id, name, email, subq);
            }
            addHtml(addedEmployee)
            if (addMember === "No"){
                var terminate = `
        </section>
     </body>
</html>  `
                fs.appendFile('./dist/index.html', terminate, (err) => {
      
                    if (err) throw err;
                })
            } else {
                add()
            }
 

        })

})
}
add()
function addHtml(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let subq = member.getSubq()
        let roleSub;
        if (role === "Intern"){
           roleSub = "School:"
    
        } else if (role === "Manager") {
           roleSub = "Office Number:"
        } else {
            roleSub = "Github:"
        }
 string = `<div>
             <div class="card" style="width: 18rem;">
             <div class="card-header bg-danger" style="height: 120px;">
                  <h2>jared</h2>
                  <h2>engineer</h2>
             </div>
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">Id ${id}</li>
                       <li class="list-group-item">Email ${email}</li>
                     <li class="list-group-item">${roleSub} ${subq}</li>
                 </ul>
              </div>
          </div>`;
        console.log("Member being added");
        fs.appendFile("./dist/index.html", string, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}