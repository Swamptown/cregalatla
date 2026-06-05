import { $IConfigChangeListener } from "@package/xaero/lib/common/config/listener";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $Iterable } from "@package/java/lang";
export * as option from "@package/xaero/lib/common/config/option";
export * as single from "@package/xaero/lib/common/config/single";
export * as channel from "@package/xaero/lib/common/config/channel";
export * as listener from "@package/xaero/lib/common/config/listener";
export * as server from "@package/xaero/lib/common/config/server";
export * as profile from "@package/xaero/lib/common/config/profile";
export * as sync from "@package/xaero/lib/common/config/sync";

declare module "@package/xaero/lib/common/config" {
    export class $Config {
        getFailedSerializedValue(arg0: $ConfigOption<never>): string;
        clearDirtyOptions(): void;
        setOptionDefault<T>(arg0: $ConfigOption<T>): void;
        copyOptionFrom<T>(arg0: $ConfigOption<T>, arg1: $Config): void;
        usedOptions(): $Iterable<$ConfigOption<never>>;
        getDirtyOptions(): $Iterable<$ConfigOption<never>>;
        getChangeCount(): number;
        isAllowNullValues(): boolean;
        addFailedSerializedValue<T>(arg0: $ConfigOption<T>, arg1: string): void;
        getRemovedLargeOptions(): $Iterable<$ConfigOption<never>>;
        postSave(): void;
        setDefaults(): void;
        copyOptionsFrom(arg0: $Config): void;
        setChangeListener(arg0: $IConfigChangeListener): void;
        reset(): void;
        get<T>(arg0: $ConfigOption<T>): T;
        set<T>(arg0: $ConfigOption<T>, arg1: T): T;
        getChangeListener(): $IConfigChangeListener;
        set optionDefault(value: $ConfigOption<T>);
        get dirtyOptions(): $Iterable<$ConfigOption<never>>;
        get changeCount(): number;
        get allowNullValues(): boolean;
        get removedLargeOptions(): $Iterable<$ConfigOption<never>>;
    }
}
