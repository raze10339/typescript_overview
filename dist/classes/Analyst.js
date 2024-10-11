import Employee from "./Employee";
class Analyst extends Employee {
    certifications;
    constructor(firstName, lastName, salary, title, certifications) {
        super(firstName, lastName, salary, title);
        this.certifications = certifications;
    }
}
export default Analyst;
