import { $Reader } from "@package/java/io";
import { $Consumer_ } from "@package/java/util/function";
import { $MochaCompiledFunction } from "@package/team/unnamed/mocha/runtime/compiled";
import { $ParseException } from "@package/team/unnamed/mocha/parser";
import { $ClassPool } from "@package/javassist";
import { $MochaFunction, $Scope$Builder, $Scope } from "@package/team/unnamed/mocha/runtime";
import { $List, $List_ } from "@package/java/util";
import { $Class } from "@package/java/lang";
import { $Expression } from "@package/team/unnamed/mocha/parser/ast";
export * as parser from "@package/team/unnamed/mocha/parser";
export * as runtime from "@package/team/unnamed/mocha/runtime";
export * as lexer from "@package/team/unnamed/mocha/lexer";

declare module "@package/team/unnamed/mocha" {
    export class $MochaEngine<T> {
        static createStandard<T>(arg0: T): $MochaEngine<T>;
        static createStandard(): $MochaEngine<never>;
        static create(): $MochaEngine<never>;
        static create<T>(arg0: T, arg1: $Consumer_<$Scope$Builder>): $MochaEngine<T>;
        static create<T>(arg0: T): $MochaEngine<T>;
    }
    export interface $MochaEngine<T> {
        prepareEval(arg0: $Reader): $MochaFunction;
        prepareEval(arg0: $Reader, arg1: $Consumer_<$Scope>): $MochaFunction;
        prepareEval(arg0: string, arg1: $Consumer_<$Scope>): $MochaFunction;
        prepareEval(arg0: string): $MochaFunction;
        /**
         * @deprecated
         */
        classPool(): $ClassPool;
        bindInstance<B>(arg0: $Class<B>, arg1: B, arg2: string, ...arg3: string[]): void;
        warnOnReflectiveFunctionUsage(arg0: boolean): $MochaEngine<T>;
        handleParseExceptions(arg0: $Consumer_<$ParseException>): $MochaEngine<T>;
        postCompile(arg0: $Consumer_<number[]>): $MochaEngine<T>;
        bind(arg0: $Class<never>): void;
        scope(): $Scope;
        compile<F extends $MochaCompiledFunction>(arg0: $List_<$Expression>, arg1: $Class<F>): F;
        compile<F extends $MochaCompiledFunction>(arg0: string, arg1: $Class<F>): F;
        compile(arg0: $List_<$Expression>): $MochaFunction;
        compile(arg0: $Reader): $MochaFunction;
        compile<F extends $MochaCompiledFunction>(arg0: $Reader, arg1: $Class<F>): F;
        compile(arg0: string): $MochaFunction;
        parse(arg0: string): $List<$Expression>;
        parse(arg0: $Reader): $List<$Expression>;
        eval(arg0: $List_<$Expression>, arg1: $Consumer_<$Scope>): number;
        eval(arg0: $List_<$Expression>): number;
        eval(arg0: string): number;
        eval(arg0: string, arg1: $Consumer_<$Scope>): number;
        eval(arg0: $Reader): number;
        eval(arg0: $Reader, arg1: $Consumer_<$Scope>): number;
    }
}
