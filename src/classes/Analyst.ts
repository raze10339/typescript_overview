import Employee from "./Employee";

class Analyst extends Employee {
    certifications: string[];
    constructor(firstName: string, lastName: string, salary: number, title: string, certifications: string[]) {
        super(firstName, lastName, salary, title);

        this.certifications = certifications;
    }
}
export default Analyst;