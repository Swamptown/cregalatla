import { $Consumer_ } from "@package/java/util/function";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $SpruceOption } from "@package/dev/lambdaurora/spruceui/option";
import { $Config } from "@package/dev/lambdaurora/lambdynlights/shadow/nightconfig/core";

declare module "@package/dev/lambdaurora/lambdynlights/config" {
    export class $BooleanSettingEntry extends $SettingEntry<boolean> {
        withOnSet(onSet: $Consumer_<boolean>): $BooleanSettingEntry;
        constructor(key: string, guiKey: string, defaultValue: boolean, config: $Config, tooltip: $Component_);
        constructor(key: string, defaultValue: boolean, config: $Config, tooltip: $Component_);
    }
    export class $SettingEntry<T> {
        withOnSet(onSet: $Consumer_<T>): $SettingEntry<T>;
        getOption(): $SpruceOption;
        reset(): void;
        get(): T;
        load(config: $Config): void;
        set(value: T): void;
        key(): string;
        save(): void;
        get option(): $SpruceOption;
    }
    export class $LightSourceSettingEntry extends $BooleanSettingEntry {
        constructor(key: string, guiKey: string, defaultValue: boolean, config: $Config, tooltip: $Component_);
    }
}
