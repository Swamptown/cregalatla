import { $Supplier_ } from "@package/java/util/function";
import { $Component } from "@package/net/minecraft/network/chat";
import { $KeyMapping } from "@package/net/minecraft/client";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";

declare module "@package/net/neoforged/neoforge/client/settings" {
    export class $IKeyConflictContext {
    }
    export interface $IKeyConflictContext {
        isActive(): boolean;
        conflicts(arg0: $IKeyConflictContext): boolean;
        get active(): boolean;
    }
    export class $KeyMappingLookup {
        getAll(arg0: $InputConstants$Key, arg1: boolean): $List<$KeyMapping>;
        getAll(arg0: $InputConstants$Key): $List<$KeyMapping>;
        remove(arg0: $KeyMapping): void;
        put(arg0: $InputConstants$Key, arg1: $KeyMapping): void;
        clear(): void;
        constructor();
    }
    export class $KeyModifier extends $Enum<$KeyModifier> {
        codes(): $InputConstants$Key[];
        static values(): $KeyModifier[];
        static valueOf(arg0: string): $KeyModifier;
        matches(arg0: $InputConstants$Key): boolean;
        isActive(arg0: $IKeyConflictContext): boolean;
        static getKeyModifier(arg0: $InputConstants$Key): $KeyModifier;
        getCombinedName(arg0: $InputConstants$Key, arg1: $Supplier_<$Component>): $Component;
        static valueFromString(arg0: string): $KeyModifier;
        static getActiveModifiers(): $List<$KeyModifier>;
        /**
         * @deprecated
         */
        static getActiveModifier(): $KeyModifier;
        static isKeyCodeModifier(arg0: $InputConstants$Key): boolean;
        static SHIFT: $KeyModifier;
        static MODIFIER_VALUES: $KeyModifier[];
        static ALT: $KeyModifier;
        static NONE: $KeyModifier;
        static CONTROL: $KeyModifier;
        static get activeModifiers(): $List<$KeyModifier>;
        static get activeModifier(): $KeyModifier;
    }
    /**
     * Values that may be interpreted as {@link $KeyModifier}.
     */
    export type $KeyModifier_ = "control" | "shift" | "alt" | "none";
    export class $KeyConflictContext extends $Enum<$KeyConflictContext> implements $IKeyConflictContext {
        static values(): $KeyConflictContext[];
        static valueOf(arg0: string): $KeyConflictContext;
        static IN_GAME: $KeyConflictContext;
        static UNIVERSAL: $KeyConflictContext;
        static GUI: $KeyConflictContext;
    }
    /**
     * Values that may be interpreted as {@link $KeyConflictContext}.
     */
    export type $KeyConflictContext_ = "universal" | "gui" | "in_game";
}
