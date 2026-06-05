import { $Object, $Cloneable } from "@package/java/lang";

declare module "@package/team/unnamed/mocha/lexer" {
    export class $Cursor implements $Cloneable {
        push(arg0: number): void;
        index(): number;
        clone(): $Object;
        line(): number;
        column(): number;
        constructor(arg0: number, arg1: number);
        constructor();
    }
}
