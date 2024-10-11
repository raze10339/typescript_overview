import Employee from './Employee.js';
import 'console.table';

interface EngineerProps {
    programmingLanguages: string[];
    type: string;
}

class Engineer extends Employee implements EngineerProps {
    programmingLanguages: string[];
    type: string;
  
    constructor(firstName: string, lastName: string, salary: number, title: string, programmingLanguages: string[], type: string) {
        super(firstName, lastName, salary, title);

        this.programmingLanguages = programmingLanguages;
        this.type = type;
    }

    printProgrammingLanguages(): void {
        console.table(this.programmingLanguages);
    }

    getProgrammingLanguages(): string[] {
        return this.programmingLanguages;
    }

    getprintProgrammingLanguages(): string[] {
        this.printProgrammingLanguages();
        return this.programmingLanguages;
    }
}

export default Engineer;
