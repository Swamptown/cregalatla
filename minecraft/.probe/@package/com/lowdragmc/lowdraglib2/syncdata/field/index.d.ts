import { $IAccessor } from "@package/com/lowdragmc/lowdraglib2/syncdata/accessor";
import { $IRef } from "@package/com/lowdragmc/lowdraglib2/syncdata/ref";
import { $Field, $Method, $Type } from "@package/java/lang/reflect";
import { $Object, $Class } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/syncdata/field" {
    export class $ManagedKey {
        setPersistentKey(arg0: string): void;
        setRedOnlyManaged(arg0: $Method, arg1: $Method, arg2: $Method): void;
        getClazzType(): $Class<never>;
        static getClazzType(arg0: $Type): $Class<never>;
        getOnDirtyMethod(): $Method;
        getSerializeMethod(): $Method;
        getDeserializeMethod(): $Method;
        createRef(arg0: $Object): $IRef<never>;
        getPersistentKey(): string;
        isDestSync(): boolean;
        isPersist(): boolean;
        isReadOnlyManaged(): boolean;
        isDrop(): boolean;
        getRawField(): $Field;
        getContentType(): $Type;
        getName(): string;
        getFieldAccessor(): $IAccessor<never>;
        isLazy(): boolean;
        constructor(arg0: string, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: $Type, arg6: $Field);
        get onDirtyMethod(): $Method;
        get serializeMethod(): $Method;
        get deserializeMethod(): $Method;
        get destSync(): boolean;
        get persist(): boolean;
        get readOnlyManaged(): boolean;
        get drop(): boolean;
        get rawField(): $Field;
        get contentType(): $Type;
        get name(): string;
        get fieldAccessor(): $IAccessor<never>;
        get lazy(): boolean;
    }
}
