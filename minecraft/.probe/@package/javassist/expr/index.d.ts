import { $CtMethod, $CtClass, $CtConstructor, $CtField } from "@package/javassist";
import { $MethodInfo } from "@package/javassist/bytecode";

declare module "@package/javassist/expr" {
    export class $Handler extends $Expr {
        isFinally(): boolean;
        insertBefore(arg0: string): void;
        getType(): $CtClass;
        get finally(): boolean;
        get type(): $CtClass;
    }
    export class $ConstructorCall extends $MethodCall {
        getConstructor(): $CtConstructor;
        get constructor(): $CtConstructor;
    }
    export class $FieldAccess extends $Expr {
        isReader(): boolean;
        isWriter(): boolean;
        getFieldName(): string;
        isStatic(): boolean;
        getField(): $CtField;
        getSignature(): string;
        getClassName(): string;
        get reader(): boolean;
        get writer(): boolean;
        get fieldName(): string;
        get static(): boolean;
        get field(): $CtField;
        get signature(): string;
        get className(): string;
    }
    export class $Instanceof extends $Expr {
        getType(): $CtClass;
        get type(): $CtClass;
    }
    export class $NewExpr extends $Expr {
        getConstructor(): $CtConstructor;
        getSignature(): string;
        getClassName(): string;
        get constructor(): $CtConstructor;
        get signature(): string;
        get className(): string;
    }
    export class $Cast extends $Expr {
        getType(): $CtClass;
        get type(): $CtClass;
    }
    export class $ExprEditor {
        doit(arg0: $CtClass, arg1: $MethodInfo): boolean;
        edit(arg0: $ConstructorCall): void;
        edit(arg0: $FieldAccess): void;
        edit(arg0: $Handler): void;
        edit(arg0: $Instanceof): void;
        edit(arg0: $Cast): void;
        edit(arg0: $NewArray): void;
        edit(arg0: $NewExpr): void;
        edit(arg0: $MethodCall): void;
        constructor();
    }
    export class $NewArray extends $Expr {
        getCreatedDimensions(): number;
        getDimension(): number;
        getComponentType(): $CtClass;
        get createdDimensions(): number;
        get dimension(): number;
        get componentType(): $CtClass;
    }
    export class $MethodCall extends $Expr {
        getMethod(): $CtMethod;
        getSignature(): string;
        getClassName(): string;
        getMethodName(): string;
        isSuper(): boolean;
        get method(): $CtMethod;
        get signature(): string;
        get className(): string;
        get methodName(): string;
        get super(): boolean;
    }
}
