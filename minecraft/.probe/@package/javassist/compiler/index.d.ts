import { $CtClass } from "@package/javassist";
import { $FieldInfo, $MethodInfo } from "@package/javassist/bytecode";

declare module "@package/javassist/compiler" {
    export class $AccessorMaker {
        getFieldGetter(arg0: $FieldInfo, arg1: boolean): $MethodInfo;
        getFieldSetter(arg0: $FieldInfo, arg1: boolean): $MethodInfo;
        getConstructor(arg0: $CtClass, arg1: string, arg2: $MethodInfo): string;
        getMethodAccessor(arg0: string, arg1: string, arg2: string, arg3: $MethodInfo): string;
        constructor(arg0: $CtClass);
    }
}
