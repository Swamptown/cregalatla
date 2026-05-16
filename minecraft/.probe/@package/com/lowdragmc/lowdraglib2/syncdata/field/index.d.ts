import { $IAccessor } from "@package/com/lowdragmc/lowdraglib2/syncdata/accessor";
import { $IRef } from "@package/com/lowdragmc/lowdraglib2/syncdata/ref";
import { $Field, $Method, $Type } from "@package/java/lang/reflect";
import { $Object, $Class } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/syncdata/field" {
    export class $ManagedKey {
        getName(): string;
        getFieldAccessor(): $IAccessor<never>;
        getPersistentKey(): string;
        createRef(arg0: $Object): $IRef<never>;
        isDestSync(): boolean;
        isPersist(): boolean;
        isDrop(): boolean;
        getRawField(): $Field;
        isReadOnlyManaged(): boolean;
        isLazy(): boolean;
        static getClazzType(arg0: $Type): $Class<never>;
        getClazzType(): $Class<never>;
        getOnDirtyMethod(): $Method;
        getSerializeMethod(): $Method;
        getDeserializeMethod(): $Method;
        setPersistentKey(arg0: string): void;
        setRedOnlyManaged(arg0: $Method, arg1: $Method, arg2: $Method): void;
        getContentType(): $Type;
        constructor(arg0: string, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: $Type, arg6: $Field);
        get name(): string;
        get fieldAccessor(): $IAccessor<never>;
        get destSync(): boolean;
        get persist(): boolean;
        get drop(): boolean;
        get rawField(): $Field;
        get readOnlyManaged(): boolean;
        get lazy(): boolean;
        get onDirtyMethod(): $Method;
        get serializeMethod(): $Method;
        get deserializeMethod(): $Method;
        get contentType(): $Type;
    }
}
