import { $IOException } from "@package/java/io";
import { $Cursor } from "@package/team/unnamed/mocha/lexer";
import { $Throwable } from "@package/java/lang";
export * as ast from "@package/team/unnamed/mocha/parser/ast";

declare module "@package/team/unnamed/mocha/parser" {
    export class $ParseException extends $IOException {
        cursor(): $Cursor;
        constructor(arg0: $Cursor);
        constructor(arg0: string, arg1: $Throwable, arg2: $Cursor);
        constructor(arg0: $Throwable, arg1: $Cursor);
        constructor(arg0: string, arg1: $Cursor);
    }
}
