import { $InputStream, $DataOutputStream } from "@package/java/io";
import { $AccessorMaker } from "@package/javassist/compiler";
import { $URL } from "@package/java/net";
import { $ExprEditor } from "@package/javassist/expr";
import { $MethodHandles$Lookup } from "@package/java/lang/invoke";
import { $ProtectionDomain } from "@package/java/security";
import { $FieldInfo, $ClassFile, $MethodInfo } from "@package/javassist/bytecode";
import { $Iterator, $HashMap, $Collection } from "@package/java/util";
import { $ClassLoader, $Object, $Class } from "@package/java/lang";
export * as expr from "@package/javassist/expr";
export * as bytecode from "@package/javassist/bytecode";
export * as compiler from "@package/javassist/compiler";

declare module "@package/javassist" {
    export class $CtConstructor extends $CtBehavior {
        isConstructor(): boolean;
        isClassInitializer(): boolean;
        toMethod(arg0: string, arg1: $CtClass): $CtMethod;
        toMethod(arg0: string, arg1: $CtClass, arg2: $ClassMap): $CtMethod;
        callsSuper(): boolean;
        insertBeforeBody(arg0: string): void;
        setBody(arg0: $CtConstructor, arg1: $ClassMap): void;
        constructor(arg0: $CtConstructor, arg1: $CtClass, arg2: $ClassMap);
        constructor(arg0: $CtClass[], arg1: $CtClass);
        get constructor(): boolean;
        get classInitializer(): boolean;
    }
    export class $CodeConverter$ArrayAccessReplacementMethodNames {
    }
    export interface $CodeConverter$ArrayAccessReplacementMethodNames {
        objectRead(): string;
        byteOrBooleanRead(): string;
        charRead(): string;
        doubleRead(): string;
        floatRead(): string;
        intRead(): string;
        shortRead(): string;
        longRead(): string;
        objectWrite(): string;
        byteOrBooleanWrite(): string;
        charWrite(): string;
        doubleWrite(): string;
        floatWrite(): string;
        intWrite(): string;
        shortWrite(): string;
        longWrite(): string;
    }
    export class $CtField$Initializer {
        static constant(arg0: number): $CtField$Initializer;
        static constant(arg0: string): $CtField$Initializer;
        static constant(arg0: number): $CtField$Initializer;
        static constant(arg0: boolean): $CtField$Initializer;
        static constant(arg0: number): $CtField$Initializer;
        static constant(arg0: number): $CtField$Initializer;
        static byExpr(arg0: string): $CtField$Initializer;
        static byNew(arg0: $CtClass): $CtField$Initializer;
        static byNew(arg0: $CtClass, arg1: string[]): $CtField$Initializer;
        static byParameter(arg0: number): $CtField$Initializer;
        static byNewWithParams(arg0: $CtClass): $CtField$Initializer;
        static byNewWithParams(arg0: $CtClass, arg1: string[]): $CtField$Initializer;
        static byCall(arg0: $CtClass, arg1: string, arg2: string[]): $CtField$Initializer;
        static byCall(arg0: $CtClass, arg1: string): $CtField$Initializer;
        static byCallWithParams(arg0: $CtClass, arg1: string): $CtField$Initializer;
        static byCallWithParams(arg0: $CtClass, arg1: string, arg2: string[]): $CtField$Initializer;
        static byNewArray(arg0: $CtClass, arg1: number[]): $CtField$Initializer;
        static byNewArray(arg0: $CtClass, arg1: number): $CtField$Initializer;
        constructor();
    }
    export class $ClassPath {
    }
    export interface $ClassPath {
        find(arg0: string): $URL;
        openClassfile(arg0: string): $InputStream;
    }
    export class $CtField extends $CtMember {
        static make(arg0: string, arg1: $CtClass): $CtField;
        setName(arg0: string): void;
        getType(): $CtClass;
        getFieldInfo2(): $FieldInfo;
        getFieldInfo(): $FieldInfo;
        getConstantValue(): $Object;
        setType(arg0: $CtClass): void;
        constructor(arg0: $CtClass, arg1: string, arg2: $CtClass);
        constructor(arg0: $CtField, arg1: $CtClass);
        set name(value: string);
        get fieldInfo2(): $FieldInfo;
        get fieldInfo(): $FieldInfo;
        get constantValue(): $Object;
    }
    export class $ClassPool {
        get(arg0: string): $CtClass;
        get(arg0: string[]): $CtClass[];
        static getDefault(): $ClassPool;
        getClassLoader(): $ClassLoader;
        toClass(arg0: $CtClass, arg1: $Class<never>): $Class<never>;
        toClass(arg0: $CtClass): $Class<any>;
        toClass(arg0: $CtClass, arg1: $ClassLoader): $Class<any>;
        toClass(arg0: $CtClass, arg1: $ClassLoader, arg2: $ProtectionDomain): $Class<any>;
        toClass(arg0: $CtClass, arg1: $MethodHandles$Lookup): $Class<never>;
        toClass(arg0: $CtClass, arg1: $Class<never>, arg2: $ClassLoader, arg3: $ProtectionDomain): $Class<any>;
        getMethod(arg0: string, arg1: string): $CtMethod;
        find(arg0: string): $URL;
        appendClassPath(arg0: $ClassPath): $ClassPath;
        appendClassPath(arg0: string): $ClassPath;
        appendSystemPath(): $ClassPath;
        clearImportedPackages(): void;
        makeInterface(arg0: string): $CtClass;
        makeInterface(arg0: string, arg1: $CtClass): $CtClass;
        insertClassPath(arg0: string): $ClassPath;
        insertClassPath(arg0: $ClassPath): $ClassPath;
        removeClassPath(arg0: $ClassPath): void;
        importPackage(arg0: string): void;
        getImportedPackages(): $Iterator<string>;
        recordInvalidClassName(arg0: string): void;
        lookupCflow(arg0: string): $Object[];
        getAndRename(arg0: string, arg1: string): $CtClass;
        getCtClass(arg0: string): $CtClass;
        makeClassIfNew(arg0: $InputStream): $CtClass;
        makeAnnotation(arg0: string): $CtClass;
        appendPathList(arg0: string): void;
        makePackage(arg0: $ClassLoader, arg1: string): void;
        makeClass(arg0: $InputStream): $CtClass;
        makeClass(arg0: $InputStream, arg1: boolean): $CtClass;
        makeClass(arg0: $ClassFile): $CtClass;
        makeClass(arg0: string, arg1: $CtClass): $CtClass;
        makeClass(arg0: string): $CtClass;
        makeClass(arg0: $ClassFile, arg1: boolean): $CtClass;
        getOrNull(arg0: string): $CtClass;
        static doPruning: boolean;
        childFirstLookup: boolean;
        static cacheOpenedJarFile: boolean;
        static releaseUnmodifiedClassFile: boolean;
        constructor(arg0: $ClassPool);
        constructor(arg0: boolean);
        constructor();
        static get default(): $ClassPool;
        get classLoader(): $ClassLoader;
        get importedPackages(): $Iterator<string>;
    }
    export class $CtClass {
        getName(): string;
        static main(arg0: string[]): void;
        getSuperclass(): $CtClass;
        isInterface(): boolean;
        isPrimitive(): boolean;
        isArray(): boolean;
        getComponentType(): $CtClass;
        getModifiers(): number;
        isAnnotation(): boolean;
        isEnum(): boolean;
        getInterfaces(): $CtClass[];
        /**
         * @deprecated
         */
        toClass(arg0: $ClassLoader): $Class<never>;
        toClass(arg0: $Class<never>): $Class<never>;
        toClass(): $Class<never>;
        toClass(arg0: $ClassLoader, arg1: $ProtectionDomain): $Class<never>;
        toClass(arg0: $MethodHandles$Lookup): $Class<never>;
        getSimpleName(): string;
        getDeclaredClasses(): $CtClass[];
        getPackageName(): string;
        getMethod(arg0: string, arg1: string): $CtMethod;
        /**
         * @deprecated
         */
        getEnclosingMethod(): $CtMethod;
        getDeclaringClass(): $CtClass;
        getFields(): $CtField[];
        getMethods(): $CtMethod[];
        getConstructors(): $CtConstructor[];
        getField(arg0: string, arg1: string): $CtField;
        getField(arg0: string): $CtField;
        getConstructor(arg0: string): $CtConstructor;
        getDeclaredFields(): $CtField[];
        getDeclaredMethods(): $CtMethod[];
        getDeclaredMethods(arg0: string): $CtMethod[];
        getDeclaredConstructors(): $CtConstructor[];
        getDeclaredField(arg0: string): $CtField;
        getDeclaredField(arg0: string, arg1: string): $CtField;
        getDeclaredMethod(arg0: string): $CtMethod;
        getDeclaredMethod(arg0: string, arg1: $CtClass[]): $CtMethod;
        getDeclaredConstructor(arg0: $CtClass[]): $CtConstructor;
        getAnnotation(arg0: $Class<never>): $Object;
        getAnnotations(): $Object[];
        setName(arg0: string): void;
        getGenericSignature(): string;
        isFrozen(): boolean;
        freeze(): void;
        addMethod(arg0: $CtMethod): void;
        setSuperclass(arg0: $CtClass): void;
        setInterfaces(arg0: $CtClass[]): void;
        setAttribute(arg0: string, arg1: number[]): void;
        getAttribute(arg0: string): number[];
        getURL(): $URL;
        detach(): void;
        addConstructor(arg0: $CtConstructor): void;
        toBytecode(): number[];
        toBytecode(arg0: $DataOutputStream): void;
        getClassFile(): $ClassFile;
        makeNestedClass(arg0: string, arg1: boolean): $CtClass;
        getClassFile2(): $ClassFile;
        getRefClasses(): $Collection<string>;
        getEnclosingBehavior(): $CtBehavior;
        getClassPool(): $ClassPool;
        debugWriteFile(arg0: string): void;
        debugWriteFile(): void;
        stopPruning(arg0: boolean): boolean;
        defrost(): void;
        getAccessorMaker(): $AccessorMaker;
        isKotlin(): boolean;
        setGenericSignature(arg0: string): void;
        replaceClassName(arg0: string, arg1: string): void;
        replaceClassName(arg0: $ClassMap): void;
        getAvailableAnnotations(): $Object[];
        subclassOf(arg0: $CtClass): boolean;
        getDeclaredBehaviors(): $CtBehavior[];
        getClassInitializer(): $CtConstructor;
        makeClassInitializer(): $CtConstructor;
        removeConstructor(arg0: $CtConstructor): void;
        removeMethod(arg0: $CtMethod): void;
        rebuildClassFile(): void;
        makeUniqueName(arg0: string): string;
        addField(arg0: $CtField, arg1: string): void;
        addField(arg0: $CtField): void;
        addField(arg0: $CtField, arg1: $CtField$Initializer): void;
        getNestedClasses(): $CtClass[];
        hasAnnotation(arg0: $Class<never>): boolean;
        hasAnnotation(arg0: string): boolean;
        writeFile(): void;
        writeFile(arg0: string): void;
        removeField(arg0: $CtField): void;
        subtypeOf(arg0: $CtClass): boolean;
        isModified(): boolean;
        prune(): void;
        setModifiers(arg0: number): void;
        addInterface(arg0: $CtClass): void;
        instrument(arg0: $ExprEditor): void;
        instrument(arg0: $CodeConverter): void;
        static debugDump: string;
        static charType: $CtClass;
        static doubleType: $CtClass;
        static floatType: $CtClass;
        static booleanType: $CtClass;
        static intType: $CtClass;
        static shortType: $CtClass;
        static voidType: $CtClass;
        static byteType: $CtClass;
        static version: string;
        static longType: $CtClass;
        get interface(): boolean;
        get primitive(): boolean;
        get array(): boolean;
        get componentType(): $CtClass;
        get enum(): boolean;
        get simpleName(): string;
        get declaredClasses(): $CtClass[];
        get packageName(): string;
        get enclosingMethod(): $CtMethod;
        get declaringClass(): $CtClass;
        get fields(): $CtField[];
        get methods(): $CtMethod[];
        get constructors(): $CtConstructor[];
        get declaredFields(): $CtField[];
        get declaredConstructors(): $CtConstructor[];
        get annotations(): $Object[];
        get frozen(): boolean;
        get URL(): $URL;
        get classFile(): $ClassFile;
        get classFile2(): $ClassFile;
        get refClasses(): $Collection<string>;
        get enclosingBehavior(): $CtBehavior;
        get classPool(): $ClassPool;
        get accessorMaker(): $AccessorMaker;
        get kotlin(): boolean;
        get availableAnnotations(): $Object[];
        get declaredBehaviors(): $CtBehavior[];
        get classInitializer(): $CtConstructor;
        get nestedClasses(): $CtClass[];
        get modified(): boolean;
    }
    export class $CtBehavior extends $CtMember {
        isEmpty(): boolean;
        getParameterTypes(): $CtClass[];
        getParameterAnnotations(): $Object[][];
        getExceptionTypes(): $CtClass[];
        insertParameter(arg0: $CtClass): void;
        addLocalVariable(arg0: string, arg1: $CtClass): void;
        insertAt(arg0: number, arg1: boolean, arg2: string): number;
        insertAt(arg0: number, arg1: string): number;
        getMethodInfo(): $MethodInfo;
        getAvailableParameterAnnotations(): $Object[][];
        setExceptionTypes(arg0: $CtClass[]): void;
        useCflow(arg0: string): void;
        addParameter(arg0: $CtClass): void;
        getLongName(): string;
        getMethodInfo2(): $MethodInfo;
        addCatch(arg0: string, arg1: $CtClass): void;
        addCatch(arg0: string, arg1: $CtClass, arg2: string): void;
        insertAfter(arg0: string, arg1: boolean, arg2: boolean): void;
        insertAfter(arg0: string, arg1: boolean): void;
        insertAfter(arg0: string): void;
        insertBefore(arg0: string): void;
        setBody(arg0: string, arg1: string, arg2: string): void;
        setBody(arg0: string): void;
        instrument(arg0: $CodeConverter): void;
        instrument(arg0: $ExprEditor): void;
        get empty(): boolean;
        get parameterTypes(): $CtClass[];
        get parameterAnnotations(): $Object[][];
        get methodInfo(): $MethodInfo;
        get availableParameterAnnotations(): $Object[][];
        get longName(): string;
        get methodInfo2(): $MethodInfo;
    }
    export class $CtMethod extends $CtBehavior {
        static make(arg0: $MethodInfo, arg1: $CtClass): $CtMethod;
        static make(arg0: string, arg1: $CtClass): $CtMethod;
        getReturnType(): $CtClass;
        setName(arg0: string): void;
        setWrappedBody(arg0: $CtMethod, arg1: $CtMethod$ConstParameter): void;
        setBody(arg0: $CtMethod, arg1: $ClassMap): void;
        constructor(arg0: $CtMethod, arg1: $CtClass, arg2: $ClassMap);
        constructor(arg0: $CtClass, arg1: string, arg2: $CtClass[], arg3: $CtClass);
        get returnType(): $CtClass;
        set name(value: string);
    }
    export class $ClassMap extends $HashMap<string, string> {
        get(arg0: $Object): string;
        put(arg0: string, arg1: string): string;
        put(arg0: $CtClass, arg1: $CtClass): void;
        static toJvmName(arg0: string): string;
        static toJavaName(arg0: string): string;
        putIfNone(arg0: string, arg1: string): void;
        fix(arg0: $CtClass): void;
        fix(arg0: string): void;
        constructor();
    }
    export class $CtMethod$ConstParameter {
        static string(arg0: string): $CtMethod$ConstParameter;
        static integer(arg0: number): $CtMethod$ConstParameter;
        static integer(arg0: number): $CtMethod$ConstParameter;
    }
    export class $CodeConverter {
        replaceNew(arg0: $CtClass, arg1: $CtClass, arg2: string): void;
        replaceNew(arg0: $CtClass, arg1: $CtClass): void;
        redirectFieldAccess(arg0: $CtField, arg1: $CtClass, arg2: string): void;
        replaceFieldRead(arg0: $CtField, arg1: $CtClass, arg2: string): void;
        replaceFieldWrite(arg0: $CtField, arg1: $CtClass, arg2: string): void;
        replaceArrayAccess(arg0: $CtClass, arg1: $CodeConverter$ArrayAccessReplacementMethodNames): void;
        redirectMethodCall(arg0: $CtMethod, arg1: $CtMethod): void;
        redirectMethodCall(arg0: string, arg1: $CtMethod): void;
        redirectMethodCallToStatic(arg0: $CtMethod, arg1: $CtMethod): void;
        insertAfterMethod(arg0: $CtMethod, arg1: $CtMethod): void;
        insertBeforeMethod(arg0: $CtMethod, arg1: $CtMethod): void;
        constructor();
    }
    export class $CtMember {
        getName(): string;
        getModifiers(): number;
        getDeclaringClass(): $CtClass;
        getAnnotation(arg0: $Class<never>): $Object;
        getAnnotations(): $Object[];
        getGenericSignature(): string;
        getSignature(): string;
        setAttribute(arg0: string, arg1: number[]): void;
        getAttribute(arg0: string): number[];
        visibleFrom(arg0: $CtClass): boolean;
        setGenericSignature(arg0: string): void;
        getAvailableAnnotations(): $Object[];
        hasAnnotation(arg0: string): boolean;
        hasAnnotation(arg0: $Class<never>): boolean;
        setModifiers(arg0: number): void;
        get name(): string;
        get declaringClass(): $CtClass;
        get annotations(): $Object[];
        get signature(): string;
        get availableAnnotations(): $Object[];
    }
}
