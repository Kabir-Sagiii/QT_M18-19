class Employee {
  empName;
  #id;
  designation;

  constructor() {
    this.empName = "Aisha Sharma";
    this.#id = 101;
    this.designation = "Project Manager";
  }
}

class ExperienceInfo extends Employee {
  yearsOfExp;
  currentSalary;
  expectedSalary;

  constructor() {
    super();
    this.yearsOfExp = 9;
    this.currentSalary = "60LPA";
    this.expectedSalary = "1.3cr";
  }
}

var e1 = new ExperienceInfo();

console.log(
  e1.empName,
  //   e1.#id, invalid
  e1.designation,
  e1.expectedSalary,
  e1.currentSalary,
  e1.yearsOfExp
);
