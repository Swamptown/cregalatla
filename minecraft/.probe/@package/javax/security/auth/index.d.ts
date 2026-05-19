import { $Serializable } from "@package/java/io";
import { $Callable_ } from "@package/java/util/concurrent";
import { $PrivilegedExceptionAction_, $Principal, $AccessControlContext, $PrivilegedAction_ } from "@package/java/security";
import { $Object, $Class } from "@package/java/lang";
import { $Set_, $Set } from "@package/java/util";

declare module "@package/javax/security/auth" {
    export class $Destroyable {
    }
    export interface $Destroyable {
        isDestroyed(): boolean;
        destroy(): void;
        get destroyed(): boolean;
    }
    export class $Subject implements $Serializable {
        /**
         * @deprecated
         */
        static doAs<T>(arg0: $Subject, arg1: $PrivilegedExceptionAction_<T>): T;
        /**
         * @deprecated
         */
        static doAs<T>(arg0: $Subject, arg1: $PrivilegedAction_<T>): T;
        static callAs<T>(arg0: $Subject, arg1: $Callable_<T>): T;
        /**
         * @deprecated
         */
        static doAsPrivileged<T>(arg0: $Subject, arg1: $PrivilegedExceptionAction_<T>, arg2: $AccessControlContext): T;
        /**
         * @deprecated
         */
        static doAsPrivileged<T>(arg0: $Subject, arg1: $PrivilegedAction_<T>, arg2: $AccessControlContext): T;
        getPublicCredentials<T>(arg0: $Class<T>): $Set<T>;
        getPublicCredentials(): $Set<$Object>;
        getPrivateCredentials(): $Set<$Object>;
        getPrivateCredentials<T>(arg0: $Class<T>): $Set<T>;
        /**
         * @deprecated
         */
        static getSubject(arg0: $AccessControlContext): $Subject;
        setReadOnly(): void;
        getPrincipals(): $Set<$Principal>;
        getPrincipals<T extends $Principal>(arg0: $Class<T>): $Set<T>;
        static current(): $Subject;
        isReadOnly(): boolean;
        constructor();
        constructor(arg0: boolean, arg1: $Set_<$Principal>, arg2: $Set_<never>, arg3: $Set_<never>);
    }
}
