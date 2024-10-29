class Employee {
  empName;
  id;
  designation;

  constructor() {
    this.empName = "Aisha Sharma";
    this.id = 101;
    this.designation = "Project Manager";
  }

  displayAllDetails() {
    console.log(this.empName, this.id, this.designation);
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

  displayAllDetails() {
    super.displayAllDetails();
    console.log(this.yearsOfExp, this.currentSalary, this.expectedSalary);
  }
}

var e1 = new ExperienceInfo();

e1.displayAllDetails();
