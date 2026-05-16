import { $Cloneable } from "@package/java/lang";

declare module "@package/team/unnamed/mocha/lexer" {
    export class $Cursor implements $Cloneable {
        index(): number;
        clone(): $Cursor;
        line(): number;
        push(arg0: number): void;
        column(): number;
        constructor(arg0: number, arg1: number);
        constructor();
    }
}
