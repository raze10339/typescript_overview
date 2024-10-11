

class Employee {
    firstName: string;
    lastName: string;
    salary: number;
    title: string;


    constructor(firstName: string, lastName: string, salary: number, title: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.title = title;


    }
    printFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }

    updateSalary(newSalary: number) {
        this.salary = newSalary;
    }
    getSalary() {
        return this.salary;
    }
}

export default Employee;