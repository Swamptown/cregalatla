import { $InputStream } from "@package/java/io";
import { $Constructor, $Method } from "@package/java/lang/reflect";
import { $Object, $Class } from "@package/java/lang";
export * as tree from "@package/org/objectweb/asm/tree";

declare module "@package/org/objectweb/asm" {
    export class $ModuleVisitor {
        visitEnd(): void;
        getDelegate(): $ModuleVisitor;
        visitMainClass(arg0: string): void;
        visitPackage(arg0: string): void;
        visitRequire(arg0: string, arg1: number, arg2: string): void;
        visitExport(arg0: string, arg1: number, ...arg2: string[]): void;
        visitOpen(arg0: string, arg1: number, ...arg2: string[]): void;
        visitUse(arg0: string): void;
        visitProvide(arg0: string, ...arg1: string[]): void;
        get delegate(): $ModuleVisitor;
    }
    export class $Handle {
        getName(): string;
        isInterface(): boolean;
        getOwner(): string;
        getTag(): number;
        getDesc(): string;
        /**
         * @deprecated
         */
        constructor(arg0: number, arg1: string, arg2: string, arg3: string);
        constructor(arg0: number, arg1: string, arg2: string, arg3: string, arg4: boolean);
        get name(): string;
        get interface(): boolean;
        get owner(): string;
        get tag(): number;
        get desc(): string;
    }
    export class $FieldVisitor {
        visitAttribute(arg0: $Attribute): void;
        visitEnd(): void;
        getDelegate(): $FieldVisitor;
        visitAnnotation(arg0: string, arg1: boolean): $AnnotationVisitor;
        visitTypeAnnotation(arg0: number, arg1: $TypePath, arg2: string, arg3: boolean): $AnnotationVisitor;
        get delegate(): $FieldVisitor;
    }
    export class $TypePath {
        getLength(): number;
        getStep(arg0: number): number;
        getStepArgument(arg0: number): number;
        static fromString(arg0: string): $TypePath;
        static WILDCARD_BOUND: number;
        static INNER_TYPE: number;
        static TYPE_ARGUMENT: number;
        static ARRAY_ELEMENT: number;
        get length(): number;
    }
    export class $ClassVisitor {
        visit(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[]): void;
        visitAttribute(arg0: $Attribute): void;
        visitNestMember(arg0: string): void;
        visitPermittedSubclass(arg0: string): void;
        visitInnerClass(arg0: string, arg1: string, arg2: string, arg3: number): void;
        visitRecordComponent(arg0: string, arg1: string, arg2: string): $RecordComponentVisitor;
        visitField(arg0: number, arg1: string, arg2: string, arg3: string, arg4: $Object): $FieldVisitor;
        visitMethod(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]): $MethodVisitor;
        visitEnd(): void;
        getDelegate(): $ClassVisitor;
        visitSource(arg0: string, arg1: string): void;
        visitModule(arg0: string, arg1: number, arg2: string): $ModuleVisitor;
        visitNestHost(arg0: string): void;
        visitOuterClass(arg0: string, arg1: string, arg2: string): void;
        visitAnnotation(arg0: string, arg1: boolean): $AnnotationVisitor;
        visitTypeAnnotation(arg0: number, arg1: $TypePath, arg2: string, arg3: boolean): $AnnotationVisitor;
        get delegate(): $ClassVisitor;
    }
    export class $AnnotationVisitor {
        visit(arg0: string, arg1: $Object): void;
        visitEnd(): void;
        getDelegate(): $AnnotationVisitor;
        visitAnnotation(arg0: string, arg1: string): $AnnotationVisitor;
        visitEnum(arg0: string, arg1: string, arg2: string): void;
        visitArray(arg0: string): $AnnotationVisitor;
        get delegate(): $AnnotationVisitor;
    }
    export class $ClassWriter extends $ClassVisitor {
        toByteArray(): number[];
        newModule(arg0: string): number;
        setFlags(arg0: number): void;
        newMethodType(arg0: string): number;
        /**
         * @deprecated
         */
        newHandle(arg0: number, arg1: string, arg2: string, arg3: string): number;
        newHandle(arg0: number, arg1: string, arg2: string, arg3: string, arg4: boolean): number;
        newConst(arg0: $Object): number;
        newUTF8(arg0: string): number;
        newClass(arg0: string): number;
        newPackage(arg0: string): number;
        newConstantDynamic(arg0: string, arg1: string, arg2: $Handle, ...arg3: $Object[]): number;
        newInvokeDynamic(arg0: string, arg1: string, arg2: $Handle, ...arg3: $Object[]): number;
        newField(arg0: string, arg1: string, arg2: string): number;
        newNameType(arg0: string, arg1: string): number;
        hasFlags(arg0: number): boolean;
        newMethod(arg0: string, arg1: string, arg2: string, arg3: boolean): number;
        static COMPUTE_MAXS: number;
        static COMPUTE_FRAMES: number;
        constructor(arg0: number);
        constructor(arg0: $ClassReader, arg1: number);
        set flags(value: number);
    }
    export class $RecordComponentVisitor {
        visitAttribute(arg0: $Attribute): void;
        visitEnd(): void;
        getDelegate(): $RecordComponentVisitor;
        visitAnnotation(arg0: string, arg1: boolean): $AnnotationVisitor;
        visitTypeAnnotation(arg0: number, arg1: $TypePath, arg2: string, arg3: boolean): $AnnotationVisitor;
        get delegate(): $RecordComponentVisitor;
    }
    export class $Attribute {
        static write(arg0: $Attribute, arg1: $ClassWriter, arg2: number[], arg3: number, arg4: number, arg5: number): number[];
        static read(arg0: $Attribute, arg1: $ClassReader, arg2: number, arg3: number, arg4: string[], arg5: number, arg6: $Label[]): $Attribute;
        isUnknown(): boolean;
        isCodeAttribute(): boolean;
        static readLabel(arg0: $ClassReader, arg1: number, arg2: $Label[]): $Label;
        type: string;
        get unknown(): boolean;
        get codeAttribute(): boolean;
    }
    export class $MethodVisitor {
        visitFrame(arg0: number, arg1: number, arg2: $Object[], arg3: number, arg4: $Object[]): void;
        visitAttribute(arg0: $Attribute): void;
        visitEnd(): void;
        getDelegate(): $MethodVisitor;
        visitAnnotation(arg0: string, arg1: boolean): $AnnotationVisitor;
        visitTypeAnnotation(arg0: number, arg1: $TypePath, arg2: string, arg3: boolean): $AnnotationVisitor;
        visitParameter(arg0: string, arg1: number): void;
        visitAnnotationDefault(): $AnnotationVisitor;
        visitCode(): void;
        visitTryCatchBlock(arg0: $Label, arg1: $Label, arg2: $Label, arg3: string): void;
        visitInsn(arg0: number): void;
        visitVarInsn(arg0: number, arg1: number): void;
        visitJumpInsn(arg0: number, arg1: $Label): void;
        visitIincInsn(arg0: number, arg1: number): void;
        visitTableSwitchInsn(arg0: number, arg1: number, arg2: $Label, ...arg3: $Label[]): void;
        visitLookupSwitchInsn(arg0: $Label, arg1: number[], arg2: $Label[]): void;
        visitIntInsn(arg0: number, arg1: number): void;
        visitLdcInsn(arg0: $Object): void;
        visitFieldInsn(arg0: number, arg1: string, arg2: string, arg3: string): void;
        visitMethodInsn(arg0: number, arg1: string, arg2: string, arg3: string, arg4: boolean): void;
        /**
         * @deprecated
         */
        visitMethodInsn(arg0: number, arg1: string, arg2: string, arg3: string): void;
        visitInvokeDynamicInsn(arg0: string, arg1: string, arg2: $Handle, ...arg3: $Object[]): void;
        visitTypeInsn(arg0: number, arg1: string): void;
        visitMultiANewArrayInsn(arg0: string, arg1: number): void;
        visitInsnAnnotation(arg0: number, arg1: $TypePath, arg2: string, arg3: boolean): $AnnotationVisitor;
        visitLabel(arg0: $Label): void;
        visitLocalVariable(arg0: string, arg1: string, arg2: string, arg3: $Label, arg4: $Label, arg5: number): void;
        visitLocalVariableAnnotation(arg0: number, arg1: $TypePath, arg2: $Label[], arg3: $Label[], arg4: number[], arg5: string, arg6: boolean): $AnnotationVisitor;
        visitMaxs(arg0: number, arg1: number): void;
        visitTryCatchAnnotation(arg0: number, arg1: $TypePath, arg2: string, arg3: boolean): $AnnotationVisitor;
        visitAnnotableParameterCount(arg0: number, arg1: boolean): void;
        visitParameterAnnotation(arg0: number, arg1: string, arg2: boolean): $AnnotationVisitor;
        visitLineNumber(arg0: number, arg1: $Label): void;
        get delegate(): $MethodVisitor;
    }
    export class $Type {
        static getDescriptor(arg0: $Class<never>): string;
        getDescriptor(): string;
        static getReturnType(arg0: string): $Type;
        static getReturnType(arg0: $Method): $Type;
        getReturnType(): $Type;
        static getType(arg0: string): $Type;
        static getType(arg0: $Class<never>): $Type;
        static getType(arg0: $Method): $Type;
        static getType(arg0: $Constructor<never>): $Type;
        getSize(): number;
        static getMethodType(arg0: string): $Type;
        static getMethodType(arg0: $Type, ...arg1: $Type[]): $Type;
        static getMethodDescriptor(arg0: $Type, ...arg1: $Type[]): string;
        static getMethodDescriptor(arg0: $Method): string;
        getClassName(): string;
        static getObjectType(arg0: string): $Type;
        static getInternalName(arg0: $Class<never>): string;
        getInternalName(): string;
        static getArgumentCount(arg0: string): number;
        getArgumentCount(): number;
        getOpcode(arg0: number): number;
        getSort(): number;
        getDimensions(): number;
        static getArgumentTypes(arg0: string): $Type[];
        static getArgumentTypes(arg0: $Method): $Type[];
        getArgumentTypes(): $Type[];
        static getConstructorDescriptor(arg0: $Constructor<never>): string;
        static getArgumentsAndReturnSizes(arg0: string): number;
        getArgumentsAndReturnSizes(): number;
        getElementType(): $Type;
        static CHAR_TYPE: $Type;
        static FLOAT: number;
        static DOUBLE_TYPE: $Type;
        static ARRAY: number;
        static LONG_TYPE: $Type;
        static BYTE_TYPE: $Type;
        static CHAR: number;
        static VOID_TYPE: $Type;
        static OBJECT: number;
        static BOOLEAN_TYPE: $Type;
        static FLOAT_TYPE: $Type;
        static BOOLEAN: number;
        static INT: number;
        static SHORT: number;
        static BYTE: number;
        static METHOD: number;
        static SHORT_TYPE: $Type;
        static DOUBLE: number;
        static VOID: number;
        static LONG: number;
        static INT_TYPE: $Type;
        get size(): number;
        get className(): string;
        get sort(): number;
        get dimensions(): number;
        get elementType(): $Type;
    }
    export class $ClassReader {
        getInterfaces(): string[];
        accept(arg0: $ClassVisitor, arg1: number): void;
        accept(arg0: $ClassVisitor, arg1: $Attribute[], arg2: number): void;
        readInt(arg0: number): number;
        getClassName(): string;
        readLong(arg0: number): number;
        readByte(arg0: number): number;
        readShort(arg0: number): number;
        readBytes(arg0: number, arg1: number): number[];
        readUnsignedShort(arg0: number): number;
        readModule(arg0: number, arg1: string[]): string;
        getAccess(): number;
        readClass(arg0: number, arg1: string[]): string;
        getSuperName(): string;
        readUTF8(arg0: number, arg1: string[]): string;
        readPackage(arg0: number, arg1: string[]): string;
        readConst(arg0: number, arg1: string[]): $Object;
        getItemCount(): number;
        getItem(arg0: number): number;
        getMaxStringLength(): number;
        static SKIP_CODE: number;
        /**
         * @deprecated
         */
        b: number[];
        static EXPAND_FRAMES: number;
        static SKIP_FRAMES: number;
        header: number;
        static SKIP_DEBUG: number;
        constructor(arg0: $InputStream);
        constructor(arg0: string);
        constructor(arg0: number[], arg1: number, arg2: number);
        constructor(arg0: number[]);
        get interfaces(): string[];
        get className(): string;
        get access(): number;
        get superName(): string;
        get itemCount(): number;
        get maxStringLength(): number;
    }
    export class $Label {
        getOffset(): number;
        info: $Object;
        constructor();
        get offset(): number;
    }
}
