import { $Serializable } from "@package/java/io";
import { $Annotation } from "@package/java/lang/annotation";
import { $TypeVariable, $Constructor, $AccessFlag, $Method, $Member, $AnnotatedElement, $AnnotatedType, $Type } from "@package/java/lang/reflect";
import { $ForwardingSet, $ImmutableList } from "@package/com/google/common/collect";
import { $Object, $Throwable, $Class } from "@package/java/lang";
import { $Set } from "@package/java/util";

declare module "@package/com/google/common/reflect" {
    export class $Invokable<T, R> implements $AnnotatedElement, $Member {
        invoke(receiver: T, ...args: $Object[]): R;
        getName(): string;
        static from(method: $Method): $Invokable<never, $Object>;
        static from<T>(constructor: $Constructor<T>): $Invokable<T, T>;
        getModifiers(): number;
        getTypeParameters(): $TypeVariable<never>[];
        isFinal(): boolean;
        setAccessible(flag: boolean): void;
        getReturnType(): $TypeToken<R>;
        isPublic(): boolean;
        isStatic(): boolean;
        isAnnotationPresent(annotationClass: $Class<$Annotation>): boolean;
        isSynthetic(): boolean;
        getDeclaringClass(): $Class<T>;
        getAnnotation<A extends $Annotation>(annotationClass: $Class<A>): A;
        getAnnotations(): $Annotation[];
        getDeclaredAnnotations(): $Annotation[];
        isProtected(): boolean;
        trySetAccessible(): boolean;
        isAccessible(): boolean;
        isVarArgs(): boolean;
        getExceptionTypes(): $ImmutableList<$TypeToken<$Throwable>>;
        getAnnotatedReturnType(): $AnnotatedType;
        getParameters(): $ImmutableList<$Parameter>;
        isAbstract(): boolean;
        isPrivate(): boolean;
        isNative(): boolean;
        isSynchronized(): boolean;
        isPackagePrivate(): boolean;
        isOverridable(): boolean;
        returning<R1 extends R>(returnType: $Class<R1>): $Invokable<T, R1>;
        returning<R1 extends R>(returnType: $TypeToken<R1>): $Invokable<T, R1>;
        getOwnerType(): $TypeToken<T>;
        getAnnotationsByType<T extends $Annotation>(arg0: $Class<T>): T[];
        getDeclaredAnnotation<T extends $Annotation>(arg0: $Class<T>): T;
        getDeclaredAnnotationsByType<T extends $Annotation>(arg0: $Class<T>): T[];
        accessFlags(): $Set<$AccessFlag>;
        get name(): string;
        get modifiers(): number;
        get typeParameters(): $TypeVariable<never>[];
        get final(): boolean;
        get returnType(): $TypeToken<R>;
        get public(): boolean;
        get static(): boolean;
        get synthetic(): boolean;
        get declaringClass(): $Class<T>;
        get annotations(): $Annotation[];
        get declaredAnnotations(): $Annotation[];
        get protected(): boolean;
        get varArgs(): boolean;
        get exceptionTypes(): $ImmutableList<$TypeToken<$Throwable>>;
        get annotatedReturnType(): $AnnotatedType;
        get parameters(): $ImmutableList<$Parameter>;
        get abstract(): boolean;
        get private(): boolean;
        get native(): boolean;
        get synchronized(): boolean;
        get packagePrivate(): boolean;
        get overridable(): boolean;
        get ownerType(): $TypeToken<T>;
    }
    export class $TypeToken$TypeSet extends $ForwardingSet<$TypeToken<T>> implements $Serializable {
        interfaces(): $TypeToken$TypeSet;
        classes(): $TypeToken$TypeSet;
        rawTypes(): $Set<$Class<$TypeToken<T>>>;
    }
    export class $TypeCapture<T> {
    }
    export class $TypeToken<T> extends $TypeCapture<T> implements $Serializable {
        method(method: $Method): $Invokable<T, $Object>;
        static of<T>(type: $Class<T>): $TypeToken<T>;
        static of(type: $Type): $TypeToken<never>;
        wrap(): $TypeToken<T>;
        isPrimitive(): boolean;
        isArray(): boolean;
        getComponentType(): $TypeToken<never>;
        constructor(constructor: $Constructor<never>): $Invokable<T, T>;
        getType(): $Type;
        unwrap(): $TypeToken<T>;
        getRawType(): $Class<T>;
        resolveType(type: $Type): $TypeToken<never>;
        getSubtype(subclass: $Class<never>): $TypeToken<T>;
        isSubtypeOf(type: $TypeToken<never>): boolean;
        isSubtypeOf(supertype: $Type): boolean;
        where<X>(typeParam: $TypeParameter<X>, typeArg: $TypeToken<X>): $TypeToken<T>;
        where<X>(typeParam: $TypeParameter<X>, typeArg: $Class<X>): $TypeToken<T>;
        getSupertype(superclass: $Class<T>): $TypeToken<T>;
        getTypes(): $TypeToken$TypeSet;
        isSupertypeOf(type: $Type): boolean;
        isSupertypeOf(type: $TypeToken<never>): boolean;
        get primitive(): boolean;
        get array(): boolean;
        get componentType(): $TypeToken<never>;
        get type(): $Type;
        get rawType(): $Class<T>;
        get types(): $TypeToken$TypeSet;
    }
    export class $TypeParameter<T> extends $TypeCapture<T> {
    }
    export class $Parameter implements $AnnotatedElement {
        isAnnotationPresent(annotationType: $Class<$Annotation>): boolean;
        getAnnotation<A extends $Annotation>(annotationType: $Class<A>): A;
        getAnnotationsByType<A extends $Annotation>(annotationType: $Class<A>): A[];
        getAnnotations(): $Annotation[];
        getDeclaredAnnotation<A extends $Annotation>(annotationType: $Class<A>): A;
        getDeclaredAnnotationsByType<A extends $Annotation>(annotationType: $Class<A>): A[];
        getDeclaredAnnotations(): $Annotation[];
        getType(): $TypeToken<never>;
        getAnnotatedType(): $AnnotatedType;
        getDeclaringInvokable(): $Invokable<never, never>;
        get annotations(): $Annotation[];
        get declaredAnnotations(): $Annotation[];
        get type(): $TypeToken<never>;
        get annotatedType(): $AnnotatedType;
        get declaringInvokable(): $Invokable<never, never>;
    }
}
