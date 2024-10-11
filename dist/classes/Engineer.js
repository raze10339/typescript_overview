import Employee from './Employee.js';
import 'console.table';
class Engineer extends Employee {
    programmingLanguages;
    type;
    constructor(firstName, lastName, salary, title, programmingLanguages, type) {
        super(firstName, lastName, salary, title);
        this.programmingLanguages = programmingLanguages;
        this.type = type;
    }
    printProgrammingLanguages() {
        console.table(this.programmingLanguages);
    }
    getProgrammingLanguages() {
        return this.programmingLanguages;
    }
    getprintProgrammingLanguages() {
        this.printProgrammingLanguages();
        return this.programmingLanguages;
    }
}
export default Engineer;
