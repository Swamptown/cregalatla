import { $GlobalMixin } from "@package/dev/emi/emi/mixin";
import { $ChatFormatting_ } from "@package/net/minecraft";
import { $MutableComponent, $Component } from "@package/net/minecraft/network/chat";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $List_, $List } from "@package/java/util";
import { $Record } from "@package/java/lang";

declare module "@package/dev/emi/emi/input" {
    export class $EmiBind$ModifiedKey extends $Record implements $GlobalMixin {
        getKeyText(formatting: $ChatFormatting_): $MutableComponent;
        modifiersToMatch(): number;
        modifiers(): number;
        static of(code: number, modifiers: number): $EmiBind$ModifiedKey;
        key(): $InputConstants$Key;
        toName(): string;
        isUnbound(): boolean;
        constructor(key: $InputConstants$Key, modifiers: number);
        get unbound(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EmiBind$ModifiedKey}.
     */
    export type $EmiBind$ModifiedKey_ = { key?: $InputConstants$Key, modifiers?: number,  } | [key?: $InputConstants$Key, modifiers?: number, ];
    export class $EmiBind implements $GlobalMixin {
        updateBinds(): void;
        getBindText(): $Component;
        setBinds(...keys: $EmiBind$ModifiedKey_[]): void;
        isHeld(): boolean;
        setBind(offset: number, key: $EmiBind$ModifiedKey_): void;
        matchesKey(keyCode: number, scanCode: number): boolean;
        setKey(keys: $List_<string>): void;
        setToDefault(): void;
        isBound(): boolean;
        matchesMouse(code: number): boolean;
        translationKey: string;
        defaultKeys: $List<$EmiBind$ModifiedKey>;
        boundKeys: $List<$EmiBind$ModifiedKey>;
        static LEFT_CLICK: $EmiBind;
        static MAX_BINDS: number;
        constructor(translationKey: string, code: number);
        constructor(translationKey: string, modifiers: number, code: number);
        constructor(translationKey: string, ...defaultKeys: $EmiBind$ModifiedKey_[]);
        get bindText(): $Component;
        set binds(value: $EmiBind$ModifiedKey_[]);
        get held(): boolean;
        set key(value: $List_<string>);
        get bound(): boolean;
    }
}
